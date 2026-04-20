/**
 * 24点计算游戏 - 数学思维训练
 * 纯JS实现，支持实时生成有解题目
 */
(function() {
    'use strict';
    
    // 游戏状态
    const state = {
        numbers: [],
        target: 24,
        history: [],
        score: 0,
        streak: 0,
        hints: 3
    };
    
    // 运算符
    const operators = ['+', '-', '×', '÷'];
    
    // 检查表达式是否有解（穷举法）
    function hasSolution(nums) {
        const ops = ['+', '-', '*', '/'];
        const permutes = permutations(nums);
        
        for (const p of permutes) {
            for (const o1 of ops) {
                for (const o2 of ops) {
                    for (const o3 of ops) {
                        // 尝试不同的括号组合
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
    
    // 渲染游戏界面
    function render() {
        const container = document.getElementById('game24-container');
        if (!container) return;
        container.style.display = 'block';
        
        const nums = state.numbers;
        
        container.innerHTML = `
            <div class="game24-page">
                <button class="back-btn" onclick="Game24.exit()">← 返回</button>
                
                <div class="game24-header">
                    <h1>🎯 24点计算</h1>
                    <div class="game24-stats">
                        <span>得分: ${state.score}</span>
                        <span>连胜: ${state.streak}</span>
                        <span>提示: ${state.hints}</span>
                    </div>
                </div>
                
                <div class="game24-numbers">
                    ${nums.map((n, i) => `
                        <div class="game24-card" data-index="${i}" data-value="${n}" onclick="Game24.selectCard(${i})">
                            <span class="game24-num">${n}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="game24-operators">
                    ${operators.map(op => `
                        <button class="game24-op" onclick="Game24.selectOp('${op}')">${op}</button>
                    `).join('')}
                    <button class="game24-op" onclick="Game24.undo()">↩️</button>
                </div>
                
                <div class="game24-actions">
                    <button class="game24-btn hint" onclick="Game24.hint()">💡 提示</button>
                    <button class="game24-btn skip" onclick="Game24.skip()">跳过</button>
                    <button class="game24-btn new" onclick="Game24.newGame()">新题</button>
                </div>
                
                <div class="game24-history">
                    ${state.history.map(h => `<span>${h}</span>`).join(' → ')}
                </div>
            </div>
        `;
        
        // 添加样式（如果不存在）
        addStyles();
    }
    
    // 添加样式
    function addStyles() {
        if (document.getElementById('game24-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'game24-styles';
        style.textContent = `
            .game24-page {
                padding: 20px;
                max-width: 500px;
                margin: 0 auto;
            }
            .game24-header {
                text-align: center;
                margin-bottom: 20px;
            }
            .game24-header h1 {
                font-size: 24px;
                margin-bottom: 10px;
            }
            .game24-stats {
                display: flex;
                justify-content: center;
                gap: 20px;
                font-size: 14px;
                color: #666;
            }
            .game24-numbers {
                display: flex;
                justify-content: center;
                gap: 15px;
                margin: 30px 0;
            }
            .game24-card {
                width: 70px;
                height: 90px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.2s;
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            }
            .game24-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
            }
            .game24-card.selected {
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                transform: scale(1.1);
            }
            .game24-card.used {
                opacity: 0.3;
                pointer-events: none;
            }
            .game24-num {
                color: white;
                font-size: 28px;
                font-weight: bold;
            }
            .game24-operators {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin: 20px 0;
            }
            .game24-op {
                width: 50px;
                height: 50px;
                border: none;
                border-radius: 50%;
                background: #f0f0f0;
                font-size: 20px;
                cursor: pointer;
                transition: all 0.2s;
            }
            .game24-op:hover {
                background: #e0e0e0;
            }
            .game24-op.selected {
                background: #667eea;
                color: white;
            }
            .game24-actions {
                display: flex;
                justify-content: center;
                gap: 15px;
                margin-top: 20px;
            }
            .game24-btn {
                padding: 10px 20px;
                border: none;
                border-radius: 20px;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.2s;
            }
            .game24-btn.hint {
                background: #ffd700;
                color: #333;
            }
            .game24-btn.skip {
                background: #ff6b6b;
                color: white;
            }
            .game24-btn.new {
                background: #51cf66;
                color: white;
            }
            .game24-history {
                text-align: center;
                margin-top: 20px;
                font-size: 14px;
                color: #666;
            }
            .game24-result {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 30px;
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                text-align: center;
                z-index: 1000;
            }
            .game24-result h2 {
                font-size: 28px;
                margin-bottom: 15px;
            }
            .game24-result.success h2 { color: #51cf66; }
            .game24-result.fail h2 { color: #ff6b6b; }
        `;
        document.head.appendChild(style);
    }
    
    // 选择数字
    let selectedNum = null;
    let selectedOp = null;
    
    function selectCard(index) {
        const cards = document.querySelectorAll('.game24-card');
        const card = cards[index];
        
        if (card.classList.contains('used')) return;
        
        if (selectedNum === null) {
            // 选择第一个数字
            selectedNum = { index, value: state.numbers[index] };
            card.classList.add('selected');
        } else if (selectedOp === null) {
            // 还没选运算符，取消第一个选择
            if (selectedNum.index === index) {
                card.classList.remove('selected');
                selectedNum = null;
            }
        } else {
            // 已有数字和运算符，执行计算
            const val1 = selectedNum.value;
            const val2 = state.numbers[index];
            const result = calculate(val1, selectedOp === '×' ? '*' : selectedOp === '÷' ? '/' : selectedOp, val2);
            
            if (result === null || (selectedOp === '÷' && val2 === 0)) {
                alert('除数不能为0！');
                return;
            }
            
            // 更新状态
            state.history.push(`${val1} ${selectedOp} ${val2} = ${result.toFixed(result % 1 === 0 ? 0 : 2)}`);
            
            // 更新数字数组
            state.numbers[selectedNum.index] = null;
            state.numbers[index] = result;
            
            // 检查是否完成
            const remaining = state.numbers.filter(n => n !== null);
            if (remaining.length === 1) {
                if (Math.abs(remaining[0] - 24) < 0.0001) {
                    state.score += 10 + state.streak * 2;
                    state.streak++;
                    showResult(true);
                } else {
                    state.streak = 0;
                    showResult(false, remaining[0]);
                }
            } else {
                render();
            }
        }
    }
    
    function selectOp(op) {
        if (selectedNum === null) {
            alert('请先选择一个数字！');
            return;
        }
        selectedOp = op;
        document.querySelectorAll('.game24-op').forEach(btn => btn.classList.remove('selected'));
        event.target.classList.add('selected');
    }
    
    function undo() {
        // 简化版：重新开始当前题
        state.history = [];
        generateProblem();
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
            alert('提示次数已用完！');
            return;
        }
        state.hints--;
        alert('提示：尝试使用穷举法找到答案！');
        render();
    }
    
    function showResult(success, result) {
        const container = document.getElementById('game24-container');
        if (!container) return;
        container.style.display = 'block';
        const popup = document.createElement('div');
        popup.className = `game24-result ${success ? 'success' : 'fail'}`;
        popup.innerHTML = `
            <h2>${success ? '🎉 正确！' : '😅 再试试'}</h2>
            <p>${success ? `得分 +${10 + (state.streak - 1) * 2}` : `结果是 ${result?.toFixed(2) || '?'}, 不是24`}</p>
            <button onclick="this.parentElement.remove(); Game24.newGame();" class="game24-btn new">
                ${success ? '继续挑战' : '换一题'}
            </button>
        `;
        container.appendChild(popup);
    }
    
    function exit() {
        const container = document.getElementById('game24-container');
        if (container) container.style.display = 'none';
        // 返回数学首页
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
        skip,
        newGame,
        hint,
        exit
    };
    
})();

