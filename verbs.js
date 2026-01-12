const VERB_DATA = [
    {
        infinitive: "hablar",
        translation: "to speak",
        gerund: "hablando",
        past_participle: "hablado",
        conjugations: {
            indicative: {
                present: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"],
                preterite: ["hablé", "hablaste", "habló", "hablamos", "hablasteis", "hablaron"],
                imperfect: ["hablaba", "hablabas", "hablaba", "hablábamos", "hablabais", "hablaban"],
                future: ["hablaré", "hablarás", "hablará", "hablaremos", "hablaréis", "hablarán"],
                conditional: ["hablaría", "hablarías", "hablaría", "hablaríamos", "hablaríais", "hablarían"],
                present_perfect: ["he hablado", "has hablado", "ha hablado", "hemos hablado", "habéis hablado", "han hablado"],
                past_perfect: ["había hablado", "habías hablado", "había hablado", "habíamos hablado", "habíais hablado", "habían hablado"],
                future_perfect: ["habré hablado", "habrás hablado", "habrá hablado", "habremos hablado", "habréis hablado", "habrán hablado"],
                conditional_perfect: ["habría hablado", "habrías hablado", "habría hablado", "habríamos hablado", "habríais hablado", "habrían hablado"]
            },
            subjunctive: {
                present: ["hable", "hables", "hable", "hablemos", "habléis", "hablen"],
                imperfect: ["hablara", "hablaras", "hablara", "habláramos", "hablarais", "hablaran"], // -ra form is most common
                present_perfect: ["haya hablado", "hayas hablado", "haya hablado", "hayamos hablado", "hayáis hablado", "hayan hablado"]
            },
            imperative: {
                positive: ["habla", "hable", "hablemos", "hablad", "hablen"], // tú, ud, nosotros, vosotros, uds
                negative: ["no hables", "no hable", "no hablemos", "no habléis", "no hablen"] // tú, ud, nosotros, vosotros, uds
            }
        }
    },
    {
        infinitive: "comer",
        translation: "to eat",
        gerund: "comiendo",
        past_participle: "comido",
        conjugations: {
            indicative: {
                present: ["como", "comes", "come", "comemos", "coméis", "comen"],
                preterite: ["comí", "comiste", "comió", "comimos", "comisteis", "comieron"],
                imperfect: ["comía", "comías", "comía", "comíamos", "comíais", "comían"],
                future: ["comeré", "comerás", "comerá", "comeremos", "comeréis", "comerán"],
                conditional: ["comería", "comerías", "comería", "comeríamos", "comeríais", "comerían"],
                present_perfect: ["he comido", "has comido", "ha comido", "hemos comido", "habéis comido", "han comido"],
                past_perfect: ["había comido", "habías comido", "había comido", "habíamos comido", "habíais comido", "habían comido"],
                future_perfect: ["habré comido", "habrás comido", "habrá comido", "habremos comido", "habréis comido", "habrán comido"],
                conditional_perfect: ["habría comido", "habrías comido", "habría comido", "habríamos comido", "habríais comido", "habrían comido"]
            },
            subjunctive: {
                present: ["coma", "comas", "coma", "comamos", "comáis", "coman"],
                imperfect: ["comiera", "comieras", "comiera", "comiéramos", "comierais", "comieran"],
                present_perfect: ["haya comido", "hayas comido", "haya comido", "hayamos comido", "hayáis comido", "hayan comido"]
            },
            imperative: {
                positive: ["come", "coma", "comamos", "comed", "coman"],
                negative: ["no comas", "no coma", "no comamos", "no comáis", "no coman"]
            }
        }
    },
    {
        infinitive: "vivir",
        translation: "to live",
        gerund: "viviendo",
        past_participle: "vivido",
        conjugations: {
            indicative: {
                present: ["vivo", "vives", "vive", "vivimos", "vivís", "viven"],
                preterite: ["viví", "viviste", "vivió", "vivimos", "vivisteis", "vivieron"],
                imperfect: ["vivía", "vivías", "vivía", "vivíamos", "vivíais", "vivían"],
                future: ["viviré", "vivirás", "vivirá", "viviremos", "viviréis", "vivirán"],
                conditional: ["viviría", "vivirías", "viviría", "viviríamos", "viviríais", "vivirían"],
                present_perfect: ["he vivido", "has vivido", "ha vivido", "hemos vivido", "habéis vivido", "han vivido"],
                past_perfect: ["había vivido", "habías vivido", "había vivido", "habíamos vivido", "habíais vivido", "habían vivido"],
                future_perfect: ["habré vivido", "habrás vivido", "habrá vivido", "habremos vivido", "habréis vivido", "habrán vivido"],
                conditional_perfect: ["habría vivido", "habrías vivido", "habría vivido", "habríamos vivido", "habríais vivido", "habrían vivido"]
            },
            subjunctive: {
                present: ["viva", "vivas", "viva", "vivamos", "viváis", "vivan"],
                imperfect: ["viviera", "vivieras", "viviera", "viviéramos", "vivierais", "vivieran"],
                present_perfect: ["haya vivido", "hayas vivido", "haya vivido", "hayamos vivido", "hayáis vivido", "hayan vivido"]
            },
            imperative: {
                positive: ["vive", "viva", "vivamos", "vivid", "vivan"],
                negative: ["no vivas", "no viva", "no vivamos", "no viváis", "no vivan"]
            }
        }
    },
    {
        infinitive: "ser",
        translation: "to be (permanent)",
        gerund: "siendo",
        past_participle: "sido",
        conjugations: {
            indicative: {
                present: ["soy", "eres", "es", "somos", "sois", "son"],
                preterite: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
                imperfect: ["era", "eras", "era", "éramos", "erais", "eran"],
                future: ["seré", "serás", "será", "seremos", "seréis", "serán"],
                conditional: ["sería", "serías", "sería", "seríamos", "seríais", "serían"],
                present_perfect: ["he sido", "has sido", "ha sido", "hemos sido", "habéis sido", "han sido"],
                past_perfect: ["había sido", "habías sido", "había sido", "habíamos sido", "habíais sido", "habían sido"],
                future_perfect: ["habré sido", "habrás sido", "habrá sido", "habremos sido", "habréis sido", "habrán sido"],
                conditional_perfect: ["habría sido", "habrías sido", "habría sido", "habríamos sido", "habríais sido", "habrían sido"]
            },
            subjunctive: {
                present: ["sea", "seas", "sea", "seamos", "seáis", "sean"],
                imperfect: ["fuera", "fueras", "fuera", "fuéramos", "fuerais", "fueran"],
                present_perfect: ["haya sido", "hayas sido", "haya sido", "hayamos sido", "hayáis sido", "hayan sido"]
            },
            imperative: {
                positive: ["sé", "sea", "seamos", "sed", "sean"],
                negative: ["no seas", "no sea", "no seamos", "no seáis", "no sean"]
            }
        }
    },
    {
        infinitive: "ir",
        translation: "to go",
        gerund: "yendo",
        past_participle: "ido",
        conjugations: {
            indicative: {
                present: ["voy", "vas", "va", "vamos", "vais", "van"],
                preterite: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
                imperfect: ["iba", "ibas", "iba", "íbamos", "ibais", "iban"],
                future: ["iré", "irás", "irá", "iremos", "iréis", "irán"],
                conditional: ["iría", "irías", "iría", "iríamos", "iríais", "irían"],
                present_perfect: ["he ido", "has ido", "ha ido", "hemos ido", "habéis ido", "han ido"],
                past_perfect: ["había ido", "habías ido", "había ido", "habíamos ido", "habíais ido", "habían ido"],
                future_perfect: ["habré ido", "habrás ido", "habrá ido", "habremos ido", "habréis ido", "habrán ido"],
                conditional_perfect: ["habría ido", "habrías ido", "habría ido", "habríamos ido", "habríais ido", "habrían ido"]
            },
            subjunctive: {
                present: ["vaya", "vayas", "vaya", "vayamos", "vayáis", "vayan"],
                imperfect: ["fuera", "fueras", "fuera", "fuéramos", "fuerais", "fueran"],
                present_perfect: ["haya ido", "hayas ido", "haya ido", "hayamos ido", "hayáis ido", "hayan ido"]
            },
            imperative: {
                positive: ["ve", "vaya", "vayamos", "id", "vayan"],
                negative: ["no vayas", "no vaya", "no vayamos", "no vayáis", "no vayan"]
            }
        }
    },
    {
        infinitive: "hacer",
        translation: "to do/make",
        gerund: "haciendo",
        past_participle: "hecho",
        conjugations: {
            indicative: {
                present: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"],
                preterite: ["hice", "hiciste", "hizo", "hicimos", "hicisteis", "hicieron"],
                imperfect: ["hacía", "hacías", "hacía", "hacíamos", "hacíais", "hacían"],
                future: ["haré", "harás", "hará", "haremos", "haréis", "harán"],
                conditional: ["haría", "harías", "haría", "haríamos", "haríais", "harían"],
                present_perfect: ["he hecho", "has hecho", "ha hecho", "hemos hecho", "habéis hecho", "han hecho"],
                past_perfect: ["había hecho", "habías hecho", "había hecho", "habíamos hecho", "habíais hecho", "habían hecho"],
                future_perfect: ["habré hecho", "habrás hecho", "habrá hecho", "habremos hecho", "habréis hecho", "habrán hecho"],
                conditional_perfect: ["habría hecho", "habrías hecho", "habría hecho", "habríamos hecho", "habríais hecho", "habrían hecho"]
            },
            subjunctive: {
                present: ["haga", "hagas", "haga", "hagamos", "hagáis", "hagan"],
                imperfect: ["hiciera", "hicieras", "hiciera", "hiciéramos", "hicierais", "hicieran"],
                present_perfect: ["haya hecho", "hayas hecho", "haya hecho", "hayamos hecho", "hayáis hecho", "hayan hecho"]
            },
            imperative: {
                positive: ["haz", "haga", "hagamos", "haced", "hagan"],
                negative: ["no hagas", "no haga", "no hagamos", "no hagáis", "no hagan"]
            }
        }
    },
    {
        infinitive: "tener",
        translation: "to have",
        gerund: "teniendo",
        past_participle: "tenido",
        conjugations: {
            indicative: {
                present: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],
                preterite: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"],
                imperfect: ["tenía", "tenías", "tenía", "teníamos", "teníais", "tenían"],
                future: ["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"],
                conditional: ["tendría", "tendrías", "tendría", "tendríamos", "tendríais", "tendrían"],
                present_perfect: ["he tenido", "has tenido", "ha tenido", "hemos tenido", "habéis tenido", "han tenido"],
                past_perfect: ["había tenido", "habías tenido", "había tenido", "habíamos tenido", "habíais tenido", "habían tenido"],
                future_perfect: ["habré tenido", "habrás tenido", "habrá tenido", "habremos tenido", "habréis tenido", "habrán tenido"],
                conditional_perfect: ["habría tenido", "habrías tenido", "habría tenido", "habríamos tenido", "habríais tenido", "habrían tenido"]
            },
            subjunctive: {
                present: ["tenga", "tengas", "tenga", "tengamos", "tengáis", "tengan"],
                imperfect: ["tuviera", "tuvieras", "tuviera", "tuviéramos", "tuvierais", "tuvieran"],
                present_perfect: ["haya tenido", "hayas tenido", "haya tenido", "hayamos tenido", "hayáis tenido", "hayan tenido"]
            },
            imperative: {
                positive: ["ten", "tenga", "tengamos", "tened", "tengan"],
                negative: ["no tengas", "no tenga", "no tengamos", "no tengáis", "no tengan"]
            }
        }
    },
    {
        infinitive: "estar",
        translation: "to be (location/state)",
        gerund: "estando",
        past_participle: "estado",
        conjugations: {
            indicative: {
                present: ["estoy", "estás", "está", "estamos", "estáis", "están"],
                preterite: ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"],
                imperfect: ["estaba", "estabas", "estaba", "estábamos", "estabais", "estaban"],
                future: ["estaré", "estarás", "estará", "estaremos", "estaréis", "estarán"],
                conditional: ["estaría", "estarías", "estaría", "estaríamos", "estaríais", "estarían"],
                present_perfect: ["he estado", "has estado", "ha estado", "hemos estado", "habéis estado", "han estado"],
                past_perfect: ["había estado", "habías estado", "había estado", "habíamos estado", "habíais estado", "habían estado"],
                future_perfect: ["habré estado", "habrás estado", "habrá estado", "habremos estado", "habréis estado", "habrán estado"],
                conditional_perfect: ["habría estado", "habrías estado", "habría estado", "habríamos estado", "habríais estado", "habrían estado"]
            },
            subjunctive: {
                present: ["esté", "estés", "esté", "estemos", "estéis", "estén"],
                imperfect: ["estuviera", "estuvieras", "estuviera", "estuviéramos", "estuvierais", "estuvieran"],
                present_perfect: ["haya estado", "hayas estado", "haya estado", "hayamos estado", "hayáis estado", "hayan estado"]
            },
            imperative: {
                positive: ["está", "esté", "estemos", "estad", "estén"],
                negative: ["no estés", "no esté", "no estemos", "no estéis", "no estén"]
            }
        }
    }
];

const PRONOUNS = {
    standard: ["Yo", "Tú", "Él/Ella/Ud.", "Nosotros", "Vosotros", "Ellos/Ellas/Uds."],
    imperative: ["Tú", "Ud.", "Nosotros", "Vosotros", "Uds."],
    nonFinite: ["-"] // No pronouns for non-finite forms
};