// App State
const state = {
    currentLanguage: 'javascript',
    currentRound: 1,
    currentQuestion: 0,
    questionsPerRound: 5,
    score: 0,
    roundScore: 0,
    correctInRound: 0,
    wrongInRound: 0,
    currentProblem: null,
    roundProblems: [],
    usedProblems: [],
    attempts: 0,
    maxAttempts: 3
};

// DOM Elements
const elements = {
    startScreen: document.getElementById('start-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    resultScreen: document.getElementById('result-screen'),
    summaryScreen: document.getElementById('summary-screen'),
    startBtn: document.getElementById('start-btn'),
    roundDisplay: document.getElementById('round-display'),
    questionDisplay: document.getElementById('question-display'),
    scoreDisplay: document.getElementById('score-display'),
    problemTitle: document.getElementById('problem-title'),
    problemDescription: document.getElementById('problem-description'),
    examples: document.getElementById('examples'),
    difficultyBadge: document.getElementById('difficulty-badge'),
    categoryBadge: document.getElementById('category-badge'),
    hintSection: document.getElementById('hint-section'),
    hintContent: document.getElementById('hint-content'),
    outputContent: document.getElementById('output-content'),
    runBtn: document.getElementById('run-btn'),
    submitBtn: document.getElementById('submit-btn'),
    resetCodeBtn: document.getElementById('reset-code-btn'),
    resultIcon: document.getElementById('result-icon'),
    resultTitle: document.getElementById('result-title'),
    resultMessage: document.getElementById('result-message'),
    resultStats: document.getElementById('result-stats'),
    nextBtn: document.getElementById('next-btn'),
    retryBtn: document.getElementById('retry-btn'),
    showHintBtn: document.getElementById('show-hint-btn'),
    completedRound: document.getElementById('completed-round'),
    correctCount: document.getElementById('correct-count'),
    wrongCount: document.getElementById('wrong-count'),
    totalScore: document.getElementById('total-score'),
    accuracy: document.getElementById('accuracy'),
    summaryMessage: document.getElementById('summary-message'),
    newRoundBtn: document.getElementById('new-round-btn'),
    homeBtn: document.getElementById('home-btn')
};

// CodeMirror Editor
let editor;

// Initialize App
function init() {
    setupEventListeners();
    initEditor();
}

// Setup Event Listeners
function setupEventListeners() {
    // Language selection on start screen
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentLanguage = btn.dataset.lang;
        });
    });

    // Language tabs in quiz
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentLanguage = btn.dataset.lang;
            updateEditorLanguage();
            loadProblemCode();
        });
    });

    // Buttons
    elements.startBtn.addEventListener('click', startQuiz);
    elements.runBtn.addEventListener('click', runCode);
    elements.submitBtn.addEventListener('click', submitAnswer);
    elements.resetCodeBtn.addEventListener('click', resetCode);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.retryBtn.addEventListener('click', retryQuestion);
    elements.showHintBtn.addEventListener('click', showHint);
    elements.newRoundBtn.addEventListener('click', startNewRound);
    elements.homeBtn.addEventListener('click', goHome);
}

// Initialize CodeMirror Editor
function initEditor() {
    editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
        mode: 'javascript',
        theme: 'dracula',
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: false,
        lineWrapping: true
    });
}

// Update Editor Language Mode
function updateEditorLanguage() {
    const mode = state.currentLanguage === 'javascript' ? 'javascript' : 'python';
    editor.setOption('mode', mode);
}

// Show Screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Start Quiz
function startQuiz() {
    state.currentRound = 1;
    state.score = 0;
    state.usedProblems = [];
    startNewRound();
}

// Start New Round
function startNewRound() {
    state.currentQuestion = 0;
    state.roundScore = 0;
    state.correctInRound = 0;
    state.wrongInRound = 0;
    state.roundProblems = selectRandomProblems(state.questionsPerRound);

    updateHeader();
    loadQuestion();
    showScreen('quiz-screen');

    // Update language tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === state.currentLanguage);
    });
}

// Select Random Problems
function selectRandomProblems(count) {
    const available = PROBLEMS.filter(p => !state.usedProblems.includes(p.id));

    // If not enough problems, reset used list
    if (available.length < count) {
        state.usedProblems = [];
        return selectRandomProblems(count);
    }

    const shuffled = available.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);
    selected.forEach(p => state.usedProblems.push(p.id));

    return selected;
}

// Load Question
function loadQuestion() {
    state.currentProblem = state.roundProblems[state.currentQuestion];
    state.attempts = 0;

    // Update problem display
    elements.problemTitle.textContent = `${state.currentProblem.id}. ${state.currentProblem.title}`;
    elements.problemDescription.innerHTML = state.currentProblem.description;

    // Update badges
    elements.difficultyBadge.textContent = capitalizeFirst(state.currentProblem.difficulty);
    elements.difficultyBadge.className = `difficulty-badge ${state.currentProblem.difficulty}`;
    elements.categoryBadge.textContent = state.currentProblem.category;

    // Load examples
    let examplesHTML = '';
    state.currentProblem.examples.forEach((ex, i) => {
        examplesHTML += `
            <div class="example">
                <div class="example-title">Example ${i + 1}:</div>
                <div class="example-content">
                    <p><strong>Input:</strong> ${ex.input}</p>
                    <p><strong>Output:</strong> ${ex.output}</p>
                    ${ex.explanation ? `<p><strong>Explanation:</strong> ${ex.explanation}</p>` : ''}
                </div>
            </div>
        `;
    });
    elements.examples.innerHTML = examplesHTML;

    // Hide hint
    elements.hintSection.style.display = 'none';

    // Load code
    loadProblemCode();

    // Clear output
    elements.outputContent.innerHTML = '<p class="output-placeholder">Nhấn "Chạy thử" để xem kết quả...</p>';

    updateHeader();
}

// Load Problem Code
function loadProblemCode() {
    const code = state.currentProblem.starterCode[state.currentLanguage];
    editor.setValue(code);
    updateEditorLanguage();
}

// Reset Code
function resetCode() {
    loadProblemCode();
}

// Update Header
function updateHeader() {
    elements.roundDisplay.textContent = `Round: ${state.currentRound}`;
    elements.questionDisplay.textContent = `Câu: ${state.currentQuestion + 1}/${state.questionsPerRound}`;
    elements.scoreDisplay.textContent = `Điểm: ${state.score}`;
}

// Run Code (Test)
function runCode() {
    const code = editor.getValue();
    const problem = state.currentProblem;

    try {
        const results = executeTests(code, problem, state.currentLanguage);
        displayTestResults(results, false);
    } catch (error) {
        elements.outputContent.innerHTML = `<p class="output-error">Lỗi: ${error.message}</p>`;
    }
}

// Submit Answer
function submitAnswer() {
    const code = editor.getValue();
    const problem = state.currentProblem;
    state.attempts++;

    try {
        const results = executeTests(code, problem, state.currentLanguage);
        const allPassed = results.every(r => r.passed);

        displayTestResults(results, true);

        if (allPassed) {
            showResult(true);
        } else {
            showResult(false);
        }
    } catch (error) {
        elements.outputContent.innerHTML = `<p class="output-error">Lỗi: ${error.message}</p>`;
        showResult(false);
    }
}

// Execute Tests
function executeTests(code, problem, language) {
    const results = [];

    // Extract function name from code
    let funcName;
    if (language === 'javascript') {
        const match = code.match(/function\s+(\w+)/);
        funcName = match ? match[1] : null;
    } else {
        const match = code.match(/def\s+(\w+)/);
        funcName = match ? match[1] : null;
    }

    if (!funcName) {
        throw new Error('Không tìm thấy hàm trong code');
    }

    // For JavaScript, we can actually execute the code
    if (language === 'javascript') {
        try {
            // Create a sandboxed function
            const testFunc = new Function(`
                ${code}
                return ${funcName};
            `)();

            problem.testCases.forEach((tc, i) => {
                try {
                    const result = testFunc(...tc.input);
                    const passed = compareResults(result, tc.expected);
                    results.push({
                        testCase: i + 1,
                        input: JSON.stringify(tc.input),
                        expected: JSON.stringify(tc.expected),
                        actual: JSON.stringify(result),
                        passed
                    });
                } catch (e) {
                    results.push({
                        testCase: i + 1,
                        input: JSON.stringify(tc.input),
                        expected: JSON.stringify(tc.expected),
                        actual: `Error: ${e.message}`,
                        passed: false
                    });
                }
            });
        } catch (e) {
            throw new Error(`Lỗi cú pháp: ${e.message}`);
        }
    } else {
        // For Python, we simulate test results based on code structure
        // In a real app, you'd send this to a backend
        results.push({
            testCase: 1,
            input: 'Python execution',
            expected: 'Server-side execution required',
            actual: 'Code structure looks valid',
            passed: validatePythonCode(code, problem)
        });
    }

    return results;
}

// Validate Python Code (simplified)
function validatePythonCode(code, problem) {
    // Check if code has proper structure
    const solution = problem.solution.python;

    // Basic checks
    const hasFunction = code.includes('def ');
    const hasReturn = code.includes('return');
    const notJustPass = !code.match(/def\s+\w+\([^)]*\):\s*\n?\s*pass\s*$/m);

    return hasFunction && hasReturn && notJustPass;
}

// Compare Results
function compareResults(actual, expected) {
    // Handle arrays
    if (Array.isArray(expected) && Array.isArray(actual)) {
        if (actual.length !== expected.length) return false;
        // Sort for comparison if it's a simple array of numbers
        const sortedActual = [...actual].sort((a, b) => a - b);
        const sortedExpected = [...expected].sort((a, b) => a - b);
        return JSON.stringify(sortedActual) === JSON.stringify(sortedExpected) ||
               JSON.stringify(actual) === JSON.stringify(expected);
    }

    // Handle objects
    if (typeof expected === 'object' && expected !== null) {
        return JSON.stringify(actual) === JSON.stringify(expected);
    }

    // Handle primitives
    return actual === expected;
}

// Display Test Results
function displayTestResults(results, isSubmit) {
    let html = '<div class="test-results">';

    results.forEach(r => {
        html += `
            <div class="test-case ${r.passed ? 'pass' : 'fail'}">
                <i class="fas ${r.passed ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                <div class="test-details">
                    <p><strong>Test ${r.testCase}:</strong> ${r.passed ? 'Passed' : 'Failed'}</p>
                    <p class="expected">Expected: ${r.expected}</p>
                    <p class="actual">Actual: ${r.actual}</p>
                </div>
            </div>
        `;
    });

    html += '</div>';

    const passedCount = results.filter(r => r.passed).length;
    const summary = `<p class="${passedCount === results.length ? 'output-success' : 'output-error'}">
        ${passedCount}/${results.length} test cases passed
    </p>`;

    elements.outputContent.innerHTML = summary + html;
}

// Show Result
function showResult(isCorrect) {
    if (isCorrect) {
        elements.resultIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        elements.resultIcon.className = 'result-icon success';
        elements.resultTitle.textContent = 'Chính xác!';
        elements.resultMessage.textContent = 'Tuyệt vời! Bạn đã giải đúng bài toán.';

        // Calculate score based on attempts
        const points = Math.max(10 - (state.attempts - 1) * 3, 5);
        state.score += points;
        state.roundScore += points;
        state.correctInRound++;

        elements.resultStats.innerHTML = `
            <p>Điểm nhận được: <strong>+${points}</strong></p>
            <p>Số lần thử: <strong>${state.attempts}</strong></p>
        `;

        elements.nextBtn.style.display = 'inline-flex';
        elements.retryBtn.style.display = 'none';
        elements.showHintBtn.style.display = 'none';
    } else {
        elements.resultIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
        elements.resultIcon.className = 'result-icon error';
        elements.resultTitle.textContent = 'Chưa đúng!';

        if (state.attempts < state.maxAttempts) {
            elements.resultMessage.textContent = `Còn ${state.maxAttempts - state.attempts} lần thử. Hãy xem gợi ý và thử lại!`;
            elements.nextBtn.style.display = 'none';
            elements.retryBtn.style.display = 'inline-flex';
            elements.showHintBtn.style.display = 'inline-flex';
        } else {
            elements.resultMessage.textContent = 'Đã hết số lần thử. Xem đáp án và tiếp tục nhé!';
            state.wrongInRound++;

            // Show solution
            const solution = state.currentProblem.solution[state.currentLanguage];
            elements.resultStats.innerHTML = `
                <p><strong>Đáp án tham khảo:</strong></p>
                <pre style="text-align: left; background: var(--code-bg); padding: 10px; border-radius: 6px; overflow-x: auto;">${escapeHtml(solution)}</pre>
            `;

            elements.nextBtn.style.display = 'inline-flex';
            elements.retryBtn.style.display = 'none';
            elements.showHintBtn.style.display = 'none';
        }

        elements.resultStats.innerHTML = elements.resultStats.innerHTML || `
            <p>Số lần thử: <strong>${state.attempts}/${state.maxAttempts}</strong></p>
        `;
    }

    showScreen('result-screen');
    updateHeader();
}

// Retry Question
function retryQuestion() {
    showScreen('quiz-screen');
    showHint();
}

// Show Hint
function showHint() {
    elements.hintSection.style.display = 'block';
    elements.hintContent.textContent = state.currentProblem.hint;

    if (document.getElementById('quiz-screen').classList.contains('active')) {
        elements.hintSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Next Question
function nextQuestion() {
    state.currentQuestion++;

    if (state.currentQuestion >= state.questionsPerRound) {
        showRoundSummary();
    } else {
        loadQuestion();
        showScreen('quiz-screen');
    }
}

// Show Round Summary
function showRoundSummary() {
    elements.completedRound.textContent = state.currentRound;
    elements.correctCount.textContent = state.correctInRound;
    elements.wrongCount.textContent = state.wrongInRound;
    elements.totalScore.textContent = state.score;

    const accuracyPercent = Math.round((state.correctInRound / state.questionsPerRound) * 100);
    elements.accuracy.textContent = `${accuracyPercent}%`;

    // Performance message
    let message, messageClass;
    if (accuracyPercent >= 80) {
        message = 'Xuất sắc! Bạn đã làm rất tốt!';
        messageClass = 'excellent';
    } else if (accuracyPercent >= 60) {
        message = 'Tốt lắm! Tiếp tục cố gắng nhé!';
        messageClass = 'good';
    } else if (accuracyPercent >= 40) {
        message = 'Khá ổn! Cần luyện tập thêm.';
        messageClass = 'average';
    } else {
        message = 'Cần cố gắng hơn! Đừng bỏ cuộc!';
        messageClass = 'needs-practice';
    }

    elements.summaryMessage.textContent = message;
    elements.summaryMessage.className = `summary-message ${messageClass}`;

    showScreen('summary-screen');
}

// Go Home
function goHome() {
    showScreen('start-screen');
}

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
