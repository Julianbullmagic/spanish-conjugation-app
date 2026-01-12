// State
let currentVerb = null;
let currentPronounIndex = 0;
let currentSelection = 'indicative.preterite'; // Default
let streak = 0;
let isAnswerChecked = false;

// DOM Elements
const verbEl = document.getElementById('prompt-verb');
const pronounEl = document.getElementById('prompt-pronoun');
const translationEl = document.getElementById('prompt-translation');
const inputEl = document.getElementById('answer-input');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const feedbackEl = document.getElementById('feedback');
const feedbackMsgEl = document.getElementById('feedback-msg');
const correctAnswerDisplayEl = document.getElementById('correct-answer-display');
const correctTextEl = document.getElementById('correct-text');
const streakEl = document.getElementById('streak-counter');
const tenseSelect = document.getElementById('tense-select');
const tenseTip = document.getElementById('tense-tip');
const virtualKeys = document.querySelectorAll('.virtual-keyboard button');

// Detailed Tips based on user input
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

// Init
function init() {
    setupEventListeners();
    updateTip();
    generateQuestion();
}

function setupEventListeners() {
    checkBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', generateQuestion);
    
    // Handle Enter key
    inputEl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (isAnswerChecked) {
                generateQuestion();
            } else {
                checkAnswer();
            }
        }
    });

    // Tense Change
    tenseSelect.addEventListener('change', (e) => {
        currentSelection = e.target.value;
        updateTip();
        streak = 0;
        streakEl.textContent = streak;
        generateQuestion();
    });

    // Virtual Keyboard
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

function generateQuestion() {
    // Reset UI
    isAnswerChecked = false;
    inputEl.value = '';
    inputEl.disabled = false;
    inputEl.classList.remove('success', 'error');
    feedbackEl.classList.add('hidden');
    checkBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    correctAnswerDisplayEl.classList.add('hidden');
    
    inputEl.focus();

    // Randomize Verb
    const randomVerbIndex = Math.floor(Math.random() * VERB_DATA.length);
    currentVerb = VERB_DATA[randomVerbIndex];

    const { mood, tense } = getMoodAndTense();

    // Determine Pronouns and Index
    let pronounList;
    if (mood === 'imperative') {
        pronounList = PRONOUNS.imperative;
        currentPronounIndex = Math.floor(Math.random() * pronounList.length);
        pronounEl.textContent = pronounList[currentPronounIndex];
    } else if (mood === 'non_finite') {
        pronounList = PRONOUNS.nonFinite;
        currentPronounIndex = 0;
        pronounEl.textContent = "Forma No Personal"; // Generic label
    } else {
        // Indicative and Subjunctive
        pronounList = PRONOUNS.standard;
        currentPronounIndex = Math.floor(Math.random() * pronounList.length);
        pronounEl.textContent = pronounList[currentPronounIndex];
    }

    // Render Verb and Translation
    verbEl.textContent = currentVerb.infinitive;
    
    // Special hint for Imperative Negative
    if (mood === 'imperative' && tense === 'negative') {
        translationEl.textContent = "Don't " + currentVerb.translation + "!";
    } else if (mood === 'imperative' && tense === 'positive') {
         translationEl.textContent = "Command: " + currentVerb.translation + "!";
    } else {
        translationEl.textContent = currentVerb.translation;
    }
}

function checkAnswer() {
    if (isAnswerChecked) return;

    const userAnswer = inputEl.value.trim().toLowerCase();
    const { mood, tense } = getMoodAndTense();
    
    let correctAnswer = "";

    if (mood === 'non_finite') {
        // Access root properties: infinitive, gerund, past_participle
        // map 'infinitive' -> 'infinitive'
        // map 'gerund' -> 'gerund'
        // map 'past_participle' -> 'past_participle'
        correctAnswer = currentVerb[tense];
    } else if (mood === 'indicative' || mood === 'subjunctive') {
        correctAnswer = currentVerb.conjugations[mood][tense][currentPronounIndex];
    } else if (mood === 'imperative') {
        correctAnswer = currentVerb.conjugations.imperative[tense][currentPronounIndex];
    }

    isAnswerChecked = true;
    inputEl.disabled = true;
    feedbackEl.classList.remove('hidden');
    checkBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');

    if (userAnswer === correctAnswer) {
        handleCorrect();
    } else {
        handleIncorrect(correctAnswer);
    }
}

function handleCorrect() {
    streak++;
    streakEl.textContent = streak;
    
    inputEl.classList.add('success');
    feedbackEl.className = 'feedback correct';
    feedbackMsgEl.textContent = "¡Correcto!";
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