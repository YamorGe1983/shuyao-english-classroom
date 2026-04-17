/**
 * 舒窈小课堂 Service Worker
 * 提供离线缓存支持
 * 
 * 版本更新说明：
 * - 修改 VERSION 版本号可触发更新
 * - 用户会收到"有新版本"提示
 */
const VERSION = '2026.04.17.01'; // 版本号格式：年.月.日.序号
const CACHE_NAME = `shuyao-v${VERSION}`;
const STATIC_CACHE = `shuyao-static-v${VERSION}`;
const DATA_CACHE = `shuyao-data-v${VERSION}`;

// 需要缓存的静态资源
const STATIC_ASSETS = [
  '/',
  '/english-learning-app/index.html',
  '/english-learning-app/grammar.html',
  '/english-learning-app/icons/icon-192.png',
  '/english-learning-app/icons/icon-512.png',
  '/english-learning-app/icons/icon-maskable.png'
];

// 数据文件列表
const DATA_FILES = [
  '/english-learning-app/data/english/grade3_2.json',
  '/english-learning-app/data/english/grade4_1.json',
  '/english-learning-app/data/english/grade4_2.json',
  '/english-learning-app/data/english/grade5_1.json',
  '/english-learning-app/data/english/grade5_2.json'
];

// 音标音频基础URL
const AUDIO_BASE_URL = 'https://raw.githubusercontent.com/joshstephenson/PhoneticFlashCards/master/ipa_audio/';

// 安装事件 - 缓存核心资源
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker...');
  
  event.waitUntil(
    Promise.all([
      // 缓存静态资源
      caches.open(STATIC_CACHE).then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS).catch(err => {
          console.log('[SW] Failed to cache some static assets:', err);
        });
      }),
      // 缓存数据文件
      caches.open(DATA_CACHE).then(cache => {
        console.log('[SW] Caching data files');
        return cache.addAll(DATA_FILES).catch(err => {
          console.log('[SW] Failed to cache some data files:', err);
        });
      })
    ]).then(() => {
      console.log('[SW] Installation complete');
      return self.skipWaiting(); // 立即激活新版本
    })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // 删除旧版本的缓存
          if (cacheName !== STATIC_CACHE && cacheName !== DATA_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Activation complete');
      return self.clients.claim(); // 立即控制所有客户端
    })
  );
});

// 请求拦截 - 实现离线优先策略
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // 跳过非GET请求
  if (request.method !== 'GET') {
    return;
  }

  // 跳过 Chrome 扩展和其他非 http/https 请求
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // 处理请求
  event.respondWith(
    (async () => {
      // 1. 优先从缓存读取
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        // 同时在后台更新缓存（stale-while-revalidate）
        updateCache(request);
        return cachedResponse;
      }

      // 2. 缓存未命中，从网络获取
      try {
        const networkResponse = await fetch(request);
        
        // 如果是成功的响应，缓存起来
        if (networkResponse.ok) {
          const cache = await caches.open(
            url.pathname.includes('/data/') ? DATA_CACHE : STATIC_CACHE
          );
          cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
      } catch (error) {
        // 3. 网络失败且缓存未命中，返回离线页面
        console.log('[SW] Network failed, trying offline fallback');
        
        // 如果是导航请求，返回离线提示
        if (request.mode === 'navigate') {
          return caches.match('/english-learning-app/index.html');
        }
        
        // 其他请求返回空响应
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      }
    })()
  );
});

// 后台更新缓存
async function updateCache(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(
        request.url.includes('/data/') ? DATA_CACHE : STATIC_CACHE
      );
      await cache.put(request, networkResponse);
    }
  } catch (error) {
    // 静默失败，不影响用户
  }
}

// 推送通知（可选功能）
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : '学习时间到啦！',
    icon: '/english-learning-app/icons/icon-192.png',
    badge: '/english-learning-app/icons/icon-192.png',
    vibrate: [100, 50, 100],
    tag: 'shuyao-reminder'
  };

  event.waitUntil(
    self.registration.showNotification('舒窈小课堂', options)
  );
});

// 后台同步（可选功能）
self.addEventListener('sync', event => {
  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgress());
  }
});

async function syncProgress() {
  // 同步学习进度到服务器（如果未来需要）
  console.log('[SW] Syncing progress...');
}

// 接收来自页面的消息
self.addEventListener('message', event => {
  if (event.data && event.data.action === 'skipWaiting') {
    console.log('[SW] Skip waiting and activate new version');
    self.skipWaiting();
  }
});