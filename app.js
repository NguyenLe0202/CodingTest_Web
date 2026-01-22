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
    hintPopup: document.getElementById('hint-popup'),
    hintPopupBody: document.getElementById('hint-popup-body'),
    hintCloseBtn: document.getElementById('hint-close-btn'),
    solutionPopup: document.getElementById('solution-popup'),
    solutionPopupBody: document.getElementById('solution-popup-body'),
    solutionCloseBtn: document.getElementById('solution-close-btn'),
    outputContent: document.getElementById('output-content'),
    runBtn: document.getElementById('run-btn'),
    submitBtn: document.getElementById('submit-btn'),
    resetCodeBtn: document.getElementById('reset-code-btn'),
    showSolutionBtn: document.getElementById('show-solution-btn'),
    skipQuestionBtn: document.getElementById('skip-question-btn'),
    resultIcon: document.getElementById('result-icon'),
    resultTitle: document.getElementById('result-title'),
    resultMessage: document.getElementById('result-message'),
    resultStats: document.getElementById('result-stats'),
    nextBtn: document.getElementById('next-btn'),
    retryBtn: document.getElementById('retry-btn'),
    showHintBtn: document.getElementById('show-hint-btn'),
    skipBtn: document.getElementById('skip-btn'),
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

            // Ensure editor is refreshed after language change
            setTimeout(() => {
                editor.refresh();
            }, 100);
        });
    });

    // Buttons
    elements.startBtn.addEventListener('click', startQuiz);
    elements.runBtn.addEventListener('click', runCode);
    elements.submitBtn.addEventListener('click', submitAnswer);
    elements.resetCodeBtn.addEventListener('click', resetCode);
    elements.showSolutionBtn.addEventListener('click', showSolution);
    elements.skipQuestionBtn.addEventListener('click', skipQuestion);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.retryBtn.addEventListener('click', retryQuestion);
    elements.showHintBtn.addEventListener('click', showHint);
    elements.skipBtn.addEventListener('click', skipQuestion);
    elements.newRoundBtn.addEventListener('click', startNewRound);
    elements.homeBtn.addEventListener('click', goHome);

    // Hint popup
    elements.hintCloseBtn.addEventListener('click', closeHintPopup);
    elements.hintPopup.addEventListener('click', (e) => {
        if (e.target === elements.hintPopup) {
            closeHintPopup();
        }
    });

    // Solution popup
    elements.solutionCloseBtn.addEventListener('click', closeSolutionPopup);
    elements.solutionPopup.addEventListener('click', (e) => {
        if (e.target === elements.solutionPopup) {
            closeSolutionPopup();
        }
    });
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

    // Ensure editor is properly rendered when showing quiz screen
    setTimeout(() => {
        editor.refresh();
    }, 150);
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

    // Load code
    loadProblemCode();

    // Clear output
    elements.outputContent.innerHTML = '<p class="output-placeholder">Nhấn "Chạy thử" để xem kết quả...</p>';

    // Clear result stats from previous question
    elements.resultStats.innerHTML = '';

    updateHeader();
}

// Load Problem Code
function loadProblemCode() {
    const code = state.currentProblem.starterCode[state.currentLanguage];
    editor.setValue(code);
    updateEditorLanguage();

    // Refresh editor to ensure proper rendering
    setTimeout(() => {
        editor.refresh();
    }, 100);
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
        elements.skipBtn.style.display = 'none';
    } else {
        elements.resultIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
        elements.resultIcon.className = 'result-icon error';
        elements.resultTitle.textContent = 'Chưa đúng!';

        if (state.attempts < state.maxAttempts) {
            elements.resultMessage.textContent = `Còn ${state.maxAttempts - state.attempts} lần thử. Hãy xem gợi ý và thử lại!`;
            elements.nextBtn.style.display = 'none';
            elements.retryBtn.style.display = 'inline-flex';
            elements.showHintBtn.style.display = 'inline-flex';
            elements.skipBtn.style.display = 'inline-flex';
        } else {
            elements.resultMessage.textContent = 'Đã hết số lần thử. Bạn có thể xem đáp án hoặc tiếp tục câu khác!';
            state.wrongInRound++;

            elements.resultStats.innerHTML = `
                <p style="color: var(--text-secondary);">
                    <i class="fas fa-info-circle"></i> Bạn có thể quay lại màn hình chính để xem và chạy đáp án tham khảo.
                </p>
            `;

            elements.nextBtn.style.display = 'inline-flex';
            elements.retryBtn.style.display = 'none';
            elements.showHintBtn.style.display = 'none';
            elements.skipBtn.style.display = 'none';
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

    // Ensure editor is refreshed when returning to quiz screen
    setTimeout(() => {
        editor.refresh();
    }, 100);
}

// Format Hint with Steps
function formatHint(hint) {
    // Check if hint has numbered steps (1., 2., etc.)
    const steps = hint.split(/\d+\.\s+/).filter(s => s.trim());

    if (steps.length > 1) {
        let html = '<div class="hint-steps">';
        steps.forEach((step, index) => {
            if (step.trim()) {
                html += `
                    <div class="hint-step">
                        <span class="hint-step-number">${index + 1}</span>
                        <div class="hint-step-content">${escapeHtml(step.trim())}</div>
                    </div>
                `;
            }
        });
        html += '</div>';
        return html;
    } else {
        // If no numbered steps, check for sentence breaks
        const sentences = hint.split(/\.\s+/);
        if (sentences.length > 2) {
            let html = '<div class="hint-steps">';
            sentences.forEach((sentence, index) => {
                if (sentence.trim() && sentence.length > 5) {
                    html += `
                        <div class="hint-step">
                            <span class="hint-step-number">${index + 1}</span>
                            <div class="hint-step-content">${escapeHtml(sentence.trim())}.</div>
                        </div>
                    `;
                }
            });
            html += '</div>';
            return html;
        }
    }

    // Default: just show as is with nice formatting
    return `<p style="line-height: 1.8;">${escapeHtml(hint)}</p>`;
}

// Show Hint
function showHint() {
    const formattedHint = formatHint(state.currentProblem.hint);
    elements.hintPopupBody.innerHTML = `
        <div style="margin-bottom: 15px;">
            <h4 style="color: var(--text-primary); margin-bottom: 10px;">💡 Cách tiếp cận:</h4>
        </div>
        ${formattedHint}
    `;
    elements.hintPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Hint Popup
function closeHintPopup() {
    elements.hintPopup.classList.remove('active');
    document.body.style.overflow = '';
}

// Format Solution Code with Comments
function formatSolutionCode(code) {
    const lines = code.split('\n');
    let formatted = '';

    lines.forEach(line => {
        // Highlight comments
        if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
            formatted += `<span class="solution-code-comment">${escapeHtml(line)}</span>\n`;
        } else {
            formatted += escapeHtml(line) + '\n';
        }
    });

    return formatted;
}

// Add Detailed Comments to Solution
function addDetailedComments(solution, language) {
    // This is a simplified version - you can enhance based on problem patterns
    const lines = solution.split('\n');
    let commented = [];

    // Add intro comment
    if (language === 'javascript') {
        commented.push('// 📝 GIẢI THÍCH CHI TIẾT:');
        commented.push('');
    } else {
        commented.push('# 📝 GIẢI THÍCH CHI TIẾT:');
        commented.push('');
    }

    // Add original code with line-by-line comments
    lines.forEach(line => {
        commented.push(line);
    });

    return commented.join('\n');
}

// Show Solution Popup
function showSolution() {
    const solution = state.currentProblem.solution[state.currentLanguage];
    const formattedCode = formatSolutionCode(solution);

    elements.solutionPopupBody.innerHTML = `
        <div class="solution-explanation">
            <h4>📖 Giải thích thuật toán:</h4>
            <p style="line-height: 1.7; color: var(--text-secondary);">
                Dưới đây là code đáp án với giải thích chi tiết.
                Hãy đọc kỹ từng dòng để hiểu cách giải bài toán này.
            </p>
        </div>

        <div class="solution-code">
            <pre>${formattedCode}</pre>
        </div>

        <div class="solution-actions">
            <button class="btn-copy-solution" onclick="copySolutionToEditor()">
                <i class="fas fa-copy"></i> Copy vào Editor
            </button>
        </div>
    `;

    elements.solutionPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Solution Popup
function closeSolutionPopup() {
    elements.solutionPopup.classList.remove('active');
    document.body.style.overflow = '';
}

// Copy Solution to Editor
function copySolutionToEditor() {
    const solution = state.currentProblem.solution[state.currentLanguage];
    editor.setValue(solution);

    // Close popup
    closeSolutionPopup();

    // Show message
    elements.outputContent.innerHTML = `
        <p class="output-info">
            <i class="fas fa-check-circle"></i> Đã copy đáp án vào editor.
            Bạn có thể chạy thử hoặc chỉnh sửa code này.
        </p>
    `;

    // Refresh editor
    setTimeout(() => {
        editor.refresh();
    }, 100);
}

// Skip Question
function skipQuestion() {
    // Mark as wrong since skipped
    state.wrongInRound++;

    // Move to next question
    state.currentQuestion++;

    if (state.currentQuestion >= state.questionsPerRound) {
        showRoundSummary();
    } else {
        loadQuestion();
        showScreen('quiz-screen');

        // Ensure editor is refreshed for new question
        setTimeout(() => {
            editor.refresh();
        }, 100);
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

        // Ensure editor is refreshed for new question
        setTimeout(() => {
            editor.refresh();
        }, 100);
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
