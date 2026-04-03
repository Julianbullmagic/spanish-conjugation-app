// --- Topic Configs (drives both filter panel and question pool) ---

const TOPIC_CONFIGS = [
    { key: 'indicative.present',             type: 'verb', mood: 'indicative',  tense: 'present',             pronounCount: 6, label: 'Present',               group: 'Indicative' },
    { key: 'indicative.preterite',           type: 'verb', mood: 'indicative',  tense: 'preterite',           pronounCount: 6, label: 'Preterite',             group: 'Indicative' },
    { key: 'indicative.imperfect',           type: 'verb', mood: 'indicative',  tense: 'imperfect',           pronounCount: 6, label: 'Imperfect',             group: 'Indicative' },
    { key: 'indicative.future',              type: 'verb', mood: 'indicative',  tense: 'future',              pronounCount: 6, label: 'Future',                group: 'Indicative' },
    { key: 'indicative.conditional',         type: 'verb', mood: 'indicative',  tense: 'conditional',         pronounCount: 6, label: 'Conditional',           group: 'Indicative' },
    { key: 'indicative.present_perfect',     type: 'verb', mood: 'indicative',  tense: 'present_perfect',     pronounCount: 6, label: 'Present Perfect',       group: 'Indicative' },
    { key: 'indicative.past_perfect',        type: 'verb', mood: 'indicative',  tense: 'past_perfect',        pronounCount: 6, label: 'Past Perfect',          group: 'Indicative' },
    { key: 'indicative.future_perfect',      type: 'verb', mood: 'indicative',  tense: 'future_perfect',      pronounCount: 6, label: 'Future Perfect',        group: 'Indicative' },
    { key: 'indicative.conditional_perfect', type: 'verb', mood: 'indicative',  tense: 'conditional_perfect', pronounCount: 6, label: 'Conditional Perfect',   group: 'Indicative' },
    { key: 'subjunctive.present',            type: 'verb', mood: 'subjunctive', tense: 'present',             pronounCount: 6, label: 'Present',               group: 'Subjunctive' },
    { key: 'subjunctive.imperfect',          type: 'verb', mood: 'subjunctive', tense: 'imperfect',           pronounCount: 6, label: 'Imperfect',             group: 'Subjunctive' },
    { key: 'subjunctive.present_perfect',    type: 'verb', mood: 'subjunctive', tense: 'present_perfect',     pronounCount: 6, label: 'Present Perfect',       group: 'Subjunctive' },
    { key: 'imperative.positive',            type: 'verb', mood: 'imperative',  tense: 'positive',            pronounCount: 5, label: 'Affirmative Commands',  group: 'Imperative' },
    { key: 'imperative.negative',            type: 'verb', mood: 'imperative',  tense: 'negative',            pronounCount: 5, label: 'Negative Commands',     group: 'Imperative' },
    { key: 'non_finite.infinitive',          type: 'verb', mood: 'non_finite',  tense: 'infinitive',          pronounCount: 1, label: 'Infinitive',            group: 'Non-Finite Forms' },
    { key: 'non_finite.gerund',              type: 'verb', mood: 'non_finite',  tense: 'gerund',              pronounCount: 1, label: 'Gerund',                group: 'Non-Finite Forms' },
    { key: 'non_finite.past_participle',     type: 'verb', mood: 'non_finite',  tense: 'past_participle',     pronounCount: 1, label: 'Past Participle',       group: 'Non-Finite Forms' },
    { key: 'grammar.possessive_unstressed',  type: 'grammar', subtype: 'possessive_unstressed', label: 'Possessive Adj. (unstressed)', group: 'Grammar' },
    { key: 'grammar.possessive_stressed',    type: 'grammar', subtype: 'possessive_stressed',   label: 'Possessive Adj. (stressed)',   group: 'Grammar' },
];

// Verbs with any stem change, spelling change, or highly irregular paradigm
const IRREGULAR_VERBS = new Set([
    'ser', 'ir', 'hacer', 'tener', 'estar', 'decir', 'poder', 'querer', 'saber',
    'ver', 'dar', 'venir', 'poner', 'salir', 'conocer', 'sentir', 'dormir',
    'encontrar', 'pedir', 'jugar', 'entender', 'volver', 'seguir', 'pensar',
    'leer', 'creer', 'llegar', 'empezar', 'buscar', 'abrir',
]);

// --- Possessive Adjective Questions ---

const POSSESSIVE_ADJ_UNSTRESSED = [
    { owner: 'yo',               ownerMeaning: 'my',                     noun: 'libro',    nounTranslation: 'book',       answer: 'mi' },
    { owner: 'yo',               ownerMeaning: 'my',                     noun: 'libros',   nounTranslation: 'books',      answer: 'mis' },
    { owner: 'tú',               ownerMeaning: 'your (inf.)',             noun: 'casa',     nounTranslation: 'house',      answer: 'tu' },
    { owner: 'tú',               ownerMeaning: 'your (inf.)',             noun: 'casas',    nounTranslation: 'houses',     answer: 'tus' },
    { owner: 'él/ella/Ud.',      ownerMeaning: 'his/her/your (form.)',    noun: 'amigo',    nounTranslation: 'friend',     answer: 'su' },
    { owner: 'él/ella/Ud.',      ownerMeaning: 'his/her/your (form.)',    noun: 'amigos',   nounTranslation: 'friends',    answer: 'sus' },
    { owner: 'nosotros/as',      ownerMeaning: 'our',                    noun: 'perro',    nounTranslation: 'dog (m)',    answer: 'nuestro' },
    { owner: 'nosotros/as',      ownerMeaning: 'our',                    noun: 'gata',     nounTranslation: 'cat (f)',    answer: 'nuestra' },
    { owner: 'nosotros/as',      ownerMeaning: 'our',                    noun: 'perros',   nounTranslation: 'dogs (m)',   answer: 'nuestros' },
    { owner: 'nosotros/as',      ownerMeaning: 'our',                    noun: 'gatas',    nounTranslation: 'cats (f)',   answer: 'nuestras' },
    { owner: 'vosotros/as',      ownerMeaning: 'your (pl., inf.)',        noun: 'padre',    nounTranslation: 'father',     answer: 'vuestro' },
    { owner: 'vosotros/as',      ownerMeaning: 'your (pl., inf.)',        noun: 'madre',    nounTranslation: 'mother',     answer: 'vuestra' },
    { owner: 'vosotros/as',      ownerMeaning: 'your (pl., inf.)',        noun: 'padres',   nounTranslation: 'fathers',    answer: 'vuestros' },
    { owner: 'vosotros/as',      ownerMeaning: 'your (pl., inf.)',        noun: 'madres',   nounTranslation: 'mothers',    answer: 'vuestras' },
    { owner: 'ellos/ellas/Uds.', ownerMeaning: 'their/your (form. pl.)', noun: 'ciudad',   nounTranslation: 'city',       answer: 'su' },
    { owner: 'ellos/ellas/Uds.', ownerMeaning: 'their/your (form. pl.)', noun: 'ciudades', nounTranslation: 'cities',     answer: 'sus' },
];

const POSSESSIVE_ADJ_STRESSED = [
    { owner: 'yo',               ownerMeaning: 'mine',                        noun: 'libro',      nounTranslation: 'book (m)',      answer: 'mío' },
    { owner: 'yo',               ownerMeaning: 'mine',                        noun: 'casa',       nounTranslation: 'house (f)',     answer: 'mía' },
    { owner: 'yo',               ownerMeaning: 'mine',                        noun: 'libros',     nounTranslation: 'books (m)',     answer: 'míos' },
    { owner: 'yo',               ownerMeaning: 'mine',                        noun: 'casas',      nounTranslation: 'houses (f)',    answer: 'mías' },
    { owner: 'tú',               ownerMeaning: 'yours (inf.)',                 noun: 'perro',      nounTranslation: 'dog (m)',       answer: 'tuyo' },
    { owner: 'tú',               ownerMeaning: 'yours (inf.)',                 noun: 'llave',      nounTranslation: 'key (f)',       answer: 'tuya' },
    { owner: 'tú',               ownerMeaning: 'yours (inf.)',                 noun: 'perros',     nounTranslation: 'dogs (m)',      answer: 'tuyos' },
    { owner: 'tú',               ownerMeaning: 'yours (inf.)',                 noun: 'llaves',     nounTranslation: 'keys (f)',      answer: 'tuyas' },
    { owner: 'él/ella/Ud.',      ownerMeaning: 'his/hers/yours (form.)',       noun: 'coche',      nounTranslation: 'car (m)',       answer: 'suyo' },
    { owner: 'él/ella/Ud.',      ownerMeaning: 'his/hers/yours (form.)',       noun: 'bicicleta',  nounTranslation: 'bicycle (f)',   answer: 'suya' },
    { owner: 'él/ella/Ud.',      ownerMeaning: 'his/hers/yours (form.)',       noun: 'coches',     nounTranslation: 'cars (m)',      answer: 'suyos' },
    { owner: 'él/ella/Ud.',      ownerMeaning: 'his/hers/yours (form.)',       noun: 'bicicletas', nounTranslation: 'bicycles (f)',  answer: 'suyas' },
    { owner: 'nosotros/as',      ownerMeaning: 'ours',                         noun: 'equipo',     nounTranslation: 'team (m)',      answer: 'nuestro' },
    { owner: 'nosotros/as',      ownerMeaning: 'ours',                         noun: 'ciudad',     nounTranslation: 'city (f)',      answer: 'nuestra' },
    { owner: 'nosotros/as',      ownerMeaning: 'ours',                         noun: 'equipos',    nounTranslation: 'teams (m)',     answer: 'nuestros' },
    { owner: 'nosotros/as',      ownerMeaning: 'ours',                         noun: 'ciudades',   nounTranslation: 'cities (f)',    answer: 'nuestras' },
    { owner: 'vosotros/as',      ownerMeaning: 'yours (pl., inf.)',             noun: 'jardín',     nounTranslation: 'garden (m)',    answer: 'vuestro' },
    { owner: 'vosotros/as',      ownerMeaning: 'yours (pl., inf.)',             noun: 'casa',       nounTranslation: 'house (f)',     answer: 'vuestra' },
    { owner: 'vosotros/as',      ownerMeaning: 'yours (pl., inf.)',             noun: 'jardines',   nounTranslation: 'gardens (m)',   answer: 'vuestros' },
    { owner: 'vosotros/as',      ownerMeaning: 'yours (pl., inf.)',             noun: 'casas',      nounTranslation: 'houses (f)',    answer: 'vuestras' },
    { owner: 'ellos/ellas/Uds.', ownerMeaning: 'theirs/yours (form. pl.)',      noun: 'trabajo',    nounTranslation: 'job (m)',       answer: 'suyo' },
    { owner: 'ellos/ellas/Uds.', ownerMeaning: 'theirs/yours (form. pl.)',      noun: 'idea',       nounTranslation: 'idea (f)',      answer: 'suya' },
    { owner: 'ellos/ellas/Uds.', ownerMeaning: 'theirs/yours (form. pl.)',      noun: 'trabajos',   nounTranslation: 'jobs (m)',      answer: 'suyos' },
    { owner: 'ellos/ellas/Uds.', ownerMeaning: 'theirs/yours (form. pl.)',      noun: 'ideas',      nounTranslation: 'ideas (f)',     answer: 'suyas' },
];

const GRAMMAR_DATA = {
    possessive_unstressed: POSSESSIVE_ADJ_UNSTRESSED,
    possessive_stressed:   POSSESSIVE_ADJ_STRESSED,
};

// --- Reference tables shown when "Show All Forms" is clicked ---

const POSSESSIVE_ADJ_TABLES = {
    unstressed: {
        title: 'Possessive Adjectives — Unstressed (Átonos)',
        note: 'Come BEFORE the noun. mi/tu/su agree only in number; nuestro/vuestro also agree in gender.',
        headers: ['Owner', 'Singular', 'Plural'],
        rows: [
            ['yo',             'mi',      'mis'],
            ['tú',             'tu',      'tus'],
            ['él/ella/Ud.',    'su',      'sus'],
            ['nosotros (m)',   'nuestro', 'nuestros'],
            ['nosotros (f)',   'nuestra', 'nuestras'],
            ['vosotros (m)',   'vuestro', 'vuestros'],
            ['vosotros (f)',   'vuestra', 'vuestras'],
            ['ellos/Uds.',     'su',      'sus'],
        ],
    },
    stressed: {
        title: 'Possessive Adjectives — Stressed (Tónicos)',
        note: 'Come AFTER the noun or stand alone. Agree in BOTH gender and number.',
        headers: ['Owner', 'Masc. Sg.', 'Fem. Sg.', 'Masc. Pl.', 'Fem. Pl.'],
        rows: [
            ['yo',             'mío',     'mía',     'míos',     'mías'],
            ['tú',             'tuyo',    'tuya',    'tuyos',    'tuyas'],
            ['él/ella/Ud.',    'suyo',    'suya',    'suyos',    'suyas'],
            ['nosotros/as',    'nuestro', 'nuestra', 'nuestros', 'nuestras'],
            ['vosotros/as',    'vuestro', 'vuestra', 'vuestros', 'vuestras'],
            ['ellos/Uds.',     'suyo',    'suya',    'suyos',    'suyas'],
        ],
    },
};
