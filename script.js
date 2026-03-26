// --- State (Normal Mode) ---
let currentVerb = null;
let currentPronounIndex = 0;
let currentSelection = 'indicative.preterite';
let streak = 0;
let isAnswerChecked = false;

// --- Random Mode State ---
let randomMode = false;
let questionPool = [];
let questionQueue = [];
let questionHistory = []; // [{key, verbIndex, mood, tense, pronounIndex, userAnswer, wasCorrect, masteredMsg}]
let historyIndex = -1;
let removedKeys = new Set();
let correctCounts = {}; // key → total correct count
let currentQuestionKey = '';
let currentVerbIndex = 0;
let currentMood = '';
let currentTense = '';

// --- DOM Elements ---
const verbEl = document.getElementById('prompt-verb');
const pronounEl = document.getElementById('prompt-pronoun');
const translationEl = document.getElementById('prompt-translation');
const inputEl = document.getElementById('answer-input');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const removeBtn = document.getElementById('remove-btn');
const randomBtn = document.getElementById('random-btn');
const randomTenseLabel = document.getElementById('random-tense-label');
const feedbackEl = document.getElementById('feedback');
const feedbackMsgEl = document.getElementById('feedback-msg');
const correctAnswerDisplayEl = document.getElementById('correct-answer-display');
const correctTextEl = document.getElementById('correct-text');
const streakEl = document.getElementById('streak-counter');
const tenseSelect = document.getElementById('tense-select');
const tenseTip = document.getElementById('tense-tip');
const virtualKeys = document.querySelectorAll('.virtual-keyboard button');

// --- Tips ---
const TIPS = {
    'indicative.present': "Indicative Present: Used for factual statements, beliefs, and habits. (e.g., 'I speak', 'I am speaking')",
    'indicative.preterite': "Pretérito: The 'Zoom Lens'. Used for completed actions with a specific timeframe. (e.g., 'Yesterday I bought bread' - Ayer compré pan).",
    'indicative.imperfect': "Imperfecto: The 'Wide-Angle Lens'. Used for descriptions, background context, or past habits. (e.g., 'I used to play', 'The sky was blue').",
    'indicative.future': "Future: Used for actions that will happen. (e.g., 'I will speak').",
    'indicative.conditional': "Conditional: Used for hypotheticals. (e.g., 'I would speak' if I could).",
    'indicative.present_perfect': "Present Perfect: 'I have spoken'. actions that started in the past and continue or are relevant now.",
    'indicative.past_perfect': "Past Perfect (Pluscuamperfecto): 'I had spoken'. An action happened before another past action.",
    'indicative.future_perfect': "Future Perfect: 'I will have spoken'. Action completed by a certain future time.",
    'indicative.conditional_perfect': "Conditional Perfect: 'I would have spoken'. Hypothetical past action.",
    'subjunctive.present': "Subjunctive Present: Wishes, doubts, emotions. (e.g., 'I hope that you speak').",
    'subjunctive.imperfect': "Subjunctive Imperfect: Past wishes/doubts. (e.g., 'If I were you...', 'I wanted you to speak').",
    'subjunctive.present_perfect': "Subjunctive Present Perfect: 'I hope that you have spoken'.",
    'imperative.positive': "Imperative (Positive): Commands! (e.g., '¡Habla!' - Speak!).",
    'imperative.negative': "Imperative (Negative): Prohibitions. (e.g., '¡No hables!' - Don't speak!).",
    'non_finite.infinitive': "Infinitive: The base form. (e.g., 'To speak').",
    'non_finite.gerund': "Gerund: Ongoing action. (e.g., 'Speaking' - Hablando).",
    'non_finite.past_participle': "Past Participle: Used in compound tenses. (e.g., 'Spoken' - Hablado)."
};

const TENSE_NAMES = {
    'indicative.present': 'Indicative Present',
    'indicative.preterite': 'Preterite',
    'indicative.imperfect': 'Imperfect',
    'indicative.future': 'Future',
    'indicative.conditional': 'Conditional',
    'indicative.present_perfect': 'Present Perfect',
    'indicative.past_perfect': 'Past Perfect',
    'indicative.future_perfect': 'Future Perfect',
    'indicative.conditional_perfect': 'Conditional Perfect',
    'subjunctive.present': 'Subjunctive Present',
    'subjunctive.imperfect': 'Subjunctive Imperfect',
    'subjunctive.present_perfect': 'Subjunctive Pres. Perfect',
    'imperative.positive': 'Imperative (Positive)',
    'imperative.negative': 'Imperative (Negative)',
    'non_finite.infinitive': 'Infinitive',
    'non_finite.gerund': 'Gerund',
    'non_finite.past_participle': 'Past Participle',
};

const ALL_TENSE_CONFIGS = [
    { mood: 'indicative', tense: 'present', pronounCount: 6 },
    { mood: 'indicative', tense: 'preterite', pronounCount: 6 },
    { mood: 'indicative', tense: 'imperfect', pronounCount: 6 },
    { mood: 'indicative', tense: 'future', pronounCount: 6 },
    { mood: 'indicative', tense: 'conditional', pronounCount: 6 },
    { mood: 'indicative', tense: 'present_perfect', pronounCount: 6 },
    { mood: 'indicative', tense: 'past_perfect', pronounCount: 6 },
    { mood: 'indicative', tense: 'future_perfect', pronounCount: 6 },
    { mood: 'indicative', tense: 'conditional_perfect', pronounCount: 6 },
    { mood: 'subjunctive', tense: 'present', pronounCount: 6 },
    { mood: 'subjunctive', tense: 'imperfect', pronounCount: 6 },
    { mood: 'subjunctive', tense: 'present_perfect', pronounCount: 6 },
    { mood: 'imperative', tense: 'positive', pronounCount: 5 },
    { mood: 'imperative', tense: 'negative', pronounCount: 5 },
    { mood: 'non_finite', tense: 'infinitive', pronounCount: 1 },
    { mood: 'non_finite', tense: 'gerund', pronounCount: 1 },
    { mood: 'non_finite', tense: 'past_participle', pronounCount: 1 },
];

// --- Init ---
function init() {
    setupEventListeners();
    updateTip();
    generateQuestion();
}

function setupEventListeners() {
    checkBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', generateQuestion);
    backBtn.addEventListener('click', goBack);
    removeBtn.addEventListener('click', removeCurrentQuestion);
    randomBtn.addEventListener('click', toggleRandomMode);

    inputEl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (isAnswerChecked) {
                generateQuestion();
            } else {
                checkAnswer();
            }
        }
    });

    tenseSelect.addEventListener('change', (e) => {
        currentSelection = e.target.value;
        updateTip();
        streak = 0;
        streakEl.textContent = streak;
        generateQuestion();
    });

    virtualKeys.forEach(btn => {
        btn.addEventListener('click', () => {
            const char = btn.getAttribute('data-char');
            insertAtCursor(inputEl, char);
            inputEl.focus();
        });
    });
}

function updateTip() {
    tenseTip.textContent = TIPS[currentSelection] || "Practice your Spanish conjugation!";
}

function getMoodAndTense() {
    const parts = currentSelection.split('.');
    return { mood: parts[0], tense: parts[1] };
}

// --- Normal Mode Question Generation ---
function generateQuestion() {
    if (randomMode) {
        generateRandomQuestion();
        return;
    }

    isAnswerChecked = false;
    inputEl.value = '';
    inputEl.disabled = false;
    inputEl.classList.remove('success', 'error');
    feedbackEl.classList.add('hidden');
    checkBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    correctAnswerDisplayEl.classList.add('hidden');
    randomTenseLabel.classList.add('hidden');

    inputEl.focus();

    const randomVerbIndex = Math.floor(Math.random() * VERB_DATA.length);
    currentVerb = VERB_DATA[randomVerbIndex];
    const { mood, tense } = getMoodAndTense();

    let pronounList;
    if (mood === 'imperative') {
        pronounList = PRONOUNS.imperative;
        currentPronounIndex = Math.floor(Math.random() * pronounList.length);
        pronounEl.textContent = pronounList[currentPronounIndex];
    } else if (mood === 'non_finite') {
        pronounList = PRONOUNS.nonFinite;
        currentPronounIndex = 0;
        pronounEl.textContent = "Forma No Personal";
    } else {
        pronounList = PRONOUNS.standard;
        currentPronounIndex = Math.floor(Math.random() * pronounList.length);
        pronounEl.textContent = pronounList[currentPronounIndex];
    }

    verbEl.textContent = currentVerb.infinitive;
    if (mood === 'imperative' && tense === 'negative') {
        translationEl.textContent = "Don't " + currentVerb.translation + "!";
    } else if (mood === 'imperative' && tense === 'positive') {
        translationEl.textContent = "Command: " + currentVerb.translation + "!";
    } else {
        translationEl.textContent = currentVerb.translation;
    }

    updateNavButtons();
}

// --- Random Mode ---
function buildQuestionPool() {
    questionPool = [];
    VERB_DATA.forEach((_verb, verbIndex) => {
        ALL_TENSE_CONFIGS.forEach(({ mood, tense, pronounCount }) => {
            for (let pronounIndex = 0; pronounIndex < pronounCount; pronounIndex++) {
                const key = `${verbIndex}_${mood}_${tense}_${pronounIndex}`;
                if (!removedKeys.has(key)) {
                    questionPool.push({ key, verbIndex, mood, tense, pronounIndex });
                }
            }
        });
    });
}

function refillQueue() {
    buildQuestionPool();
    questionQueue = [...questionPool].sort(() => Math.random() - 0.5);
}

function getNextQuestion() {
    if (questionQueue.length === 0) refillQueue();
    if (questionQueue.length === 0) return null;
    return questionQueue.shift();
}

function scheduleRepetitions(questionData, count) {
    for (let i = 0; i < count; i++) {
        const insertAt = Math.floor(Math.random() * (questionQueue.length + 1));
        questionQueue.splice(insertAt, 0, { ...questionData });
    }
}

function generateRandomQuestion() {
    // Navigate forward in history if we went back
    if (historyIndex < questionHistory.length - 1) {
        historyIndex++;
        loadHistoryEntry(historyIndex);
        return;
    }
    generateNextNewQuestion();
}

function generateNextNewQuestion() {
    const q = getNextQuestion();
    if (!q) {
        pronounEl.textContent = '';
        verbEl.textContent = '¡Felicidades!';
        translationEl.textContent = 'You have mastered all questions!';
        randomTenseLabel.classList.add('hidden');
        feedbackEl.classList.add('hidden');
        checkBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        removeBtn.classList.add('hidden');
        backBtn.classList.toggle('hidden', historyIndex <= 0);
        return;
    }
    questionHistory.push({ ...q, userAnswer: null, wasCorrect: null, masteredMsg: null });
    historyIndex = questionHistory.length - 1;
    loadHistoryEntry(historyIndex);
}

function loadHistoryEntry(index) {
    const entry = questionHistory[index];

    currentVerbIndex = entry.verbIndex;
    currentMood = entry.mood;
    currentTense = entry.tense;
    currentPronounIndex = entry.pronounIndex;
    currentVerb = VERB_DATA[entry.verbIndex];
    currentQuestionKey = entry.key;

    if (entry.mood === 'imperative') {
        pronounEl.textContent = PRONOUNS.imperative[entry.pronounIndex];
    } else if (entry.mood === 'non_finite') {
        pronounEl.textContent = "Forma No Personal";
    } else {
        pronounEl.textContent = PRONOUNS.standard[entry.pronounIndex];
    }

    verbEl.textContent = currentVerb.infinitive;
    if (entry.mood === 'imperative' && entry.tense === 'negative') {
        translationEl.textContent = "Don't " + currentVerb.translation + "!";
    } else if (entry.mood === 'imperative' && entry.tense === 'positive') {
        translationEl.textContent = "Command: " + currentVerb.translation + "!";
    } else {
        translationEl.textContent = currentVerb.translation;
    }

    randomTenseLabel.textContent = TENSE_NAMES[`${entry.mood}.${entry.tense}`] || '';
    randomTenseLabel.classList.remove('hidden');
    tenseTip.textContent = TIPS[`${entry.mood}.${entry.tense}`] || "Practice your Spanish conjugation!";

    if (entry.wasCorrect !== null) {
        isAnswerChecked = true;
        inputEl.value = entry.userAnswer || '';
        inputEl.disabled = true;
        checkBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        correctAnswerDisplayEl.classList.add('hidden');
        feedbackEl.classList.remove('hidden');

        if (entry.wasCorrect) {
            inputEl.classList.remove('error');
            inputEl.classList.add('success');
            feedbackEl.className = 'feedback correct';
            feedbackMsgEl.innerHTML = entry.masteredMsg || "<strong>¡Muy bien!</strong>";
        } else {
            inputEl.classList.remove('success');
            inputEl.classList.add('error');
            feedbackEl.className = 'feedback incorrect';
            feedbackMsgEl.innerHTML = "<strong>Incorrecto.</strong>";
            correctAnswerDisplayEl.classList.remove('hidden');
            correctTextEl.textContent = getCorrectAnswer(entry.verbIndex, entry.mood, entry.tense, entry.pronounIndex);
        }
    } else {
        isAnswerChecked = false;
        inputEl.value = '';
        inputEl.disabled = false;
        inputEl.classList.remove('success', 'error');
        feedbackEl.classList.add('hidden');
        checkBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
        correctAnswerDisplayEl.classList.add('hidden');
    }

    updateNavButtons();
    inputEl.focus();
}

function getCorrectAnswer(verbIndex, mood, tense, pronounIndex) {
    const verb = VERB_DATA[verbIndex];
    if (mood === 'non_finite') return verb[tense];
    if (mood === 'indicative' || mood === 'subjunctive') return verb.conjugations[mood][tense][pronounIndex];
    if (mood === 'imperative') return verb.conjugations.imperative[tense][pronounIndex];
    return '';
}

function goBack() {
    if (historyIndex <= 0) return;
    historyIndex--;
    loadHistoryEntry(historyIndex);
}

function removeCurrentQuestion() {
    removedKeys.add(currentQuestionKey);
    questionQueue = questionQueue.filter(q => q.key !== currentQuestionKey);
    buildQuestionPool();

    // Jump to end of history or a new question
    if (historyIndex < questionHistory.length - 1) {
        historyIndex = questionHistory.length - 1;
        const latest = questionHistory[historyIndex];
        if (latest.wasCorrect !== null) {
            generateNextNewQuestion();
        } else {
            loadHistoryEntry(historyIndex);
        }
    } else {
        generateNextNewQuestion();
    }
}

function updateNavButtons() {
    if (!randomMode) {
        backBtn.classList.add('hidden');
        removeBtn.classList.add('hidden');
        return;
    }
    backBtn.classList.toggle('hidden', historyIndex <= 0);
    removeBtn.classList.toggle('hidden', !isAnswerChecked);
}

function toggleRandomMode() {
    randomMode = !randomMode;
    randomBtn.classList.toggle('active', randomMode);
    randomBtn.textContent = randomMode ? 'Random: ON' : 'Random Mode';
    tenseSelect.disabled = randomMode;
    tenseSelect.classList.toggle('disabled', randomMode);

    if (randomMode) {
        buildQuestionPool();
        refillQueue();
        questionHistory = [];
        historyIndex = -1;
        correctCounts = {};
        streak = 0;
        streakEl.textContent = streak;
        generateNextNewQuestion();
    } else {
        questionHistory = [];
        historyIndex = -1;
        streak = 0;
        streakEl.textContent = streak;
        randomTenseLabel.classList.add('hidden');
        updateTip();
        generateQuestion();
    }
}

// --- Answer Checking ---
function checkAnswer() {
    if (isAnswerChecked) return;

    const userAnswer = inputEl.value.trim().toLowerCase();
    let correctAnswer;

    if (randomMode) {
        correctAnswer = getCorrectAnswer(currentVerbIndex, currentMood, currentTense, currentPronounIndex);
    } else {
        const { mood, tense } = getMoodAndTense();
        if (mood === 'non_finite') {
            correctAnswer = currentVerb[tense];
        } else if (mood === 'indicative' || mood === 'subjunctive') {
            correctAnswer = currentVerb.conjugations[mood][tense][currentPronounIndex];
        } else if (mood === 'imperative') {
            correctAnswer = currentVerb.conjugations.imperative[tense][currentPronounIndex];
        }
    }

    isAnswerChecked = true;
    inputEl.disabled = true;
    feedbackEl.classList.remove('hidden');
    checkBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');

    const isCorrect = userAnswer === correctAnswer;

    if (randomMode) {
        const entry = questionHistory[historyIndex];
        if (entry) {
            entry.userAnswer = userAnswer;
            entry.wasCorrect = isCorrect;
        }

        if (isCorrect) {
            correctCounts[currentQuestionKey] = (correctCounts[currentQuestionKey] || 0) + 1;

            if (correctCounts[currentQuestionKey] >= 3) {
                removedKeys.add(currentQuestionKey);
                questionQueue = questionQueue.filter(q => q.key !== currentQuestionKey);
                buildQuestionPool();

                streak++;
                streakEl.textContent = streak;
                inputEl.classList.add('success');
                feedbackEl.className = 'feedback correct';
                const masteredMsg = "<strong>¡Excelente!</strong> Mastered — correct 3 times!";
                feedbackMsgEl.innerHTML = masteredMsg;
                if (entry) entry.masteredMsg = masteredMsg;
            } else {
                handleCorrect();
            }
        } else {
            handleIncorrect(correctAnswer);
            scheduleRepetitions({
                key: currentQuestionKey,
                verbIndex: currentVerbIndex,
                mood: currentMood,
                tense: currentTense,
                pronounIndex: currentPronounIndex
            }, 50);
        }

        updateNavButtons();
    } else {
        if (isCorrect) {
            handleCorrect();
        } else {
            handleIncorrect(correctAnswer);
        }
    }
}

function handleCorrect() {
    streak++;
    streakEl.textContent = streak;
    inputEl.classList.add('success');
    feedbackEl.className = 'feedback correct';
    feedbackMsgEl.innerHTML = "<strong>¡Muy bien!</strong>";
}

function handleIncorrect(answer) {
    streak = 0;
    streakEl.textContent = streak;
    inputEl.classList.add('error');
    feedbackEl.className = 'feedback incorrect';
    feedbackMsgEl.innerHTML = "<strong>Incorrecto.</strong>";
    correctAnswerDisplayEl.classList.remove('hidden');
    correctTextEl.textContent = answer;
}

function insertAtCursor(input, text) {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const value = input.value;
    input.value = value.substring(0, start) + text + value.substring(end);
    input.selectionStart = input.selectionEnd = start + text.length;
}

// Start
init();
