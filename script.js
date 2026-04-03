// ===== STATE =====
let streak = 0;
let isAnswerChecked = false;
let filterOpen = false;
let filterDirty = false;

// Filter selections
let selectedTopics = new Set(['indicative.preterite']);
let selectedVerbIndices = new Set(); // empty = use all verbs

// Pool / queue / history
let questionPool = [];
let questionQueue = [];
let questionHistory = []; // each entry: { type, key, verbIndex?, mood?, tense?, pronounIndex?, subtype?, questionIndex?, userAnswer, wasCorrect, masteredMsg }
let historyIndex = -1;
let removedKeys = new Set();
let correctCounts = {};
let lastVerbIndex = -1;

// ===== DOM =====
const verbEl              = document.getElementById('prompt-verb');
const pronounEl           = document.getElementById('prompt-pronoun');
const translationEl       = document.getElementById('prompt-translation');
const inputEl             = document.getElementById('answer-input');
const checkBtn            = document.getElementById('check-btn');
const nextBtn             = document.getElementById('next-btn');
const backBtn             = document.getElementById('back-btn');
const removeBtn           = document.getElementById('remove-btn');
const randomTenseLabel    = document.getElementById('random-tense-label');
const feedbackEl          = document.getElementById('feedback');
const feedbackMsgEl       = document.getElementById('feedback-msg');
const correctAnswerDisplayEl = document.getElementById('correct-answer-display');
const correctTextEl       = document.getElementById('correct-text');
const streakEl            = document.getElementById('streak-counter');
const tenseTip            = document.getElementById('tense-tip');
const virtualKeys         = document.querySelectorAll('.virtual-keyboard button');
const showConjugationsBtn = document.getElementById('show-conjugations-btn');
const conjugationTableContainer = document.getElementById('conjugation-table-container');
const conjugationTableTitle     = document.getElementById('conjugation-table-title');
const conjugationThead   = document.getElementById('conjugation-thead');
const conjugationTbody   = document.getElementById('conjugation-tbody');
const filterToggleBtn    = document.getElementById('filter-toggle-btn');
const filterBody         = document.getElementById('filter-body');
const filterToggleIcon   = document.getElementById('filter-toggle-icon');
const filterSummary      = document.getElementById('filter-summary');
const topicList          = document.getElementById('topic-list');
const verbList           = document.getElementById('verb-list');
const verbFilterNote     = document.getElementById('verb-filter-note');

// ===== TIPS =====
const TIPS = {
    'indicative.present':            "Indicative Present: Used for factual statements, beliefs, and habits. (e.g., 'I speak', 'I am speaking')",
    'indicative.preterite':          "Pretérito: The 'Zoom Lens'. Used for completed actions with a specific timeframe. (e.g., 'Yesterday I bought bread' — Ayer compré pan).",
    'indicative.imperfect':          "Imperfecto: The 'Wide-Angle Lens'. Used for descriptions, background context, or past habits. (e.g., 'I used to play', 'The sky was blue').",
    'indicative.future':             "Future: Used for actions that will happen. (e.g., 'I will speak').",
    'indicative.conditional':        "Conditional: Used for hypotheticals. (e.g., 'I would speak' if I could).",
    'indicative.present_perfect':    "Present Perfect: 'I have spoken'. Actions that started in the past and are still relevant now.",
    'indicative.past_perfect':       "Past Perfect (Pluscuamperfecto): 'I had spoken'. An action that happened before another past action.",
    'indicative.future_perfect':     "Future Perfect: 'I will have spoken'. An action completed by a certain future time.",
    'indicative.conditional_perfect':"Conditional Perfect: 'I would have spoken'. A hypothetical past action.",
    'subjunctive.present':           "Subjunctive Present: Wishes, doubts, emotions. (e.g., 'I hope that you speak').",
    'subjunctive.imperfect':         "Subjunctive Imperfect: Past wishes/doubts. (e.g., 'If I were you...', 'I wanted you to speak').",
    'subjunctive.present_perfect':   "Subjunctive Present Perfect: 'I hope that you have spoken'.",
    'imperative.positive':           "Imperative (Positive): Commands! (e.g., '¡Habla!' — Speak!).",
    'imperative.negative':           "Imperative (Negative): Prohibitions. (e.g., '¡No hables!' — Don't speak!).",
    'non_finite.infinitive':         "Infinitive: The base form. (e.g., 'To speak' — hablar).",
    'non_finite.gerund':             "Gerund: Ongoing action / present participle. (e.g., 'Speaking' — Hablando).",
    'non_finite.past_participle':    "Past Participle: Used in compound tenses. (e.g., 'Spoken' — Hablado).",
    'grammar.possessive_unstressed': "Possessive Adj. (Unstressed/Átonos): Come BEFORE the noun. mi/tu/su agree only in number; nuestro/vuestro also agree in gender.",
    'grammar.possessive_stressed':   "Possessive Adj. (Stressed/Tónicos): Come AFTER the noun or stand alone. Agree in BOTH gender and number with the noun.",
};

const TENSE_NAMES = {
    'indicative.present':            'Indicative Present',
    'indicative.preterite':          'Preterite',
    'indicative.imperfect':          'Imperfect',
    'indicative.future':             'Future',
    'indicative.conditional':        'Conditional',
    'indicative.present_perfect':    'Present Perfect',
    'indicative.past_perfect':       'Past Perfect',
    'indicative.future_perfect':     'Future Perfect',
    'indicative.conditional_perfect':'Conditional Perfect',
    'subjunctive.present':           'Subjunctive Present',
    'subjunctive.imperfect':         'Subjunctive Imperfect',
    'subjunctive.present_perfect':   'Subjunctive Pres. Perfect',
    'imperative.positive':           'Imperative (Positive)',
    'imperative.negative':           'Imperative (Negative)',
    'non_finite.infinitive':         'Infinitive',
    'non_finite.gerund':             'Gerund',
    'non_finite.past_participle':    'Past Participle',
    'grammar.possessive_unstressed': 'Possessive Adj. (Unstressed)',
    'grammar.possessive_stressed':   'Possessive Adj. (Stressed)',
};

// ===== INIT =====
function init() {
    setupEventListeners();
    renderTopicList();
    renderVerbList();
    updateFilterSummary();
    buildQuestionPool();
    refillQueue();
    generateNextNewQuestion();
}

// ===== FILTER PANEL =====
function renderTopicList() {
    const groups = {};
    TOPIC_CONFIGS.forEach(cfg => {
        if (!groups[cfg.group]) groups[cfg.group] = [];
        groups[cfg.group].push(cfg);
    });

    topicList.innerHTML = '';
    Object.entries(groups).forEach(([groupName, configs]) => {
        const groupEl = document.createElement('div');
        groupEl.className = 'filter-group';
        const labelEl = document.createElement('div');
        labelEl.className = 'filter-group-label';
        labelEl.textContent = groupName;
        groupEl.appendChild(labelEl);

        configs.forEach(cfg => {
            const label = document.createElement('label');
            label.className = 'filter-item';
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.dataset.topic = cfg.key;
            cb.checked = selectedTopics.has(cfg.key);
            cb.addEventListener('change', onTopicChange);
            label.appendChild(cb);
            label.append(' ' + cfg.label);
            groupEl.appendChild(label);
        });

        topicList.appendChild(groupEl);
    });
}

function renderVerbList() {
    verbList.innerHTML = '';
    VERB_DATA.forEach((verb, i) => {
        const isIrregular = IRREGULAR_VERBS.has(verb.infinitive);
        const label = document.createElement('label');
        label.className = 'filter-item';

        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.dataset.verb = i;
        cb.checked = selectedVerbIndices.has(i);
        cb.addEventListener('change', onVerbChange);

        const badge = document.createElement('span');
        badge.className = isIrregular ? 'irreg-badge' : 'reg-badge';
        badge.textContent = isIrregular ? 'irreg.' : 'reg.';

        label.appendChild(cb);
        label.append(' ' + verb.infinitive + ' ');
        label.appendChild(badge);
        verbList.appendChild(label);
    });

    updateVerbNote();
}

function updateVerbNote() {
    if (selectedVerbIndices.size === 0) {
        verbFilterNote.textContent = 'No verbs checked — all verbs used';
        verbFilterNote.classList.add('note-active');
    } else {
        verbFilterNote.textContent = `${selectedVerbIndices.size} of ${VERB_DATA.length} verbs selected`;
        verbFilterNote.classList.remove('note-active');
    }
}

function onTopicChange(e) {
    const key = e.target.dataset.topic;
    if (e.target.checked) selectedTopics.add(key);
    else selectedTopics.delete(key);
    markFilterDirty();
}

function onVerbChange(e) {
    const idx = parseInt(e.target.dataset.verb);
    if (e.target.checked) selectedVerbIndices.add(idx);
    else selectedVerbIndices.delete(idx);
    markFilterDirty();
    updateVerbNote();
}

function markFilterDirty() {
    filterDirty = true;
    updateFilterSummary();
    const applyBtn = document.getElementById('apply-filters-btn');
    applyBtn.classList.add('dirty');
    applyBtn.textContent = 'Apply Filters ✓';
}

function updateFilterSummary() {
    const verbTopicCount = [...selectedTopics].filter(k => !k.startsWith('grammar.')).length;
    const gramTopicCount  = [...selectedTopics].filter(k =>  k.startsWith('grammar.')).length;
    const parts = [];
    if (verbTopicCount > 0) {
        const vCount = selectedVerbIndices.size === 0 ? 'all' : selectedVerbIndices.size;
        parts.push(`${verbTopicCount} tense${verbTopicCount !== 1 ? 's' : ''}, ${vCount} verb${vCount !== 1 ? 's' : ''}`);
    }
    if (gramTopicCount > 0) {
        parts.push(`${gramTopicCount} grammar topic${gramTopicCount !== 1 ? 's' : ''}`);
    }
    filterSummary.textContent = parts.length ? '— ' + parts.join(' · ') : '— nothing selected';
}

function toggleFilter() {
    filterOpen = !filterOpen;
    filterBody.classList.toggle('hidden', !filterOpen);
    filterToggleIcon.textContent = filterOpen ? '▼' : '▶';
}

function applyFilters() {
    removedKeys.clear();
    correctCounts = {};
    streak = 0;
    streakEl.textContent = streak;
    questionHistory = [];
    historyIndex = -1;
    lastVerbIndex = -1;
    buildQuestionPool();
    refillQueue();
    generateNextNewQuestion();
}

// ===== QUESTION POOL =====
// When selectedVerbIndices is empty, all verbs are eligible for verb-type topics.
function verbIsSelected(verbIndex) {
    return selectedVerbIndices.size === 0 || selectedVerbIndices.has(verbIndex);
}

function buildQuestionPool() {
    questionPool = [];
    TOPIC_CONFIGS.forEach(cfg => {
        if (!selectedTopics.has(cfg.key)) return;

        if (cfg.type === 'verb') {
            VERB_DATA.forEach((_, verbIndex) => {
                if (!verbIsSelected(verbIndex)) return;
                for (let pi = 0; pi < cfg.pronounCount; pi++) {
                    const key = `v_${verbIndex}_${cfg.mood}_${cfg.tense}_${pi}`;
                    if (!removedKeys.has(key)) {
                        questionPool.push({ type: 'verb', key, verbIndex, mood: cfg.mood, tense: cfg.tense, pronounIndex: pi });
                    }
                }
            });
        } else if (cfg.type === 'grammar') {
            const data = GRAMMAR_DATA[cfg.subtype];
            data.forEach((_, qi) => {
                const key = `g_${cfg.subtype}_${qi}`;
                if (!removedKeys.has(key)) {
                    questionPool.push({ type: 'grammar', key, subtype: cfg.subtype, questionIndex: qi });
                }
            });
        }
    });
}

function refillQueue() {
    buildQuestionPool();
    questionQueue = [...questionPool].sort(() => Math.random() - 0.5);
}

function getNextQuestion() {
    if (questionQueue.length === 0) refillQueue();
    if (questionQueue.length === 0) return null;

    // Prefer a question from a different verb than the last one asked
    let idx = 0;
    if (lastVerbIndex !== -1 && questionQueue.length > 1) {
        const alt = questionQueue.findIndex(q => q.type !== 'verb' || q.verbIndex !== lastVerbIndex);
        if (alt !== -1) idx = alt;
    }

    const [q] = questionQueue.splice(idx, 1);
    lastVerbIndex = q.type === 'verb' ? q.verbIndex : -1;
    return q;
}

function scheduleRepetitions(q, count) {
    for (let i = 0; i < count; i++) {
        const insertAt = Math.floor(Math.random() * (questionQueue.length + 1));
        questionQueue.splice(insertAt, 0, { ...q });
    }
}

// ===== QUESTION GENERATION =====
function generateNextNewQuestion() {
    const q = getNextQuestion();
    if (!q) {
        pronounEl.textContent = '';
        verbEl.textContent = selectedTopics.size === 0 ? 'Select a topic in Filters' : '¡Felicidades!';
        translationEl.textContent = selectedTopics.size === 0
            ? 'Open the Filters panel above to get started.'
            : 'You have mastered all selected questions!';
        randomTenseLabel.classList.add('hidden');
        feedbackEl.classList.add('hidden');
        checkBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        removeBtn.classList.add('hidden');
        showConjugationsBtn.classList.add('hidden');
        conjugationTableContainer.classList.add('hidden');
        inputEl.value = '';
        inputEl.disabled = true;
        backBtn.classList.toggle('hidden', historyIndex <= 0);
        return;
    }
    questionHistory.push({ ...q, userAnswer: null, wasCorrect: null, masteredMsg: null });
    historyIndex = questionHistory.length - 1;
    loadHistoryEntry(historyIndex);
}

function generateQuestion() {
    // Navigate forward in history if we went back
    if (historyIndex < questionHistory.length - 1) {
        historyIndex++;
        loadHistoryEntry(historyIndex);
        return;
    }
    generateNextNewQuestion();
}

function loadHistoryEntry(index) {
    const entry = questionHistory[index];

    if (entry.type === 'verb') {
        const verb = VERB_DATA[entry.verbIndex];

        if (entry.mood === 'imperative') {
            pronounEl.textContent = PRONOUNS.imperative[entry.pronounIndex];
        } else if (entry.mood === 'non_finite') {
            pronounEl.textContent = 'Forma No Personal';
        } else {
            pronounEl.textContent = PRONOUNS.standard[entry.pronounIndex];
        }

        verbEl.textContent = verb.infinitive;

        if (entry.mood === 'imperative' && entry.tense === 'negative') {
            translationEl.textContent = "Don't " + verb.translation + '!';
        } else if (entry.mood === 'imperative' && entry.tense === 'positive') {
            translationEl.textContent = 'Command: ' + verb.translation + '!';
        } else {
            translationEl.textContent = verb.translation;
        }

        const topicKey = `${entry.mood}.${entry.tense}`;
        randomTenseLabel.textContent = TENSE_NAMES[topicKey] || '';
        tenseTip.textContent = TIPS[topicKey] || '';

    } else if (entry.type === 'grammar') {
        const data = GRAMMAR_DATA[entry.subtype];
        const item = data[entry.questionIndex];

        pronounEl.textContent = item.owner;
        verbEl.textContent = entry.subtype === 'possessive_unstressed'
            ? `__ ${item.noun}`
            : `${item.noun} __`;
        translationEl.textContent = `(${item.ownerMeaning} ${item.nounTranslation})`;

        const topicKey = `grammar.${entry.subtype}`;
        randomTenseLabel.textContent = TENSE_NAMES[topicKey] || '';
        tenseTip.textContent = TIPS[topicKey] || '';
    }

    randomTenseLabel.classList.remove('hidden');

    if (entry.wasCorrect !== null) {
        // Restoring an already-answered question
        isAnswerChecked = true;
        inputEl.value = entry.userAnswer || '';
        inputEl.disabled = true;
        inputEl.classList.remove('success', 'error');
        inputEl.classList.add(entry.wasCorrect ? 'success' : 'error');
        checkBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        showConjugationsBtn.classList.remove('hidden');
        feedbackEl.classList.remove('hidden');
        correctAnswerDisplayEl.classList.add('hidden');
        conjugationTableContainer.classList.add('hidden');
        showConjugationsBtn.textContent = 'Show All Forms';

        if (entry.wasCorrect) {
            feedbackEl.className = 'feedback correct';
            feedbackMsgEl.innerHTML = entry.masteredMsg || '<strong>¡Muy bien!</strong>';
        } else {
            feedbackEl.className = 'feedback incorrect';
            feedbackMsgEl.innerHTML = '<strong>Incorrecto.</strong>';
            correctAnswerDisplayEl.classList.remove('hidden');
            correctTextEl.textContent = getCorrectAnswer(entry);
        }
    } else {
        // Fresh unanswered question
        isAnswerChecked = false;
        inputEl.value = '';
        inputEl.disabled = false;
        inputEl.classList.remove('success', 'error');
        feedbackEl.classList.add('hidden');
        checkBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
        correctAnswerDisplayEl.classList.add('hidden');
        showConjugationsBtn.classList.add('hidden');
        conjugationTableContainer.classList.add('hidden');
    }

    updateNavButtons();
    inputEl.focus();
}

function getCorrectAnswer(entry) {
    if (entry.type === 'verb') {
        const verb = VERB_DATA[entry.verbIndex];
        if (entry.mood === 'non_finite') return verb[entry.tense];
        if (entry.mood === 'indicative' || entry.mood === 'subjunctive')
            return verb.conjugations[entry.mood][entry.tense][entry.pronounIndex];
        if (entry.mood === 'imperative')
            return verb.conjugations.imperative[entry.tense][entry.pronounIndex];
    } else if (entry.type === 'grammar') {
        return GRAMMAR_DATA[entry.subtype][entry.questionIndex].answer;
    }
    return '';
}

// ===== ANSWER CHECKING =====
function checkAnswer() {
    if (isAnswerChecked) return;

    const entry = questionHistory[historyIndex];
    const userAnswer = inputEl.value.trim().toLowerCase();
    const correctAnswer = getCorrectAnswer(entry);
    const isCorrect = userAnswer === correctAnswer.toLowerCase();

    isAnswerChecked = true;
    inputEl.disabled = true;
    feedbackEl.classList.remove('hidden');
    checkBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
    showConjugationsBtn.classList.remove('hidden');
    conjugationTableContainer.classList.add('hidden');
    showConjugationsBtn.textContent = 'Show All Forms';

    entry.userAnswer = userAnswer;
    entry.wasCorrect = isCorrect;

    if (isCorrect) {
        correctCounts[entry.key] = (correctCounts[entry.key] || 0) + 1;

        if (correctCounts[entry.key] >= 3) {
            removedKeys.add(entry.key);
            questionQueue = questionQueue.filter(q => q.key !== entry.key);
            buildQuestionPool();
            streak++;
            streakEl.textContent = streak;
            inputEl.classList.add('success');
            feedbackEl.className = 'feedback correct';
            const masteredMsg = '<strong>¡Excelente!</strong> Mastered — correct 3 times!';
            feedbackMsgEl.innerHTML = masteredMsg;
            entry.masteredMsg = masteredMsg;
        } else {
            handleCorrect();
        }
    } else {
        handleIncorrect(correctAnswer);
        scheduleRepetitions({ ...entry, userAnswer: null, wasCorrect: null, masteredMsg: null }, 50);
    }

    updateNavButtons();
}

function handleCorrect() {
    streak++;
    streakEl.textContent = streak;
    inputEl.classList.add('success');
    feedbackEl.className = 'feedback correct';
    feedbackMsgEl.innerHTML = '<strong>¡Muy bien!</strong>';
}

function handleIncorrect(answer) {
    streak = 0;
    streakEl.textContent = streak;
    inputEl.classList.add('error');
    feedbackEl.className = 'feedback incorrect';
    feedbackMsgEl.innerHTML = '<strong>Incorrecto.</strong>';
    correctAnswerDisplayEl.classList.remove('hidden');
    correctTextEl.textContent = answer;
}

// ===== NAVIGATION =====
function goBack() {
    if (historyIndex <= 0) return;
    historyIndex--;
    loadHistoryEntry(historyIndex);
}

function removeCurrentQuestion() {
    const key = questionHistory[historyIndex].key;
    removedKeys.add(key);
    questionQueue = questionQueue.filter(q => q.key !== key);
    buildQuestionPool();

    if (historyIndex < questionHistory.length - 1) {
        historyIndex = questionHistory.length - 1;
        const latest = questionHistory[historyIndex];
        if (latest.wasCorrect !== null) generateNextNewQuestion();
        else loadHistoryEntry(historyIndex);
    } else {
        generateNextNewQuestion();
    }
}

function updateNavButtons() {
    backBtn.classList.toggle('hidden', historyIndex <= 0);
    removeBtn.classList.toggle('hidden', !isAnswerChecked);
}

// ===== FORMS TABLE =====
function toggleConjugationTable() {
    const visible = !conjugationTableContainer.classList.contains('hidden');
    if (visible) {
        conjugationTableContainer.classList.add('hidden');
        showConjugationsBtn.textContent = 'Show All Forms';
    } else {
        buildFormsTable();
        conjugationTableContainer.classList.remove('hidden');
        showConjugationsBtn.textContent = 'Hide Forms';
    }
}

function buildFormsTable() {
    conjugationThead.innerHTML = '';
    conjugationTbody.innerHTML = '';
    const entry = questionHistory[historyIndex];
    if (!entry) return;
    if (entry.type === 'verb') buildVerbTable(entry);
    else if (entry.type === 'grammar') buildGrammarTable(entry);
}

function buildVerbTable(entry) {
    const verb = VERB_DATA[entry.verbIndex];
    conjugationTableTitle.textContent = `${verb.infinitive} — ${TENSE_NAMES[`${entry.mood}.${entry.tense}`] || ''}`;

    if (entry.mood === 'non_finite') {
        conjugationThead.innerHTML = '<tr><th>Form</th><th>Conjugation</th></tr>';
        const label = entry.tense === 'infinitive' ? 'Infinitivo' : entry.tense === 'gerund' ? 'Gerundio' : 'Participio';
        conjugationTbody.innerHTML = `<tr><td class="pronoun-cell">${label}</td><td>${verb[entry.tense]}</td></tr>`;
        return;
    }

    conjugationThead.innerHTML = '<tr><th>Subject</th><th>Conjugation</th></tr>';
    const pronounList = entry.mood === 'imperative' ? PRONOUNS.imperative : PRONOUNS.standard;
    const conjugations = entry.mood === 'imperative'
        ? verb.conjugations.imperative[entry.tense]
        : verb.conjugations[entry.mood][entry.tense];

    pronounList.forEach((pronoun, i) => {
        const row = document.createElement('tr');
        const highlight = i === entry.pronounIndex ? 'highlight' : '';
        row.innerHTML = `<td class="pronoun-cell">${pronoun}</td><td class="${highlight}">${conjugations[i]}</td>`;
        conjugationTbody.appendChild(row);
    });
}

function buildGrammarTable(entry) {
    const tableKey = entry.subtype === 'possessive_unstressed' ? 'unstressed' : 'stressed';
    const table = POSSESSIVE_ADJ_TABLES[tableKey];
    const item = GRAMMAR_DATA[entry.subtype][entry.questionIndex];
    const ownerBase = item.owner.split('/')[0];

    conjugationTableTitle.textContent = table.title;

    // Note row in tbody
    const noteRow = document.createElement('tr');
    noteRow.innerHTML = `<td colspan="${table.headers.length}" class="table-note">${table.note}</td>`;
    conjugationTbody.appendChild(noteRow);

    // Header
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = table.headers.map(h => `<th>${h}</th>`).join('');
    conjugationThead.appendChild(headerRow);

    // Data rows — highlight cell that matches the answer in the owner's row
    table.rows.forEach(row => {
        const tr = document.createElement('tr');
        const ownerMatch = row[0].toLowerCase().includes(ownerBase.toLowerCase());
        tr.innerHTML = row.map((cell, i) => {
            const isHighlight = i > 0 && ownerMatch && cell === item.answer;
            const cls = i === 0 ? 'pronoun-cell' : (isHighlight ? 'highlight' : '');
            return `<td class="${cls}">${cell}</td>`;
        }).join('');
        conjugationTbody.appendChild(tr);
    });
}

// ===== VIRTUAL KEYBOARD =====
function insertAtCursor(input, text) {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    input.value = input.value.substring(0, start) + text + input.value.substring(end);
    input.selectionStart = input.selectionEnd = start + text.length;
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    checkBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', generateQuestion);
    backBtn.addEventListener('click', goBack);
    removeBtn.addEventListener('click', removeCurrentQuestion);
    filterToggleBtn.addEventListener('click', toggleFilter);
    showConjugationsBtn.addEventListener('click', toggleConjugationTable);
    document.getElementById('apply-filters-btn').addEventListener('click', () => {
        filterDirty = false;
        const applyBtn = document.getElementById('apply-filters-btn');
        applyBtn.classList.remove('dirty');
        applyBtn.textContent = 'Apply Filters';
        filterOpen = false;
        filterBody.classList.add('hidden');
        filterToggleIcon.textContent = '▶';
        applyFilters();
    });

    // Topic filter buttons
    document.getElementById('topics-all-btn').addEventListener('click', () => {
        TOPIC_CONFIGS.forEach(c => selectedTopics.add(c.key));
        renderTopicList();
        markFilterDirty();
    });
    document.getElementById('topics-none-btn').addEventListener('click', () => {
        selectedTopics.clear();
        renderTopicList();
        markFilterDirty();
    });

    // Verb filter buttons
    document.getElementById('verbs-all-btn').addEventListener('click', () => {
        VERB_DATA.forEach((_, i) => selectedVerbIndices.add(i));
        renderVerbList();
        markFilterDirty();
    });
    document.getElementById('verbs-none-btn').addEventListener('click', () => {
        selectedVerbIndices.clear();
        renderVerbList();
        markFilterDirty();
    });
    document.getElementById('verbs-irregular-btn').addEventListener('click', () => {
        selectedVerbIndices.clear();
        VERB_DATA.forEach((verb, i) => {
            if (IRREGULAR_VERBS.has(verb.infinitive)) selectedVerbIndices.add(i);
        });
        renderVerbList();
        markFilterDirty();
    });

    // Enter key
    inputEl.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            if (isAnswerChecked) generateQuestion();
            else checkAnswer();
        }
    });

    // Virtual keyboard
    virtualKeys.forEach(btn => {
        btn.addEventListener('click', () => {
            insertAtCursor(inputEl, btn.getAttribute('data-char'));
            inputEl.focus();
        });
    });
}

// ===== START =====
init();
