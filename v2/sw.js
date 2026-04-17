/**
 * 舒窈小课堂 V2 Service Worker
 * 数据外置版，支持多年级扩展
 */
const VERSION = '2026.04.17.v2.01';
const CACHE_NAME = `shuyao-v2-${VERSION}`;
const DATA_CACHE = `shuyao-data-v2-${VERSION}`;

// 需要缓存的静态资源
const STATIC_ASSETS = [
  '/shuyao-english-classroom/v2/',
  '/shuyao-english-classroom/v2/index.html',
  '/shuyao-english-classroom/icons/icon-192.png',
  '/shuyao-english-classroom/icons/icon-512.png'
];

// 数据文件列表（按需加载）
const DATA_FILES = [
  '/shuyao-english-classroom/v2/data/english/grade3_2.json',
  '/shuyao-english-classroom/v2/data/english/grade4_1.json'
];

// 安装事件
self.addEventListener('install', event => {
  console.log('[SW V2] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW V2] Caching static assets');
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.log('[SW V2] Some assets failed to cache:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// 激活事件
self.addEventListener('activate', event => {
  console.log('[SW V2] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== DATA_CACHE) {
            console.log('[SW V2] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 拦截请求
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // 数据文件：网络优先，失败用缓存
  if (url.pathname.includes('/data/english/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(DATA_CACHE).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }
  
  // 其他资源：缓存优先
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
