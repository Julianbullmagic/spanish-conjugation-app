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
                imperfect: ["hablara", "hablaras", "hablara", "habláramos", "hablarais", "hablaran"],
                present_perfect: ["haya hablado", "hayas hablado", "haya hablado", "hayamos hablado", "hayáis hablado", "hayan hablado"]
            },
            imperative: {
                positive: ["habla", "hable", "hablemos", "hablad", "hablen"],
                negative: ["no hables", "no hable", "no hablemos", "no habléis", "no hablen"]
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
    },
    {
        infinitive: "decir",
        translation: "to say/tell",
        gerund: "diciendo",
        past_participle: "dicho",
        conjugations: {
            indicative: {
                present: ["digo", "dices", "dice", "decimos", "decís", "dicen"],
                preterite: ["dije", "dijiste", "dijo", "dijimos", "dijisteis", "dijeron"],
                imperfect: ["decía", "decías", "decía", "decíamos", "decíais", "decían"],
                future: ["diré", "dirás", "dirá", "diremos", "diréis", "dirán"],
                conditional: ["diría", "dirías", "diría", "diríamos", "diríais", "dirían"],
                present_perfect: ["he dicho", "has dicho", "ha dicho", "hemos dicho", "habéis dicho", "han dicho"],
                past_perfect: ["había dicho", "habías dicho", "había dicho", "habíamos dicho", "habíais dicho", "habían dicho"],
                future_perfect: ["habré dicho", "habrás dicho", "habrá dicho", "habremos dicho", "habréis dicho", "habrán dicho"],
                conditional_perfect: ["habría dicho", "habrías dicho", "habría dicho", "habríamos dicho", "habríais dicho", "habrían dicho"]
            },
            subjunctive: {
                present: ["diga", "digas", "diga", "digamos", "digáis", "digan"],
                imperfect: ["dijera", "dijeras", "dijera", "dijéramos", "dijerais", "dijeran"],
                present_perfect: ["haya dicho", "hayas dicho", "haya dicho", "hayamos dicho", "hayáis dicho", "hayan dicho"]
            },
            imperative: {
                positive: ["di", "diga", "digamos", "decid", "digan"],
                negative: ["no digas", "no diga", "no digamos", "no digáis", "no digan"]
            }
        }
    },
    {
        infinitive: "poder",
        translation: "to be able to/can",
        gerund: "pudiendo",
        past_participle: "podido",
        conjugations: {
            indicative: {
                present: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"],
                preterite: ["pude", "pudiste", "pudo", "pudimos", "pudisteis", "pudieron"],
                imperfect: ["podía", "podías", "podía", "podíamos", "podíais", "podían"],
                future: ["podré", "podrás", "podrá", "podremos", "podréis", "podrán"],
                conditional: ["podría", "podrías", "podría", "podríamos", "podríais", "podrían"],
                present_perfect: ["he podido", "has podido", "ha podido", "hemos podido", "habéis podido", "han podido"],
                past_perfect: ["había podido", "habías podido", "había podido", "habíamos podido", "habíais podido", "habían podido"],
                future_perfect: ["habré podido", "habrás podido", "habrá podido", "habremos podido", "habréis podido", "habrán podido"],
                conditional_perfect: ["habría podido", "habrías podido", "habría podido", "habríamos podido", "habríais podido", "habrían podido"]
            },
            subjunctive: {
                present: ["pueda", "puedas", "pueda", "podamos", "podáis", "puedan"],
                imperfect: ["pudiera", "pudieras", "pudiera", "pudiéramos", "pudierais", "pudieran"],
                present_perfect: ["haya podido", "hayas podido", "haya podido", "hayamos podido", "hayáis podido", "hayan podido"]
            },
            imperative: {
                positive: ["puede", "pueda", "podamos", "poded", "puedan"],
                negative: ["no puedas", "no pueda", "no podamos", "no podáis", "no puedan"]
            }
        }
    },
    {
        infinitive: "querer",
        translation: "to want/love",
        gerund: "queriendo",
        past_participle: "querido",
        conjugations: {
            indicative: {
                present: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"],
                preterite: ["quise", "quisiste", "quiso", "quisimos", "quisisteis", "quisieron"],
                imperfect: ["quería", "querías", "quería", "queríamos", "queríais", "querían"],
                future: ["querré", "querrás", "querrá", "querremos", "querréis", "querrán"],
                conditional: ["querría", "querrías", "querría", "querríamos", "querríais", "querrían"],
                present_perfect: ["he querido", "has querido", "ha querido", "hemos querido", "habéis querido", "han querido"],
                past_perfect: ["había querido", "habías querido", "había querido", "habíamos querido", "habíais querido", "habían querido"],
                future_perfect: ["habré querido", "habrás querido", "habrá querido", "habremos querido", "habréis querido", "habrán querido"],
                conditional_perfect: ["habría querido", "habrías querido", "habría querido", "habríamos querido", "habríais querido", "habrían querido"]
            },
            subjunctive: {
                present: ["quiera", "quieras", "quiera", "queramos", "queráis", "quieran"],
                imperfect: ["quisiera", "quisieras", "quisiera", "quisiéramos", "quisierais", "quisieran"],
                present_perfect: ["haya querido", "hayas querido", "haya querido", "hayamos querido", "hayáis querido", "hayan querido"]
            },
            imperative: {
                positive: ["quiere", "quiera", "queramos", "quered", "quieran"],
                negative: ["no quieras", "no quiera", "no queramos", "no queráis", "no quieran"]
            }
        }
    },
    {
        infinitive: "saber",
        translation: "to know (facts)",
        gerund: "sabiendo",
        past_participle: "sabido",
        conjugations: {
            indicative: {
                present: ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"],
                preterite: ["supe", "supiste", "supo", "supimos", "supisteis", "supieron"],
                imperfect: ["sabía", "sabías", "sabía", "sabíamos", "sabíais", "sabían"],
                future: ["sabré", "sabrás", "sabrá", "sabremos", "sabréis", "sabrán"],
                conditional: ["sabría", "sabrías", "sabría", "sabríamos", "sabríais", "sabrían"],
                present_perfect: ["he sabido", "has sabido", "ha sabido", "hemos sabido", "habéis sabido", "han sabido"],
                past_perfect: ["había sabido", "habías sabido", "había sabido", "habíamos sabido", "habíais sabido", "habían sabido"],
                future_perfect: ["habré sabido", "habrás sabido", "habrá sabido", "habremos sabido", "habréis sabido", "habrán sabido"],
                conditional_perfect: ["habría sabido", "habrías sabido", "habría sabido", "habríamos sabido", "habríais sabido", "habrían sabido"]
            },
            subjunctive: {
                present: ["sepa", "sepas", "sepa", "sepamos", "sepáis", "sepan"],
                imperfect: ["supiera", "supieras", "supiera", "supiéramos", "supierais", "supieran"],
                present_perfect: ["haya sabido", "hayas sabido", "haya sabido", "hayamos sabido", "hayáis sabido", "hayan sabido"]
            },
            imperative: {
                positive: ["sabe", "sepa", "sepamos", "sabed", "sepan"],
                negative: ["no sepas", "no sepa", "no sepamos", "no sepáis", "no sepan"]
            }
        }
    },
    {
        infinitive: "ver",
        translation: "to see",
        gerund: "viendo",
        past_participle: "visto",
        conjugations: {
            indicative: {
                present: ["veo", "ves", "ve", "vemos", "veis", "ven"],
                preterite: ["vi", "viste", "vio", "vimos", "visteis", "vieron"],
                imperfect: ["veía", "veías", "veía", "veíamos", "veíais", "veían"],
                future: ["veré", "verás", "verá", "veremos", "veréis", "verán"],
                conditional: ["vería", "verías", "vería", "veríamos", "veríais", "verían"],
                present_perfect: ["he visto", "has visto", "ha visto", "hemos visto", "habéis visto", "han visto"],
                past_perfect: ["había visto", "habías visto", "había visto", "habíamos visto", "habíais visto", "habían visto"],
                future_perfect: ["habré visto", "habrás visto", "habrá visto", "habremos visto", "habréis visto", "habrán visto"],
                conditional_perfect: ["habría visto", "habrías visto", "habría visto", "habríamos visto", "habríais visto", "habrían visto"]
            },
            subjunctive: {
                present: ["vea", "veas", "vea", "veamos", "veáis", "vean"],
                imperfect: ["viera", "vieras", "viera", "viéramos", "vierais", "vieran"],
                present_perfect: ["haya visto", "hayas visto", "haya visto", "hayamos visto", "hayáis visto", "hayan visto"]
            },
            imperative: {
                positive: ["ve", "vea", "veamos", "ved", "vean"],
                negative: ["no veas", "no vea", "no veamos", "no veáis", "no vean"]
            }
        }
    },
    {
        infinitive: "dar",
        translation: "to give",
        gerund: "dando",
        past_participle: "dado",
        conjugations: {
            indicative: {
                present: ["doy", "das", "da", "damos", "dais", "dan"],
                preterite: ["di", "diste", "dio", "dimos", "disteis", "dieron"],
                imperfect: ["daba", "dabas", "daba", "dábamos", "dabais", "daban"],
                future: ["daré", "darás", "dará", "daremos", "daréis", "darán"],
                conditional: ["daría", "darías", "daría", "daríamos", "daríais", "darían"],
                present_perfect: ["he dado", "has dado", "ha dado", "hemos dado", "habéis dado", "han dado"],
                past_perfect: ["había dado", "habías dado", "había dado", "habíamos dado", "habíais dado", "habían dado"],
                future_perfect: ["habré dado", "habrás dado", "habrá dado", "habremos dado", "habréis dado", "habrán dado"],
                conditional_perfect: ["habría dado", "habrías dado", "habría dado", "habríamos dado", "habríais dado", "habrían dado"]
            },
            subjunctive: {
                present: ["dé", "des", "dé", "demos", "deis", "den"],
                imperfect: ["diera", "dieras", "diera", "diéramos", "dierais", "dieran"],
                present_perfect: ["haya dado", "hayas dado", "haya dado", "hayamos dado", "hayáis dado", "hayan dado"]
            },
            imperative: {
                positive: ["da", "dé", "demos", "dad", "den"],
                negative: ["no des", "no dé", "no demos", "no deis", "no den"]
            }
        }
    },
    {
        infinitive: "venir",
        translation: "to come",
        gerund: "viniendo",
        past_participle: "venido",
        conjugations: {
            indicative: {
                present: ["vengo", "vienes", "viene", "venimos", "venís", "vienen"],
                preterite: ["vine", "viniste", "vino", "vinimos", "vinisteis", "vinieron"],
                imperfect: ["venía", "venías", "venía", "veníamos", "veníais", "venían"],
                future: ["vendré", "vendrás", "vendrá", "vendremos", "vendréis", "vendrán"],
                conditional: ["vendría", "vendrías", "vendría", "vendríamos", "vendríais", "vendrían"],
                present_perfect: ["he venido", "has venido", "ha venido", "hemos venido", "habéis venido", "han venido"],
                past_perfect: ["había venido", "habías venido", "había venido", "habíamos venido", "habíais venido", "habían venido"],
                future_perfect: ["habré venido", "habrás venido", "habrá venido", "habremos venido", "habréis venido", "habrán venido"],
                conditional_perfect: ["habría venido", "habrías venido", "habría venido", "habríamos venido", "habríais venido", "habrían venido"]
            },
            subjunctive: {
                present: ["venga", "vengas", "venga", "vengamos", "vengáis", "vengan"],
                imperfect: ["viniera", "vinieras", "viniera", "viniéramos", "vinierais", "vinieran"],
                present_perfect: ["haya venido", "hayas venido", "haya venido", "hayamos venido", "hayáis venido", "hayan venido"]
            },
            imperative: {
                positive: ["ven", "venga", "vengamos", "venid", "vengan"],
                negative: ["no vengas", "no venga", "no vengamos", "no vengáis", "no vengan"]
            }
        }
    },
    {
        infinitive: "pensar",
        translation: "to think",
        gerund: "pensando",
        past_participle: "pensado",
        conjugations: {
            indicative: {
                present: ["pienso", "piensas", "piensa", "pensamos", "pensáis", "piensan"],
                preterite: ["pensé", "pensaste", "pensó", "pensamos", "pensasteis", "pensaron"],
                imperfect: ["pensaba", "pensabas", "pensaba", "pensábamos", "pensabais", "pensaban"],
                future: ["pensaré", "pensarás", "pensará", "pensaremos", "pensaréis", "pensarán"],
                conditional: ["pensaría", "pensarías", "pensaría", "pensaríamos", "pensaríais", "pensarían"],
                present_perfect: ["he pensado", "has pensado", "ha pensado", "hemos pensado", "habéis pensado", "han pensado"],
                past_perfect: ["había pensado", "habías pensado", "había pensado", "habíamos pensado", "habíais pensado", "habían pensado"],
                future_perfect: ["habré pensado", "habrás pensado", "habrá pensado", "habremos pensado", "habréis pensado", "habrán pensado"],
                conditional_perfect: ["habría pensado", "habrías pensado", "habría pensado", "habríamos pensado", "habríais pensado", "habrían pensado"]
            },
            subjunctive: {
                present: ["piense", "pienses", "piense", "pensemos", "penséis", "piensen"],
                imperfect: ["pensara", "pensaras", "pensara", "pensáramos", "pensarais", "pensaran"],
                present_perfect: ["haya pensado", "hayas pensado", "haya pensado", "hayamos pensado", "hayáis pensado", "hayan pensado"]
            },
            imperative: {
                positive: ["piensa", "piense", "pensemos", "pensad", "piensen"],
                negative: ["no pienses", "no piense", "no pensemos", "no penséis", "no piensen"]
            }
        }
    },
    {
        infinitive: "deber",
        translation: "to owe/should/must",
        gerund: "debiendo",
        past_participle: "debido",
        conjugations: {
            indicative: {
                present: ["debo", "debes", "debe", "debemos", "debéis", "deben"],
                preterite: ["debí", "debiste", "debió", "debimos", "debisteis", "debieron"],
                imperfect: ["debía", "debías", "debía", "debíamos", "debíais", "debían"],
                future: ["deberé", "deberás", "deberá", "deberemos", "deberéis", "deberán"],
                conditional: ["debería", "deberías", "debería", "deberíamos", "deberíais", "deberían"],
                present_perfect: ["he debido", "has debido", "ha debido", "hemos debido", "habéis debido", "han debido"],
                past_perfect: ["había debido", "habías debido", "había debido", "habíamos debido", "habíais debido", "habían debido"],
                future_perfect: ["habré debido", "habrás debido", "habrá debido", "habremos debido", "habréis debido", "habrán debido"],
                conditional_perfect: ["habría debido", "habrías debido", "habría debido", "habríamos debido", "habríais debido", "habrían debido"]
            },
            subjunctive: {
                present: ["deba", "debas", "deba", "debamos", "debáis", "deban"],
                imperfect: ["debiera", "debieras", "debiera", "debiéramos", "debierais", "debieran"],
                present_perfect: ["haya debido", "hayas debido", "haya debido", "hayamos debido", "hayáis debido", "hayan debido"]
            },
            imperative: {
                positive: ["debe", "deba", "debamos", "debed", "deban"],
                negative: ["no debas", "no deba", "no debamos", "no debáis", "no deban"]
            }
        }
    },
    {
        infinitive: "escribir",
        translation: "to write",
        gerund: "escribiendo",
        past_participle: "escrito",
        conjugations: {
            indicative: {
                present: ["escribo", "escribes", "escribe", "escribimos", "escribís", "escriben"],
                preterite: ["escribí", "escribiste", "escribió", "escribimos", "escribisteis", "escribieron"],
                imperfect: ["escribía", "escribías", "escribía", "escribíamos", "escribíais", "escribían"],
                future: ["escribiré", "escribirás", "escribirá", "escribiremos", "escribiréis", "escribirán"],
                conditional: ["escribiría", "escribirías", "escribiría", "escribiríamos", "escribiríais", "escribirían"],
                present_perfect: ["he escrito", "has escrito", "ha escrito", "hemos escrito", "habéis escrito", "han escrito"],
                past_perfect: ["había escrito", "habías escrito", "había escrito", "habíamos escrito", "habíais escrito", "habían escrito"],
                future_perfect: ["habré escrito", "habrás escrito", "habrá escrito", "habremos escrito", "habréis escrito", "habrán escrito"],
                conditional_perfect: ["habría escrito", "habrías escrito", "habría escrito", "habríamos escrito", "habríais escrito", "habrían escrito"]
            },
            subjunctive: {
                present: ["escriba", "escribas", "escriba", "escribamos", "escribáis", "escriban"],
                imperfect: ["escribiera", "escribieras", "escribiera", "escribiéramos", "escribierais", "escribieran"],
                present_perfect: ["haya escrito", "hayas escrito", "haya escrito", "hayamos escrito", "hayáis escrito", "hayan escrito"]
            },
            imperative: {
                positive: ["escribe", "escriba", "escribamos", "escribid", "escriban"],
                negative: ["no escribas", "no escriba", "no escribamos", "no escribáis", "no escriban"]
            }
        }
    },
    {
        infinitive: "leer",
        translation: "to read",
        gerund: "leyendo",
        past_participle: "leído",
        conjugations: {
            indicative: {
                present: ["leo", "lees", "lee", "leemos", "leéis", "leen"],
                preterite: ["leí", "leíste", "leyó", "leímos", "leísteis", "leyeron"],
                imperfect: ["leía", "leías", "leía", "leíamos", "leíais", "leían"],
                future: ["leeré", "leerás", "leerá", "leeremos", "leeréis", "leerán"],
                conditional: ["leería", "leerías", "leería", "leeríamos", "leeríais", "leerían"],
                present_perfect: ["he leído", "has leído", "ha leído", "hemos leído", "habéis leído", "han leído"],
                past_perfect: ["había leído", "habías leído", "había leído", "habíamos leído", "habíais leído", "habían leído"],
                future_perfect: ["habré leído", "habrás leído", "habrá leído", "habremos leído", "habréis leído", "habrán leído"],
                conditional_perfect: ["habría leído", "habrías leído", "habría leído", "habríamos leído", "habríais leído", "habrían leído"]
            },
            subjunctive: {
                present: ["lea", "leas", "lea", "leamos", "leáis", "lean"],
                imperfect: ["leyera", "leyeras", "leyera", "leyéramos", "leyerais", "leyeran"],
                present_perfect: ["haya leído", "hayas leído", "haya leído", "hayamos leído", "hayáis leído", "hayan leído"]
            },
            imperative: {
                positive: ["lee", "lea", "leamos", "leed", "lean"],
                negative: ["no leas", "no lea", "no leamos", "no leáis", "no lean"]
            }
        }
    },
    {
        infinitive: "poner",
        translation: "to put/place",
        gerund: "poniendo",
        past_participle: "puesto",
        conjugations: {
            indicative: {
                present: ["pongo", "pones", "pone", "ponemos", "ponéis", "ponen"],
                preterite: ["puse", "pusiste", "puso", "pusimos", "pusisteis", "pusieron"],
                imperfect: ["ponía", "ponías", "ponía", "poníamos", "poníais", "ponían"],
                future: ["pondré", "pondrás", "pondrá", "pondremos", "pondréis", "pondrán"],
                conditional: ["pondría", "pondrías", "pondría", "pondríamos", "pondríais", "pondrían"],
                present_perfect: ["he puesto", "has puesto", "ha puesto", "hemos puesto", "habéis puesto", "han puesto"],
                past_perfect: ["había puesto", "habías puesto", "había puesto", "habíamos puesto", "habíais puesto", "habían puesto"],
                future_perfect: ["habré puesto", "habrás puesto", "habrá puesto", "habremos puesto", "habréis puesto", "habrán puesto"],
                conditional_perfect: ["habría puesto", "habrías puesto", "habría puesto", "habríamos puesto", "habríais puesto", "habrían puesto"]
            },
            subjunctive: {
                present: ["ponga", "pongas", "ponga", "pongamos", "pongáis", "pongan"],
                imperfect: ["pusiera", "pusieras", "pusiera", "pusiéramos", "pusierais", "pusieran"],
                present_perfect: ["haya puesto", "hayas puesto", "haya puesto", "hayamos puesto", "hayáis puesto", "hayan puesto"]
            },
            imperative: {
                positive: ["pon", "ponga", "pongamos", "poned", "pongan"],
                negative: ["no pongas", "no ponga", "no pongamos", "no pongáis", "no pongan"]
            }
        }
    },
    {
        infinitive: "salir",
        translation: "to leave/go out",
        gerund: "saliendo",
        past_participle: "salido",
        conjugations: {
            indicative: {
                present: ["salgo", "sales", "sale", "salimos", "salís", "salen"],
                preterite: ["salí", "saliste", "salió", "salimos", "salisteis", "salieron"],
                imperfect: ["salía", "salías", "salía", "salíamos", "salíais", "salían"],
                future: ["saldré", "saldrás", "saldrá", "saldremos", "saldréis", "saldrán"],
                conditional: ["saldría", "saldrías", "saldría", "saldríamos", "saldríais", "saldrían"],
                present_perfect: ["he salido", "has salido", "ha salido", "hemos salido", "habéis salido", "han salido"],
                past_perfect: ["había salido", "habías salido", "había salido", "habíamos salido", "habíais salido", "habían salido"],
                future_perfect: ["habré salido", "habrás salido", "habrá salido", "habremos salido", "habréis salido", "habrán salido"],
                conditional_perfect: ["habría salido", "habrías salido", "habría salido", "habríamos salido", "habríais salido", "habrían salido"]
            },
            subjunctive: {
                present: ["salga", "salgas", "salga", "salgamos", "salgáis", "salgan"],
                imperfect: ["saliera", "salieras", "saliera", "saliéramos", "salierais", "salieran"],
                present_perfect: ["haya salido", "hayas salido", "haya salido", "hayamos salido", "hayáis salido", "hayan salido"]
            },
            imperative: {
                positive: ["sal", "salga", "salgamos", "salid", "salgan"],
                negative: ["no salgas", "no salga", "no salgamos", "no salgáis", "no salgan"]
            }
        }
    },
    {
        infinitive: "conocer",
        translation: "to know (people/places)",
        gerund: "conociendo",
        past_participle: "conocido",
        conjugations: {
            indicative: {
                present: ["conozco", "conoces", "conoce", "conocemos", "conocéis", "conocen"],
                preterite: ["conocí", "conociste", "conoció", "conocimos", "conocisteis", "conocieron"],
                imperfect: ["conocía", "conocías", "conocía", "conocíamos", "conocíais", "conocían"],
                future: ["conoceré", "conocerás", "conocerá", "conoceremos", "conoceréis", "conocerán"],
                conditional: ["conocería", "conocerías", "conocería", "conoceríamos", "conoceríais", "conocerían"],
                present_perfect: ["he conocido", "has conocido", "ha conocido", "hemos conocido", "habéis conocido", "han conocido"],
                past_perfect: ["había conocido", "habías conocido", "había conocido", "habíamos conocido", "habíais conocido", "habían conocido"],
                future_perfect: ["habré conocido", "habrás conocido", "habrá conocido", "habremos conocido", "habréis conocido", "habrán conocido"],
                conditional_perfect: ["habría conocido", "habrías conocido", "habría conocido", "habríamos conocido", "habríais conocido", "habrían conocido"]
            },
            subjunctive: {
                present: ["conozca", "conozcas", "conozca", "conozcamos", "conozcáis", "conozcan"],
                imperfect: ["conociera", "conocieras", "conociera", "conociéramos", "conocierais", "conocieran"],
                present_perfect: ["haya conocido", "hayas conocido", "haya conocido", "hayamos conocido", "hayáis conocido", "hayan conocido"]
            },
            imperative: {
                positive: ["conoce", "conozca", "conozcamos", "conoced", "conozcan"],
                negative: ["no conozcas", "no conozca", "no conozcamos", "no conozcáis", "no conozcan"]
            }
        }
    },
    {
        infinitive: "trabajar",
        translation: "to work",
        gerund: "trabajando",
        past_participle: "trabajado",
        conjugations: {
            indicative: {
                present: ["trabajo", "trabajas", "trabaja", "trabajamos", "trabajáis", "trabajan"],
                preterite: ["trabajé", "trabajaste", "trabajó", "trabajamos", "trabajasteis", "trabajaron"],
                imperfect: ["trabajaba", "trabajabas", "trabajaba", "trabajábamos", "trabajabais", "trabajaban"],
                future: ["trabajaré", "trabajarás", "trabajará", "trabajaremos", "trabajaréis", "trabajarán"],
                conditional: ["trabajaría", "trabajarías", "trabajaría", "trabajaríamos", "trabajaríais", "trabajarían"],
                present_perfect: ["he trabajado", "has trabajado", "ha trabajado", "hemos trabajado", "habéis trabajado", "han trabajado"],
                past_perfect: ["había trabajado", "habías trabajado", "había trabajado", "habíamos trabajado", "habíais trabajado", "habían trabajado"],
                future_perfect: ["habré trabajado", "habrás trabajado", "habrá trabajado", "habremos trabajado", "habréis trabajado", "habrán trabajado"],
                conditional_perfect: ["habría trabajado", "habrías trabajado", "habría trabajado", "habríamos trabajado", "habríais trabajado", "habrían trabajado"]
            },
            subjunctive: {
                present: ["trabaje", "trabajes", "trabaje", "trabajemos", "trabajéis", "trabajen"],
                imperfect: ["trabajara", "trabajaras", "trabajara", "trabajáramos", "trabajarais", "trabajaran"],
                present_perfect: ["haya trabajado", "hayas trabajado", "haya trabajado", "hayamos trabajado", "hayáis trabajado", "hayan trabajado"]
            },
            imperative: {
                positive: ["trabaja", "trabaje", "trabajemos", "trabajad", "trabajen"],
                negative: ["no trabajes", "no trabaje", "no trabajemos", "no trabajéis", "no trabajen"]
            }
        }
    },
    {
        infinitive: "necesitar",
        translation: "to need",
        gerund: "necesitando",
        past_participle: "necesitado",
        conjugations: {
            indicative: {
                present: ["necesito", "necesitas", "necesita", "necesitamos", "necesitáis", "necesitan"],
                preterite: ["necesité", "necesitaste", "necesitó", "necesitamos", "necesitasteis", "necesitaron"],
                imperfect: ["necesitaba", "necesitabas", "necesitaba", "necesitábamos", "necesitabais", "necesitaban"],
                future: ["necesitaré", "necesitarás", "necesitará", "necesitaremos", "necesitaréis", "necesitarán"],
                conditional: ["necesitaría", "necesitarías", "necesitaría", "necesitaríamos", "necesitaríais", "necesitarían"],
                present_perfect: ["he necesitado", "has necesitado", "ha necesitado", "hemos necesitado", "habéis necesitado", "han necesitado"],
                past_perfect: ["había necesitado", "habías necesitado", "había necesitado", "habíamos necesitado", "habíais necesitado", "habían necesitado"],
                future_perfect: ["habré necesitado", "habrás necesitado", "habrá necesitado", "habremos necesitado", "habréis necesitado", "habrán necesitado"],
                conditional_perfect: ["habría necesitado", "habrías necesitado", "habría necesitado", "habríamos necesitado", "habríais necesitado", "habrían necesitado"]
            },
            subjunctive: {
                present: ["necesite", "necesites", "necesite", "necesitemos", "necesitéis", "necesiten"],
                imperfect: ["necesitara", "necesitaras", "necesitara", "necesitáramos", "necesitarais", "necesitaran"],
                present_perfect: ["haya necesitado", "hayas necesitado", "haya necesitado", "hayamos necesitado", "hayáis necesitado", "hayan necesitado"]
            },
            imperative: {
                positive: ["necesita", "necesite", "necesitemos", "necesitad", "necesiten"],
                negative: ["no necesites", "no necesite", "no necesitemos", "no necesitéis", "no necesiten"]
            }
        }
    },
    {
        infinitive: "sentir",
        translation: "to feel",
        gerund: "sintiendo",
        past_participle: "sentido",
        conjugations: {
            indicative: {
                present: ["siento", "sientes", "siente", "sentimos", "sentís", "sienten"],
                preterite: ["sentí", "sentiste", "sintió", "sentimos", "sentisteis", "sintieron"],
                imperfect: ["sentía", "sentías", "sentía", "sentíamos", "sentíais", "sentían"],
                future: ["sentiré", "sentirás", "sentirá", "sentiremos", "sentiréis", "sentirán"],
                conditional: ["sentiría", "sentirías", "sentiría", "sentiríamos", "sentiríais", "sentirían"],
                present_perfect: ["he sentido", "has sentido", "ha sentido", "hemos sentido", "habéis sentido", "han sentido"],
                past_perfect: ["había sentido", "habías sentido", "había sentido", "habíamos sentido", "habíais sentido", "habían sentido"],
                future_perfect: ["habré sentido", "habrás sentido", "habrá sentido", "habremos sentido", "habréis sentido", "habrán sentido"],
                conditional_perfect: ["habría sentido", "habrías sentido", "habría sentido", "habríamos sentido", "habríais sentido", "habrían sentido"]
            },
            subjunctive: {
                present: ["sienta", "sientas", "sienta", "sintamos", "sintáis", "sientan"],
                imperfect: ["sintiera", "sintieras", "sintiera", "sintiéramos", "sintierais", "sintieran"],
                present_perfect: ["haya sentido", "hayas sentido", "haya sentido", "hayamos sentido", "hayáis sentido", "hayan sentido"]
            },
            imperative: {
                positive: ["siente", "sienta", "sintamos", "sentid", "sientan"],
                negative: ["no sientas", "no sienta", "no sintamos", "no sintáis", "no sientan"]
            }
        }
    },
    {
        infinitive: "dormir",
        translation: "to sleep",
        gerund: "durmiendo",
        past_participle: "dormido",
        conjugations: {
            indicative: {
                present: ["duermo", "duermes", "duerme", "dormimos", "dormís", "duermen"],
                preterite: ["dormí", "dormiste", "durmió", "dormimos", "dormisteis", "durmieron"],
                imperfect: ["dormía", "dormías", "dormía", "dormíamos", "dormíais", "dormían"],
                future: ["dormiré", "dormirás", "dormirá", "dormiremos", "dormiréis", "dormirán"],
                conditional: ["dormiría", "dormirías", "dormiría", "dormiríamos", "dormiríais", "dormirían"],
                present_perfect: ["he dormido", "has dormido", "ha dormido", "hemos dormido", "habéis dormido", "han dormido"],
                past_perfect: ["había dormido", "habías dormido", "había dormido", "habíamos dormido", "habíais dormido", "habían dormido"],
                future_perfect: ["habré dormido", "habrás dormido", "habrá dormido", "habremos dormido", "habréis dormido", "habrán dormido"],
                conditional_perfect: ["habría dormido", "habrías dormido", "habría dormido", "habríamos dormido", "habríais dormido", "habrían dormido"]
            },
            subjunctive: {
                present: ["duerma", "duermas", "duerma", "durmamos", "durmáis", "duerman"],
                imperfect: ["durmiera", "durmieras", "durmiera", "durmiéramos", "durmierais", "durmieran"],
                present_perfect: ["haya dormido", "hayas dormido", "haya dormido", "hayamos dormido", "hayáis dormido", "hayan dormido"]
            },
            imperative: {
                positive: ["duerme", "duerma", "durmamos", "dormid", "duerman"],
                negative: ["no duermas", "no duerma", "no durmamos", "no durmáis", "no duerman"]
            }
        }
    },
    {
        infinitive: "encontrar",
        translation: "to find/meet",
        gerund: "encontrando",
        past_participle: "encontrado",
        conjugations: {
            indicative: {
                present: ["encuentro", "encuentras", "encuentra", "encontramos", "encontráis", "encuentran"],
                preterite: ["encontré", "encontraste", "encontró", "encontramos", "encontrasteis", "encontraron"],
                imperfect: ["encontraba", "encontrabas", "encontraba", "encontrábamos", "encontrabais", "encontraban"],
                future: ["encontraré", "encontrarás", "encontrará", "encontraremos", "encontraréis", "encontrarán"],
                conditional: ["encontraría", "encontrarías", "encontraría", "encontraríamos", "encontraríais", "encontrarían"],
                present_perfect: ["he encontrado", "has encontrado", "ha encontrado", "hemos encontrado", "habéis encontrado", "han encontrado"],
                past_perfect: ["había encontrado", "habías encontrado", "había encontrado", "habíamos encontrado", "habíais encontrado", "habían encontrado"],
                future_perfect: ["habré encontrado", "habrás encontrado", "habrá encontrado", "habremos encontrado", "habréis encontrado", "habrán encontrado"],
                conditional_perfect: ["habría encontrado", "habrías encontrado", "habría encontrado", "habríamos encontrado", "habríais encontrado", "habrían encontrado"]
            },
            subjunctive: {
                present: ["encuentre", "encuentres", "encuentre", "encontremos", "encontréis", "encuentren"],
                imperfect: ["encontrara", "encontraras", "encontrara", "encontráramos", "encontrarais", "encontraran"],
                present_perfect: ["haya encontrado", "hayas encontrado", "haya encontrado", "hayamos encontrado", "hayáis encontrado", "hayan encontrado"]
            },
            imperative: {
                positive: ["encuentra", "encuentre", "encontremos", "encontrad", "encuentren"],
                negative: ["no encuentres", "no encuentre", "no encontremos", "no encontréis", "no encuentren"]
            }
        }
    },
    {
        infinitive: "pedir",
        translation: "to ask for/request",
        gerund: "pidiendo",
        past_participle: "pedido",
        conjugations: {
            indicative: {
                present: ["pido", "pides", "pide", "pedimos", "pedís", "piden"],
                preterite: ["pedí", "pediste", "pidió", "pedimos", "pedisteis", "pidieron"],
                imperfect: ["pedía", "pedías", "pedía", "pedíamos", "pedíais", "pedían"],
                future: ["pediré", "pedirás", "pedirá", "pediremos", "pediréis", "pedirán"],
                conditional: ["pediría", "pedirías", "pediría", "pediríamos", "pediríais", "pedirían"],
                present_perfect: ["he pedido", "has pedido", "ha pedido", "hemos pedido", "habéis pedido", "han pedido"],
                past_perfect: ["había pedido", "habías pedido", "había pedido", "habíamos pedido", "habíais pedido", "habían pedido"],
                future_perfect: ["habré pedido", "habrás pedido", "habrá pedido", "habremos pedido", "habréis pedido", "habrán pedido"],
                conditional_perfect: ["habría pedido", "habrías pedido", "habría pedido", "habríamos pedido", "habríais pedido", "habrían pedido"]
            },
            subjunctive: {
                present: ["pida", "pidas", "pida", "pidamos", "pidáis", "pidan"],
                imperfect: ["pidiera", "pidieras", "pidiera", "pidiéramos", "pidierais", "pidieran"],
                present_perfect: ["haya pedido", "hayas pedido", "haya pedido", "hayamos pedido", "hayáis pedido", "hayan pedido"]
            },
            imperative: {
                positive: ["pide", "pida", "pidamos", "pedid", "pidan"],
                negative: ["no pidas", "no pida", "no pidamos", "no pidáis", "no pidan"]
            }
        }
    },
    {
        infinitive: "abrir",
        translation: "to open",
        gerund: "abriendo",
        past_participle: "abierto",
        conjugations: {
            indicative: {
                present: ["abro", "abres", "abre", "abrimos", "abrís", "abren"],
                preterite: ["abrí", "abriste", "abrió", "abrimos", "abristeis", "abrieron"],
                imperfect: ["abría", "abrías", "abría", "abríamos", "abríais", "abrían"],
                future: ["abriré", "abrirás", "abrirá", "abriremos", "abriréis", "abrirán"],
                conditional: ["abriría", "abrirías", "abriría", "abriríamos", "abriríais", "abrirían"],
                present_perfect: ["he abierto", "has abierto", "ha abierto", "hemos abierto", "habéis abierto", "han abierto"],
                past_perfect: ["había abierto", "habías abierto", "había abierto", "habíamos abierto", "habíais abierto", "habían abierto"],
                future_perfect: ["habré abierto", "habrás abierto", "habrá abierto", "habremos abierto", "habréis abierto", "habrán abierto"],
                conditional_perfect: ["habría abierto", "habrías abierto", "habría abierto", "habríamos abierto", "habríais abierto", "habrían abierto"]
            },
            subjunctive: {
                present: ["abra", "abras", "abra", "abramos", "abráis", "abran"],
                imperfect: ["abriera", "abrieras", "abriera", "abriéramos", "abrierais", "abrieran"],
                present_perfect: ["haya abierto", "hayas abierto", "haya abierto", "hayamos abierto", "hayáis abierto", "hayan abierto"]
            },
            imperative: {
                positive: ["abre", "abra", "abramos", "abrid", "abran"],
                negative: ["no abras", "no abra", "no abramos", "no abráis", "no abran"]
            }
        }
    },
    {
        infinitive: "jugar",
        translation: "to play (sports/games)",
        gerund: "jugando",
        past_participle: "jugado",
        conjugations: {
            indicative: {
                present: ["juego", "juegas", "juega", "jugamos", "jugáis", "juegan"],
                preterite: ["jugué", "jugaste", "jugó", "jugamos", "jugasteis", "jugaron"],
                imperfect: ["jugaba", "jugabas", "jugaba", "jugábamos", "jugabais", "jugaban"],
                future: ["jugaré", "jugarás", "jugará", "jugaremos", "jugaréis", "jugarán"],
                conditional: ["jugaría", "jugarías", "jugaría", "jugaríamos", "jugaríais", "jugarían"],
                present_perfect: ["he jugado", "has jugado", "ha jugado", "hemos jugado", "habéis jugado", "han jugado"],
                past_perfect: ["había jugado", "habías jugado", "había jugado", "habíamos jugado", "habíais jugado", "habían jugado"],
                future_perfect: ["habré jugado", "habrás jugado", "habrá jugado", "habremos jugado", "habréis jugado", "habrán jugado"],
                conditional_perfect: ["habría jugado", "habrías jugado", "habría jugado", "habríamos jugado", "habríais jugado", "habrían jugado"]
            },
            subjunctive: {
                present: ["juegue", "juegues", "juegue", "juguemos", "juguéis", "jueguen"],
                imperfect: ["jugara", "jugaras", "jugara", "jugáramos", "jugarais", "jugaran"],
                present_perfect: ["haya jugado", "hayas jugado", "haya jugado", "hayamos jugado", "hayáis jugado", "hayan jugado"]
            },
            imperative: {
                positive: ["juega", "juegue", "juguemos", "jugad", "jueguen"],
                negative: ["no juegues", "no juegue", "no juguemos", "no juguéis", "no jueguen"]
            }
        }
    },
    {
        infinitive: "entender",
        translation: "to understand",
        gerund: "entendiendo",
        past_participle: "entendido",
        conjugations: {
            indicative: {
                present: ["entiendo", "entiendes", "entiende", "entendemos", "entendéis", "entienden"],
                preterite: ["entendí", "entendiste", "entendió", "entendimos", "entendisteis", "entendieron"],
                imperfect: ["entendía", "entendías", "entendía", "entendíamos", "entendíais", "entendían"],
                future: ["entenderé", "entenderás", "entenderá", "entenderemos", "entenderéis", "entenderán"],
                conditional: ["entendería", "entenderías", "entendería", "entenderíamos", "entenderíais", "entenderían"],
                present_perfect: ["he entendido", "has entendido", "ha entendido", "hemos entendido", "habéis entendido", "han entendido"],
                past_perfect: ["había entendido", "habías entendido", "había entendido", "habíamos entendido", "habíais entendido", "habían entendido"],
                future_perfect: ["habré entendido", "habrás entendido", "habrá entendido", "habremos entendido", "habréis entendido", "habrán entendido"],
                conditional_perfect: ["habría entendido", "habrías entendido", "habría entendido", "habríamos entendido", "habríais entendido", "habrían entendido"]
            },
            subjunctive: {
                present: ["entienda", "entiendas", "entienda", "entendamos", "entendáis", "entiendan"],
                imperfect: ["entendiera", "entendieras", "entendiera", "entendiéramos", "entendierais", "entendieran"],
                present_perfect: ["haya entendido", "hayas entendido", "haya entendido", "hayamos entendido", "hayáis entendido", "hayan entendido"]
            },
            imperative: {
                positive: ["entiende", "entienda", "entendamos", "entended", "entiendan"],
                negative: ["no entiendas", "no entienda", "no entendamos", "no entendáis", "no entiendan"]
            }
        }
    },
    {
        infinitive: "volver",
        translation: "to return/go back",
        gerund: "volviendo",
        past_participle: "vuelto",
        conjugations: {
            indicative: {
                present: ["vuelvo", "vuelves", "vuelve", "volvemos", "volvéis", "vuelven"],
                preterite: ["volví", "volviste", "volvió", "volvimos", "volvisteis", "volvieron"],
                imperfect: ["volvía", "volvías", "volvía", "volvíamos", "volvíais", "volvían"],
                future: ["volveré", "volverás", "volverá", "volveremos", "volveréis", "volverán"],
                conditional: ["volvería", "volverías", "volvería", "volveríamos", "volveríais", "volverían"],
                present_perfect: ["he vuelto", "has vuelto", "ha vuelto", "hemos vuelto", "habéis vuelto", "han vuelto"],
                past_perfect: ["había vuelto", "habías vuelto", "había vuelto", "habíamos vuelto", "habíais vuelto", "habían vuelto"],
                future_perfect: ["habré vuelto", "habrás vuelto", "habrá vuelto", "habremos vuelto", "habréis vuelto", "habrán vuelto"],
                conditional_perfect: ["habría vuelto", "habrías vuelto", "habría vuelto", "habríamos vuelto", "habríais vuelto", "habrían vuelto"]
            },
            subjunctive: {
                present: ["vuelva", "vuelvas", "vuelva", "volvamos", "volváis", "vuelvan"],
                imperfect: ["volviera", "volvieras", "volviera", "volviéramos", "volvierais", "volvieran"],
                present_perfect: ["haya vuelto", "hayas vuelto", "haya vuelto", "hayamos vuelto", "hayáis vuelto", "hayan vuelto"]
            },
            imperative: {
                positive: ["vuelve", "vuelva", "volvamos", "volved", "vuelvan"],
                negative: ["no vuelvas", "no vuelva", "no volvamos", "no volváis", "no vuelvan"]
            }
        }
    },
    {
        infinitive: "seguir",
        translation: "to follow/continue",
        gerund: "siguiendo",
        past_participle: "seguido",
        conjugations: {
            indicative: {
                present: ["sigo", "sigues", "sigue", "seguimos", "seguís", "siguen"],
                preterite: ["seguí", "seguiste", "siguió", "seguimos", "seguisteis", "siguieron"],
                imperfect: ["seguía", "seguías", "seguía", "seguíamos", "seguíais", "seguían"],
                future: ["seguiré", "seguirás", "seguirá", "seguiremos", "seguiréis", "seguirán"],
                conditional: ["seguiría", "seguirías", "seguiría", "seguiríamos", "seguiríais", "seguirían"],
                present_perfect: ["he seguido", "has seguido", "ha seguido", "hemos seguido", "habéis seguido", "han seguido"],
                past_perfect: ["había seguido", "habías seguido", "había seguido", "habíamos seguido", "habíais seguido", "habían seguido"],
                future_perfect: ["habré seguido", "habrás seguido", "habrá seguido", "habremos seguido", "habréis seguido", "habrán seguido"],
                conditional_perfect: ["habría seguido", "habrías seguido", "habría seguido", "habríamos seguido", "habríais seguido", "habrían seguido"]
            },
            subjunctive: {
                present: ["siga", "sigas", "siga", "sigamos", "sigáis", "sigan"],
                imperfect: ["siguiera", "siguieras", "siguiera", "siguiéramos", "siguierais", "siguieran"],
                present_perfect: ["haya seguido", "hayas seguido", "haya seguido", "hayamos seguido", "hayáis seguido", "hayan seguido"]
            },
            imperative: {
                positive: ["sigue", "siga", "sigamos", "seguid", "sigan"],
                negative: ["no sigas", "no siga", "no sigamos", "no sigáis", "no sigan"]
            }
        }
    },
    {
        infinitive: "dejar",
        translation: "to leave/let/allow",
        gerund: "dejando",
        past_participle: "dejado",
        conjugations: {
            indicative: {
                present: ["dejo", "dejas", "deja", "dejamos", "dejáis", "dejan"],
                preterite: ["dejé", "dejaste", "dejó", "dejamos", "dejasteis", "dejaron"],
                imperfect: ["dejaba", "dejabas", "dejaba", "dejábamos", "dejabais", "dejaban"],
                future: ["dejaré", "dejarás", "dejará", "dejaremos", "dejaréis", "dejarán"],
                conditional: ["dejaría", "dejarías", "dejaría", "dejaríamos", "dejaríais", "dejarían"],
                present_perfect: ["he dejado", "has dejado", "ha dejado", "hemos dejado", "habéis dejado", "han dejado"],
                past_perfect: ["había dejado", "habías dejado", "había dejado", "habíamos dejado", "habíais dejado", "habían dejado"],
                future_perfect: ["habré dejado", "habrás dejado", "habrá dejado", "habremos dejado", "habréis dejado", "habrán dejado"],
                conditional_perfect: ["habría dejado", "habrías dejado", "habría dejado", "habríamos dejado", "habríais dejado", "habrían dejado"]
            },
            subjunctive: {
                present: ["deje", "dejes", "deje", "dejemos", "dejéis", "dejen"],
                imperfect: ["dejara", "dejaras", "dejara", "dejáramos", "dejarais", "dejaran"],
                present_perfect: ["haya dejado", "hayas dejado", "haya dejado", "hayamos dejado", "hayáis dejado", "hayan dejado"]
            },
            imperative: {
                positive: ["deja", "deje", "dejemos", "dejad", "dejen"],
                negative: ["no dejes", "no deje", "no dejemos", "no dejéis", "no dejen"]
            }
        }
    },
    {
        infinitive: "tomar",
        translation: "to take/drink",
        gerund: "tomando",
        past_participle: "tomado",
        conjugations: {
            indicative: {
                present: ["tomo", "tomas", "toma", "tomamos", "tomáis", "toman"],
                preterite: ["tomé", "tomaste", "tomó", "tomamos", "tomasteis", "tomaron"],
                imperfect: ["tomaba", "tomabas", "tomaba", "tomábamos", "tomabais", "tomaban"],
                future: ["tomaré", "tomarás", "tomará", "tomaremos", "tomaréis", "tomarán"],
                conditional: ["tomaría", "tomarías", "tomaría", "tomaríamos", "tomaríais", "tomarían"],
                present_perfect: ["he tomado", "has tomado", "ha tomado", "hemos tomado", "habéis tomado", "han tomado"],
                past_perfect: ["había tomado", "habías tomado", "había tomado", "habíamos tomado", "habíais tomado", "habían tomado"],
                future_perfect: ["habré tomado", "habrás tomado", "habrá tomado", "habremos tomado", "habréis tomado", "habrán tomado"],
                conditional_perfect: ["habría tomado", "habrías tomado", "habría tomado", "habríamos tomado", "habríais tomado", "habrían tomado"]
            },
            subjunctive: {
                present: ["tome", "tomes", "tome", "tomemos", "toméis", "tomen"],
                imperfect: ["tomara", "tomaras", "tomara", "tomáramos", "tomarais", "tomaran"],
                present_perfect: ["haya tomado", "hayas tomado", "haya tomado", "hayamos tomado", "hayáis tomado", "hayan tomado"]
            },
            imperative: {
                positive: ["toma", "tome", "tomemos", "tomad", "tomen"],
                negative: ["no tomes", "no tome", "no tomemos", "no toméis", "no tomen"]
            }
        }
    },
    {
        infinitive: "esperar",
        translation: "to wait/hope",
        gerund: "esperando",
        past_participle: "esperado",
        conjugations: {
            indicative: {
                present: ["espero", "esperas", "espera", "esperamos", "esperáis", "esperan"],
                preterite: ["esperé", "esperaste", "esperó", "esperamos", "esperasteis", "esperaron"],
                imperfect: ["esperaba", "esperabas", "esperaba", "esperábamos", "esperabais", "esperaban"],
                future: ["esperaré", "esperarás", "esperará", "esperaremos", "esperaréis", "esperarán"],
                conditional: ["esperaría", "esperarías", "esperaría", "esperaríamos", "esperaríais", "esperarían"],
                present_perfect: ["he esperado", "has esperado", "ha esperado", "hemos esperado", "habéis esperado", "han esperado"],
                past_perfect: ["había esperado", "habías esperado", "había esperado", "habíamos esperado", "habíais esperado", "habían esperado"],
                future_perfect: ["habré esperado", "habrás esperado", "habrá esperado", "habremos esperado", "habréis esperado", "habrán esperado"],
                conditional_perfect: ["habría esperado", "habrías esperado", "habría esperado", "habríamos esperado", "habríais esperado", "habrían esperado"]
            },
            subjunctive: {
                present: ["espere", "esperes", "espere", "esperemos", "esperéis", "esperen"],
                imperfect: ["esperara", "esperaras", "esperara", "esperáramos", "esperarais", "esperaran"],
                present_perfect: ["haya esperado", "hayas esperado", "haya esperado", "hayamos esperado", "hayáis esperado", "hayan esperado"]
            },
            imperative: {
                positive: ["espera", "espere", "esperemos", "esperad", "esperen"],
                negative: ["no esperes", "no espere", "no esperemos", "no esperéis", "no esperen"]
            }
        }
    },
    {
        infinitive: "pasar",
        translation: "to pass/happen/spend time",
        gerund: "pasando",
        past_participle: "pasado",
        conjugations: {
            indicative: {
                present: ["paso", "pasas", "pasa", "pasamos", "pasáis", "pasan"],
                preterite: ["pasé", "pasaste", "pasó", "pasamos", "pasasteis", "pasaron"],
                imperfect: ["pasaba", "pasabas", "pasaba", "pasábamos", "pasabais", "pasaban"],
                future: ["pasaré", "pasarás", "pasará", "pasaremos", "pasaréis", "pasarán"],
                conditional: ["pasaría", "pasarías", "pasaría", "pasaríamos", "pasaríais", "pasarían"],
                present_perfect: ["he pasado", "has pasado", "ha pasado", "hemos pasado", "habéis pasado", "han pasado"],
                past_perfect: ["había pasado", "habías pasado", "había pasado", "habíamos pasado", "habíais pasado", "habían pasado"],
                future_perfect: ["habré pasado", "habrás pasado", "habrá pasado", "habremos pasado", "habréis pasado", "habrán pasado"],
                conditional_perfect: ["habría pasado", "habrías pasado", "habría pasado", "habríamos pasado", "habríais pasado", "habrían pasado"]
            },
            subjunctive: {
                present: ["pase", "pases", "pase", "pasemos", "paséis", "pasen"],
                imperfect: ["pasara", "pasaras", "pasara", "pasáramos", "pasarais", "pasaran"],
                present_perfect: ["haya pasado", "hayas pasado", "haya pasado", "hayamos pasado", "hayáis pasado", "hayan pasado"]
            },
            imperative: {
                positive: ["pasa", "pase", "pasemos", "pasad", "pasen"],
                negative: ["no pases", "no pase", "no pasemos", "no paséis", "no pasen"]
            }
        }
    },
    {
        infinitive: "llamar",
        translation: "to call",
        gerund: "llamando",
        past_participle: "llamado",
        conjugations: {
            indicative: {
                present: ["llamo", "llamas", "llama", "llamamos", "llamáis", "llaman"],
                preterite: ["llamé", "llamaste", "llamó", "llamamos", "llamasteis", "llamaron"],
                imperfect: ["llamaba", "llamabas", "llamaba", "llamábamos", "llamabais", "llamaban"],
                future: ["llamaré", "llamarás", "llamará", "llamaremos", "llamaréis", "llamarán"],
                conditional: ["llamaría", "llamarías", "llamaría", "llamaríamos", "llamaríais", "llamarían"],
                present_perfect: ["he llamado", "has llamado", "ha llamado", "hemos llamado", "habéis llamado", "han llamado"],
                past_perfect: ["había llamado", "habías llamado", "había llamado", "habíamos llamado", "habíais llamado", "habían llamado"],
                future_perfect: ["habré llamado", "habrás llamado", "habrá llamado", "habremos llamado", "habréis llamado", "habrán llamado"],
                conditional_perfect: ["habría llamado", "habrías llamado", "habría llamado", "habríamos llamado", "habríais llamado", "habrían llamado"]
            },
            subjunctive: {
                present: ["llame", "llames", "llame", "llamemos", "llaméis", "llamen"],
                imperfect: ["llamara", "llamaras", "llamara", "llamáramos", "llamarais", "llamaran"],
                present_perfect: ["haya llamado", "hayas llamado", "haya llamado", "hayamos llamado", "hayáis llamado", "hayan llamado"]
            },
            imperative: {
                positive: ["llama", "llame", "llamemos", "llamad", "llamen"],
                negative: ["no llames", "no llame", "no llamemos", "no llaméis", "no llamen"]
            }
        }
    },
    {
        infinitive: "llegar",
        translation: "to arrive",
        gerund: "llegando",
        past_participle: "llegado",
        conjugations: {
            indicative: {
                present: ["llego", "llegas", "llega", "llegamos", "llegáis", "llegan"],
                preterite: ["llegué", "llegaste", "llegó", "llegamos", "llegasteis", "llegaron"],
                imperfect: ["llegaba", "llegabas", "llegaba", "llegábamos", "llegabais", "llegaban"],
                future: ["llegaré", "llegarás", "llegará", "llegaremos", "llegaréis", "llegarán"],
                conditional: ["llegaría", "llegarías", "llegaría", "llegaríamos", "llegaríais", "llegarían"],
                present_perfect: ["he llegado", "has llegado", "ha llegado", "hemos llegado", "habéis llegado", "han llegado"],
                past_perfect: ["había llegado", "habías llegado", "había llegado", "habíamos llegado", "habíais llegado", "habían llegado"],
                future_perfect: ["habré llegado", "habrás llegado", "habrá llegado", "habremos llegado", "habréis llegado", "habrán llegado"],
                conditional_perfect: ["habría llegado", "habrías llegado", "habría llegado", "habríamos llegado", "habríais llegado", "habrían llegado"]
            },
            subjunctive: {
                present: ["llegue", "llegues", "llegue", "lleguemos", "lleguéis", "lleguen"],
                imperfect: ["llegara", "llegaras", "llegara", "llegáramos", "llegarais", "llegaran"],
                present_perfect: ["haya llegado", "hayas llegado", "haya llegado", "hayamos llegado", "hayáis llegado", "hayan llegado"]
            },
            imperative: {
                positive: ["llega", "llegue", "lleguemos", "llegad", "lleguen"],
                negative: ["no llegues", "no llegue", "no lleguemos", "no lleguéis", "no lleguen"]
            }
        }
    },
    {
        infinitive: "empezar",
        translation: "to begin/start",
        gerund: "empezando",
        past_participle: "empezado",
        conjugations: {
            indicative: {
                present: ["empiezo", "empiezas", "empieza", "empezamos", "empezáis", "empiezan"],
                preterite: ["empecé", "empezaste", "empezó", "empezamos", "empezasteis", "empezaron"],
                imperfect: ["empezaba", "empezabas", "empezaba", "empezábamos", "empezabais", "empezaban"],
                future: ["empezaré", "empezarás", "empezará", "empezaremos", "empezaréis", "empezarán"],
                conditional: ["empezaría", "empezarías", "empezaría", "empezaríamos", "empezaríais", "empezarían"],
                present_perfect: ["he empezado", "has empezado", "ha empezado", "hemos empezado", "habéis empezado", "han empezado"],
                past_perfect: ["había empezado", "habías empezado", "había empezado", "habíamos empezado", "habíais empezado", "habían empezado"],
                future_perfect: ["habré empezado", "habrás empezado", "habrá empezado", "habremos empezado", "habréis empezado", "habrán empezado"],
                conditional_perfect: ["habría empezado", "habrías empezado", "habría empezado", "habríamos empezado", "habríais empezado", "habrían empezado"]
            },
            subjunctive: {
                present: ["empiece", "empieces", "empiece", "empecemos", "empecéis", "empiecen"],
                imperfect: ["empezara", "empezaras", "empezara", "empezáramos", "empezarais", "empezaran"],
                present_perfect: ["haya empezado", "hayas empezado", "haya empezado", "hayamos empezado", "hayáis empezado", "hayan empezado"]
            },
            imperative: {
                positive: ["empieza", "empiece", "empecemos", "empezad", "empiecen"],
                negative: ["no empieces", "no empiece", "no empecemos", "no empecéis", "no empiecen"]
            }
        }
    },
    {
        infinitive: "buscar",
        translation: "to look for/search",
        gerund: "buscando",
        past_participle: "buscado",
        conjugations: {
            indicative: {
                present: ["busco", "buscas", "busca", "buscamos", "buscáis", "buscan"],
                preterite: ["busqué", "buscaste", "buscó", "buscamos", "buscasteis", "buscaron"],
                imperfect: ["buscaba", "buscabas", "buscaba", "buscábamos", "buscabais", "buscaban"],
                future: ["buscaré", "buscarás", "buscará", "buscaremos", "buscaréis", "buscarán"],
                conditional: ["buscaría", "buscarías", "buscaría", "buscaríamos", "buscaríais", "buscarían"],
                present_perfect: ["he buscado", "has buscado", "ha buscado", "hemos buscado", "habéis buscado", "han buscado"],
                past_perfect: ["había buscado", "habías buscado", "había buscado", "habíamos buscado", "habíais buscado", "habían buscado"],
                future_perfect: ["habré buscado", "habrás buscado", "habrá buscado", "habremos buscado", "habréis buscado", "habrán buscado"],
                conditional_perfect: ["habría buscado", "habrías buscado", "habría buscado", "habríamos buscado", "habríais buscado", "habrían buscado"]
            },
            subjunctive: {
                present: ["busque", "busques", "busque", "busquemos", "busquéis", "busquen"],
                imperfect: ["buscara", "buscaras", "buscara", "buscáramos", "buscarais", "buscaran"],
                present_perfect: ["haya buscado", "hayas buscado", "haya buscado", "hayamos buscado", "hayáis buscado", "hayan buscado"]
            },
            imperative: {
                positive: ["busca", "busque", "busquemos", "buscad", "busquen"],
                negative: ["no busques", "no busque", "no busquemos", "no busquéis", "no busquen"]
            }
        }
    },
    {
        infinitive: "creer",
        translation: "to believe",
        gerund: "creyendo",
        past_participle: "creído",
        conjugations: {
            indicative: {
                present: ["creo", "crees", "cree", "creemos", "creéis", "creen"],
                preterite: ["creí", "creíste", "creyó", "creímos", "creísteis", "creyeron"],
                imperfect: ["creía", "creías", "creía", "creíamos", "creíais", "creían"],
                future: ["creeré", "creerás", "creerá", "creeremos", "creeréis", "creerán"],
                conditional: ["creería", "creerías", "creería", "creeríamos", "creeríais", "creerían"],
                present_perfect: ["he creído", "has creído", "ha creído", "hemos creído", "habéis creído", "han creído"],
                past_perfect: ["había creído", "habías creído", "había creído", "habíamos creído", "habíais creído", "habían creído"],
                future_perfect: ["habré creído", "habrás creído", "habrá creído", "habremos creído", "habréis creído", "habrán creído"],
                conditional_perfect: ["habría creído", "habrías creído", "habría creído", "habríamos creído", "habríais creído", "habrían creído"]
            },
            subjunctive: {
                present: ["crea", "creas", "crea", "creamos", "creáis", "crean"],
                imperfect: ["creyera", "creyeras", "creyera", "creyéramos", "creyerais", "creyeran"],
                present_perfect: ["haya creído", "hayas creído", "haya creído", "hayamos creído", "hayáis creído", "hayan creído"]
            },
            imperative: {
                positive: ["cree", "crea", "creamos", "creed", "crean"],
                negative: ["no creas", "no crea", "no creamos", "no creáis", "no crean"]
            }
        }
    },
    {
        infinitive: "comprar",
        translation: "to buy",
        gerund: "comprando",
        past_participle: "comprado",
        conjugations: {
            indicative: {
                present: ["compro", "compras", "compra", "compramos", "compráis", "compran"],
                preterite: ["compré", "compraste", "compró", "compramos", "comprasteis", "compraron"],
                imperfect: ["compraba", "comprabas", "compraba", "comprábamos", "comprabais", "compraban"],
                future: ["compraré", "comprarás", "comprará", "compraremos", "compraréis", "comprarán"],
                conditional: ["compraría", "comprarías", "compraría", "compraríamos", "compraríais", "comprarían"],
                present_perfect: ["he comprado", "has comprado", "ha comprado", "hemos comprado", "habéis comprado", "han comprado"],
                past_perfect: ["había comprado", "habías comprado", "había comprado", "habíamos comprado", "habíais comprado", "habían comprado"],
                future_perfect: ["habré comprado", "habrás comprado", "habrá comprado", "habremos comprado", "habréis comprado", "habrán comprado"],
                conditional_perfect: ["habría comprado", "habrías comprado", "habría comprado", "habríamos comprado", "habríais comprado", "habrían comprado"]
            },
            subjunctive: {
                present: ["compre", "compres", "compre", "compremos", "compréis", "compren"],
                imperfect: ["comprara", "compraras", "comprara", "compráramos", "comprarais", "compraran"],
                present_perfect: ["haya comprado", "hayas comprado", "haya comprado", "hayamos comprado", "hayáis comprado", "hayan comprado"]
            },
            imperative: {
                positive: ["compra", "compre", "compremos", "comprad", "compren"],
                negative: ["no compres", "no compre", "no compremos", "no compréis", "no compren"]
            }
        }
    }
];

const PRONOUNS = {
    standard: ["Yo", "Tú", "Él/Ella/Ud.", "Nosotros", "Vosotros", "Ellos/Ellas/Uds."],
    imperative: ["Tú", "Ud.", "Nosotros", "Vosotros", "Uds."],
    nonFinite: ["-"]
};