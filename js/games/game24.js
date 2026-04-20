/**
 * 24点计算游戏 - 数学思维训练
 * 改进版：支持括号、重置当前题、更好的交互体验
 */
(function() {
    'use strict';
    
    // 游戏状态
    const state = {
        originalNumbers: [],  // 原始数字（用于重置）
        numbers: [],          // 当前数字
        target: 24,
        history: [],
        score: 0,
        streak: 0,
        hints: 3
    };
    
    // 运算符
    const operators = ['+', '-', '×', '÷'];
    
    // 自定义弹窗
    function showAlert(message) {
        const existing = document.getElementById('game24-alert');
        if (existing) existing.remove();
        
        const popup = document.createElement('div');
        popup.id = 'game24-alert';
        popup.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:24px 32px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.3);z-index:10001;text-align:center;min-width:200px;max-width:80%;';
        popup.innerHTML = `
            <p style="margin:0 0 16px;font-size:16px;color:#2D3436;">${message}</p>
            <button onclick="this.parentElement.remove()" style="padding:8px 24px;background:#667eea;color:white;border:none;border-radius:20px;cursor:pointer;font-size:14px;">确定</button>
        `;
        document.body.appendChild(popup);
    }
    
    // 检查表达式是否有解（穷举法）
    function hasSolution(nums) {
        const ops = ['+', '-', '*', '/'];
        const permutes = permutations(nums);
        
        for (const p of permutes) {
            for (const o1 of ops) {
                for (const o2 of ops) {
                    for (const o3 of ops) {
                        const expressions = [
                            `((${p[0]} ${o1} ${p[1]}) ${o2} ${p[2]}) ${o3} ${p[3]}`,
                            `(${p[0]} ${o1} (${p[1]} ${o2} ${p[2]})) ${o3} ${p[3]}`,
                            `(${p[0]} ${o1} ${p[1]}) ${o2} (${p[2]} ${o3} ${p[3]})`,
                            `${p[0]} ${o1} ((${p[1]} ${o2} ${p[2]}) ${o3} ${p[3]})`,
                            `${p[0]} ${o1} (${p[1]} ${o2} (${p[2]} ${o3} ${p[3]}))`
                        ];
                        
                        for (const expr of expressions) {
                            try {
                                if (Math.abs(eval(expr) - 24) < 0.0001) {
                                    return true;
                                }
                            } catch (e) {}
                        }
                    }
                }
            }
        }
        return false;
    }
    
    // 全排列
    function permutations(arr) {
        if (arr.length <= 1) return [arr];
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
            for (const p of permutations(rest)) {
                result.push([arr[i], ...p]);
            }
        }
        return result;
    }
    
    // 生成新题目
    function generateProblem() {
        let nums;
        let attempts = 0;
        do {
            nums = Array(4).fill(0).map(() => Math.floor(Math.random() * 13) + 1);
            attempts++;
        } while (!hasSolution(nums) && attempts < 100);
        
        state.originalNumbers = [...nums];
        state.numbers = nums;
        state.history = [];
        return nums;
    }
    
    // 计算当前值
    function calculate(a, op, b) {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '×': return a * b;
            case '÷': return b !== 0 ? a / b : null;
        }
    }
    
    // 当前选择
    let selectedNum = null;
    let selectedOp = null;
    
    // 渲染游戏界面
    function render() {
        const container = document.getElementById('game24-container');
        if (!container) return;
        container.style.display = 'block';
        
        const nums = state.numbers;
        
        container.innerHTML = `
            <div class="game24-page" style="padding:20px;padding-bottom:100px;">
                <button class="back-btn" onclick="Game24.exit()" style="margin-bottom:16px;">← 返回</button>
                
                <div class="game24-header" style="text-align:center;margin-bottom:24px;">
                    <h1 style="font-size:24px;margin-bottom:12px;">🎯 24点计算</h1>
                    <div style="display:flex;justify-content:center;gap:20px;font-size:14px;color:#666;">
                        <span>得分: ${state.score}</span>
                        <span>连胜: ${state.streak}</span>
                        <span>提示: ${state.hints}</span>
                    </div>
                </div>
                
                <div class="game24-numbers" style="display:flex;justify-content:center;gap:12px;margin:24px 0;">
                    ${nums.map((n, i) => n !== null ? `
                        <div class="game24-card ${selectedNum && selectedNum.index === i ? 'selected' : ''}" 
                             onclick="Game24.selectCard(${i})"
                             style="width:72px;height:96px;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);border-radius:12px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 15px rgba(102,126,234,0.4);${selectedNum && selectedNum.index === i ? 'background:linear-gradient(135deg, #f093fb 0%, #f5576c 100%);transform:scale(1.05);' : ''}">
                            <span style="color:white;font-size:32px;font-weight:bold;">${n}</span>
                        </div>
                    ` : `
                        <div class="game24-card used" style="width:72px;height:96px;background:#e0e0e0;border-radius:12px;opacity:0.3;"></div>
                    `).join('')}
                </div>
                
                <div class="game24-operators" style="display:flex;justify-content:center;gap:10px;margin:20px 0;">
                    ${operators.map(op => `
                        <button class="game24-op ${selectedOp === op ? 'selected' : ''}" 
                                onclick="Game24.selectOp('${op}')"
                                style="width:56px;height:56px;border:none;border-radius:50%;background:${selectedOp === op ? '#667eea;color:white;' : '#f0f0f0;'}font-size:24px;cursor:pointer;transition:all 0.2s;">
                            ${op}
                        </button>
                    `).join('')}
                </div>
                
                <div class="game24-history" style="text-align:center;margin:16px 0;min-height:24px;font-size:14px;color:#666;">
                    ${state.history.length > 0 ? state.history.join(' → ') : '点击数字开始'}
                </div>
                
                <div class="game24-actions" style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:20px;">
                    <button onclick="Game24.reset()" style="padding:12px 20px;background:#FFE5E5;color:#FF6B6B;border:none;border-radius:20px;cursor:pointer;font-size:14px;">
                        🔄 重置本题
                    </button>
                    <button onclick="Game24.undo()" style="padding:12px 20px;background:#FFF3CD;color:#856404;border:none;border-radius:20px;cursor:pointer;font-size:14px;">
                        ↩️ 撤销
                    </button>
                    <button onclick="Game24.skip()" style="padding:12px 20px;background:#E8F4FD;color:#4A90D9;border:none;border-radius:20px;cursor:pointer;font-size:14px;">
                        ⏭️ 换题
                    </button>
                    <button onclick="Game24.hint()" style="padding:12px 20px;background:#D4EDDA;color:#155724;border:none;border-radius:20px;cursor:pointer;font-size:14px;">
                        💡 提示
                    </button>
                </div>
                
                <div style="text-align:center;margin-top:24px;padding:16px;background:#f5f5f5;border-radius:12px;">
                    <p style="margin:0;font-size:14px;color:#666;">
                        <strong>玩法：</strong>选数字 → 选运算符 → 选数字 → 自动计算<br>
                        三个数算完后，检查结果是否为24
                    </p>
                </div>
            </div>
        `;
    }
    
    // 选择数字
    function selectCard(index) {
        if (state.numbers[index] === null) return;
        
        const num = state.numbers[index];
        
        if (selectedNum === null) {
            // 选择第一个数字
            selectedNum = { index, value: num };
            render();
        } else if (selectedOp === null) {
            // 还没选运算符
            if (selectedNum.index === index) {
                // 点击同一个数字，取消选择
                selectedNum = null;
                render();
            } else {
                // 选择另一个数字，提示先选运算符
                showAlert('请先选择运算符！');
            }
        } else {
            // 已有数字和运算符，执行计算
            const val1 = selectedNum.value;
            const val2 = num;
            
            if (selectedOp === '÷' && val2 === 0) {
                showAlert('除数不能为0！');
                return;
            }
            
            const opForCalc = selectedOp === '×' ? '*' : selectedOp === '÷' ? '/' : selectedOp;
            const result = calculate(val1, selectedOp, val2);
            
            // 更新状态
            state.history.push(`${val1} ${selectedOp} ${val2} = ${Number.isInteger(result) ? result : result.toFixed(2)}`);
            
            // 更新数字数组
            state.numbers[selectedNum.index] = null;
            state.numbers[index] = result;
            
            // 重置选择
            selectedNum = null;
            selectedOp = null;
            
            // 检查是否完成
            const remaining = state.numbers.filter(n => n !== null);
            if (remaining.length === 1) {
                if (Math.abs(remaining[0] - 24) < 0.0001) {
                    state.score += 10 + state.streak * 2;
                    state.streak++;
                    setTimeout(() => showResult(true), 300);
                } else {
                    state.streak = 0;
                    setTimeout(() => showResult(false, remaining[0]), 300);
                }
            } else {
                render();
            }
        }
    }
    
    function selectOp(op) {
        if (selectedNum === null) {
            showAlert('请先选择一个数字！');
            return;
        }
        selectedOp = op;
        render();
    }
    
    // 撤销（重置当前题）
    function undo() {
        if (state.history.length === 0) {
            showAlert('没有可撤销的操作');
            return;
        }
        // 重置到原始状态
        reset();
    }
    
    // 重置当前题
    function reset() {
        state.numbers = [...state.originalNumbers];
        state.history = [];
        selectedNum = null;
        selectedOp = null;
        render();
    }
    
    function skip() {
        state.streak = 0;
        newGame();
    }
    
    function newGame() {
        generateProblem();
        selectedNum = null;
        selectedOp = null;
        state.history = [];
        render();
    }
    
    function hint() {
        if (state.hints <= 0) {
            showAlert('提示次数已用完！');
            return;
        }
        state.hints--;
        
        // 尝试找到一个解
        const nums = state.originalNumbers;
        const ops = ['+', '-', '*', '/'];
        const opSymbols = ['+', '-', '×', '÷'];
        const permutes = permutations(nums);
        
        for (const p of permutes) {
            for (let i1 = 0; i1 < 4; i1++) {
                for (let i2 = 0; i2 < 4; i2++) {
                    for (let i3 = 0; i3 < 4; i3++) {
                        const expressions = [
                            { expr: `((${p[0]} ${ops[i1]} ${p[1]}) ${ops[i2]} ${p[2]}) ${ops[i3]} ${p[3]}`, hint: `(${p[0]} ${opSymbols[i1]} ${p[1]}) ${opSymbols[i2]} ${p[2]} ${opSymbols[i3]} ${p[3]}` },
                            { expr: `(${p[0]} ${ops[i1]} (${p[1]} ${ops[i2]} ${p[2]})) ${ops[i3]} ${p[3]}`, hint: `${p[0]} ${opSymbols[i1]} (${p[1]} ${opSymbols[i2]} ${p[2]}) ${opSymbols[i3]} ${p[3]}` },
                            { expr: `(${p[0]} ${ops[i1]} ${p[1]}) ${ops[i2]} (${p[2]} ${ops[i3]} ${p[3]})`, hint: `(${p[0]} ${opSymbols[i1]} ${p[1]}) ${opSymbols[i2]} (${p[2]} ${opSymbols[i3]} ${p[3]})` }
                        ];
                        
                        for (const e of expressions) {
                            try {
                                if (Math.abs(eval(e.expr) - 24) < 0.0001) {
                                    showAlert(`参考答案：${e.hint} = 24`);
                                    render();
                                    return;
                                }
                            } catch (err) {}
                        }
                    }
                }
            }
        }
        
        showAlert('未找到解法（这不应该发生）');
        render();
    }
    
    function showResult(success, result) {
        const container = document.getElementById('game24-container');
        if (!container) return;
        
        const popup = document.createElement('div');
        popup.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:32px;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,0.3);text-align:center;z-index:10000;min-width:240px;';
        popup.innerHTML = `
            <h2 style="font-size:32px;margin-bottom:16px;">${success ? '🎉 正确！' : '😅 再试试'}</h2>
            <p style="margin-bottom:24px;font-size:16px;color:#666;">
                ${success ? `得分 +${10 + (state.streak - 1) * 2}` : `结果是 ${result?.toFixed(2) || '?'}, 不是24`}
            </p>
            <button onclick="this.parentElement.remove(); Game24.newGame();" style="padding:12px 32px;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:white;border:none;border-radius:24px;cursor:pointer;font-size:16px;">
                ${success ? '继续挑战' : '换一题'}
            </button>
        `;
        container.appendChild(popup);
    }
    
    function exit() {
        const container = document.getElementById('game24-container');
        if (container) container.style.display = 'none';
        if (typeof App !== 'undefined' && App.showMathMain) {
            App.showMathMain();
        }
    }
    
    // 初始化游戏
    function init() {
        generateProblem();
        render();
    }
    
    // 暴露全局接口
    window.Game24 = {
        init,
        selectCard,
        selectOp,
        undo,
        reset,
        skip,
        newGame,
        hint,
        exit
    };
    
})();
