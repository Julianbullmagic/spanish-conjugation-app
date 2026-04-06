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

// --- Conjugation Rules (shown in the expandable help section) ---

const CONJUGATION_RULES = {
    'indicative.present': {
        rule: `<b>Regular endings:</b><br>
               <b>-ar</b> verbs: -o, -as, -a, -amos, -áis, -an<br>
               <b>-er</b> verbs: -o, -es, -e, -emos, -éis, -en<br>
               <b>-ir</b> verbs: -o, -es, -e, -imos, -ís, -en`,
        exceptions: `<b>Stem-changing verbs (e → ie):</b> pensar, querer, empezar, preferir<br>
                     <b>Stem-changing verbs (o → ue):</b> poder, encontrar, volver, dormir, jugar (u → ue)<br>
                     <b>Stem-changing verbs (e → i):</b> pedir, seguir, sentir<br>
                     <b>Common irregulars:</b> ser (soy…), ir (voy…), tener (tengo…), hacer (hago…), decir (digo…), saber (sé…), estar (estoy…), venir (vengo…), poner (pongo…), salir (salgo…), conocer (conozco…), leer (leo…), creer (creo…)`
    },
    'indicative.preterite': {
        rule: `<b>Regular endings:</b><br>
               <b>-ar</b> verbs: -é, -aste, -ó, -amos, -asteis, -aron<br>
               <b>-er/-ir</b> verbs: -í, -iste, -ió, -imos, -isteis, -ieron`,
        exceptions: `<b>Stem-changing -ir verbs only</b> (e → i, o → u in 3rd person): pedir (pidió), dormir (durmió)<br>
                     <b>Spelling changes:</b> -car → -qué (buscar → busqué), -gar → -gué (llegar → llegué), -zar → -cé (empezar → empecé)<br>
                     <b>Strong irregulars:</b> ser/ir (fui…), tener (tuve…), estar (estuve…), poder (pude…), hacer (hice → hizo), decir (dije…), querer (quise…), saber (supe…), venir (vine…), poner (puso…), dar (di…), ver (vi…)`
    },
    'indicative.imperfect': {
        rule: `<b>Regular endings:</b><br>
               <b>-ar</b> verbs: -aba, -abas, -aba, -ábamos, -abais, -aban<br>
               <b>-er/-ir</b> verbs: -ía, -ías, -ía, -íamos, -íais, -ían`,
        exceptions: `Only <b>3 irregulars</b> in the entire tense:<br>
                     ser → era, ir → iba, ver → veía`
    },
    'indicative.future': {
        rule: `<b>Regular:</b> Add endings directly to the <b>full infinitive</b>:<br>
               -é, -ás, -á, -emos, -éis, -án<br>
               (Same for all -ar, -er, -ir verbs)`,
        exceptions: `<b>12 verbs with irregular stems</b> (same stems for conditional):<br>
                     hacer → har-, tener → tendr-, decir → dir-, poder → podr-, querer → querr-, saber → sabr-, poner → pondr-, salir → saldr-, venir → vendr-, tener → tendr-, valer → valdr-, caber → cabr-`
    },
    'indicative.conditional': {
        rule: `<b>Regular:</b> Add endings to the <b>full infinitive</b>:<br>
               -ía, -ías, -ía, -íamos, -íais, -ían<br>
               (Same for all -ar, -er, -ir verbs)`,
        exceptions: `Uses the <b>same 12 irregular stems</b> as the future tense:<br>
                     hacer → har-, tener → tendr-, decir → dir-, poder → podr-, querer → querr-, saber → sabr-, poner → pondr-, salir → saldr-, venir → vendr-`
    },
    'indicative.present_perfect': {
        rule: `<b>haber</b> (present) + <b>past participle</b>:<br>
               he, has, ha, hemos, habéis, han + [-ado / -ido]`,
        exceptions: `<b>Irregular past participles:</b> hacer → hecho, decir → dicho, escribir → escrito, abrir → abierto, romper → roto, ver → visto, poner → puesto, morir → muerto, volver → vuelto, cubrir → cubierto`
    },
    'indicative.past_perfect': {
        rule: `<b>había</b> (imperfect of haber) + <b>past participle</b>:<br>
               había, habías, había, habíamos, habíais, habían + [-ado / -ido]`,
        exceptions: `Same <b>irregular past participles</b> as present perfect: hecho, dicho, escrito, abierto, roto, visto, puesto, muerto, vuelto, cubierto`
    },
    'indicative.future_perfect': {
        rule: `<b>haber</b> (future) + <b>past participle</b>:<br>
               habré, habrás, habrá, habremos, habréis, habrán + [-ado / -ido]`,
        exceptions: `Same <b>irregular past participles</b> as present perfect: hecho, dicho, escrito, abierto, roto, visto, puesto, muerto, vuelto, cubierto`
    },
    'indicative.conditional_perfect': {
        rule: `<b>haber</b> (conditional) + <b>past participle</b>:<br>
               habría, habrías, habría, habríamos, habríais, habrían + [-ado / -ido]`,
        exceptions: `Same <b>irregular past participles</b> as present perfect: hecho, dicho, escrito, abierto, roto, visto, puesto, muerto, vuelto, cubierto`
    },
    'subjunctive.present': {
        rule: `<b>Formed by "vowel swap"</b> in the yo form:<br>
               <b>-ar</b> verbs: use -e endings → -e, -es, -e, -emos, -éis, -en<br>
               <b>-er/-ir</b> verbs: use -a endings → -a, -as, -a, -amos, -áis, -an`,
        exceptions: `<b>Stem-changing verbs</b> keep their change (e→ie, o→ue, e→i) in all forms<br>
                     <b>Irregular yo forms</b> carry over: tener → tenga, decir → diga, hacer → haga, poner → ponga, salir → salga, venir → venga, saber → sepa, estar → esté, ir → vaya, ser → sea, querer → quiera`
    },
    'subjunctive.imperfect': {
        rule: `<b>Take the 3rd person preterite (ellos)</b>, remove -on, add endings:<br>
               <b>-ra</b> form: -ra, -ras, -ra, -ráramos, -rarais, -ran<br>
               <b>-se</b> form: -se, -ses, -se, -ésemos, -eseis, -sen<br>
               (This app uses the -ra form)`,
        exceptions: `<b>Irregular stems</b> (same as irregular preterite ellos form):<br>
                     ser/ir → fuera, saber → supiera, haber → hubiera, querer → quisiera, poder → pudiera, tener → tuviera, estar → estuviera, decir → dijera, hacer → hiciera, poner → pusiera, venir → viniera`
    },
    'subjunctive.present_perfect': {
        rule: `<b>haya</b> (subjunctive present of haber) + <b>past participle</b>:<br>
               haya, hayas, haya, hayamos, hayáis, hayan + [-ado / -ido]`,
        exceptions: `Same <b>irregular past participles</b> as indicative perfect tenses: hecho, dicho, escrito, abierto, roto, visto, puesto, muerto, vuelto, cubierto`
    },
    'imperative.positive': {
        rule: `<b>tú:</b> 3rd person singular present (habla, come, vive)<br>
               <b>usted:</b> 3rd person singular present (hable, coma, viva)<br>
               <b>nosotros:</b> nosotros subjunctive present (hablemos, comamos, vivamos)<br>
               <b>vosotros:</b> infinitive minus -r + -d (hablad, comed, vivid)<br>
               <b>ustedes:</b> 3rd person plural present (hablen, coman, vivan)`,
        exceptions: `<b>Irregular tú forms:</b> ser → sé, ir → ve, saber → sabe (rare), haber → he (rare)<br>
                     <b>Irregular usted forms:</b> same as subjunctive (dar → dé, estar → esté, ser → sea, ir → vaya, saber → sepa)<br>
                     <b>vosotros with pronoun:</b> -d drops before os (sentaos, no sentaos)`
    },
    'imperative.negative': {
        rule: `<b>All forms</b> use the <b>subjunctive present</b> + "no":<br>
               no hables, no hable, no hablemos, no habléis, no hablen`,
        exceptions: `Follows the <b>same irregulars</b> as subjunctive present:<br>
                     ser → no seas, ir → no vayas, tener → no tengas, decir → no digas, hacer → no hagas, poner → no pongas, salir → no salgas, venir → no vengas, saber → no sepas, estar → no estés`
    },
    'non_finite.infinitive': {
        rule: `The <b>base form</b> of the verb. Ends in:<br>
               <b>-ar</b> (hablar), <b>-er</b> (comer), <b>-ir</b> (vivir)<br>
               Used after conjugated verbs, prepositions, and as noun equivalents.`,
        exceptions: `All infinitives are regular in form. Some common uses:<br>
                     "Voy a hablar" (going to speak), "Quiero comer" (I want to eat), "Después de vivir…" (After living…)`
    },
    'non_finite.gerund': {
        rule: `<b>Regular:</b><br>
               <b>-ar</b> verbs: -ando (hablando)<br>
               <b>-er/-ir</b> verbs: -iendo (comiendo, viviendo)`,
        exceptions: `<b>Stem-changing -ir verbs</b> change e→i, o→u: pidiendo, durmiendo, sintiendo<br>
                     <b>-iendo → -yendo</b> when stem ends in vowel: leyendo, trayendo, oyendo<br>
                     <b>Irregular:</b> ir → yendo, poder → pudiendo (rare)`
    },
    'non_finite.past_participle': {
        rule: `<b>Regular:</b><br>
               <b>-ar</b> verbs: -ado (hablado)<br>
               <b>-er/-ir</b> verbs: -ido (comido, vivido)`,
        exceptions: `<b>Common irregulars:</b> hacer → hecho, decir → dicho, escribir → escrito, abrir → abierto, romper → roto, ver → visto, poner → puesto, morir → muerto, volver → vuelto, cubrir → cubierto, freír → frito`
    },
    'grammar.possessive_unstressed': {
        rule: `<b>Short-form possessives come BEFORE the noun.</b><br>
               mi/mis, tu/tus, su/sus — agree only in <b>number</b><br>
               nuestro/a/os/as, vuestro/a/os/as — agree in <b>gender & number</b>`,
        exceptions: `<b>su/sus</b> is ambiguous — can mean his, her, your (formal), their, or your (formal plural). Context or aclaración clarifies: "su casa (de él)"<br>
                     <b>Common mistake:</b> Don't use an article before mi/tu/su: "mi casa" ✗ "la mi casa"`
    },
    'grammar.possessive_stressed': {
        rule: `<b>Long-form possessives come AFTER the noun</b> or stand alone.<br>
               All forms agree in <b>both gender and number</b>:<br>
               mío/a/os/as, tuyo/a/os/as, suyo/a/os/as, nuestro/a/os/as, vuestro/a/os/as`,
        exceptions: `<b>With articles:</b> "un amigo mío" (a friend of mine) — the article is required when used after a noun<br>
                     <b>su/sus</b> same ambiguity as unstressed form<br>
                     <b>Neuter lo nuestro</b> = "what's ours" (abstract)`
    },
};
