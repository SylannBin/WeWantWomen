/**
 * Fill the survey-container with the proper form
 * based on getFormFunction parameter
 *
 * @param {function} getFormFunction
 */
function generateForm(getFormFunction)
{
  // Remove everything from the container before reloading it
  $("#main-container").empty();

  // build the survey container
  $("#main-container").append('<div id="survey-container" class="col-lg-offset-3 col-lg-6"></div>');

  // set proper model according to current page
  var newModel = getFormFunction();

  // Configure the survey
  survey = new Survey.Model(newModel);
  survey.locale = "fr";
  survey.onComplete.add(sender => surveyData = sender.data );

  // Init Form container element
  $("#survey-container").Survey({
    model: survey,
    onComplete: sendForm
  });
}

// JSON builder Functions

/**
 * Returns the json object that corresponds to the form
 * "Généralités & Connaissances informatiques"
 */
function getITCommonsJson() {
    return {
        title: "Généralités & Connaissances Informatiques",
        name: "it_commons",
        pages: [
            {
                elements: [
                    {
                        type: "checkbox",
                        choices: [
                            {
                                value: "1",
                                text: "Essentielle"
                            },
                            {
                                value: "2",
                                text: "Optionnelle"
                            },
                            {
                                value: "3",
                                text: "Difficile"
                            },
                            {
                                value: "4",
                                text: "Inutile"
                            },
                            {
                                value: "5",
                                text: "Passionnante"
                            },
                            {
                                value: "6",
                                text: "Ne se prononce pas"
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question1",
                        title: "Quelle est votre vision de l'informatique de nos jours ?"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Un logiciel gratuit & modifiable"
                            },
                            {
                                value: "2",
                                text: "Un logiciel gratuit & non modifiable"
                            },
                            {
                                value: "3",
                                text: "Un logiciel payant & modifiable"
                            },
                            {
                                value: "4",
                                text: "Un logiciel payant & non modifiable"
                            },
                            {
                                value: "5",
                                text: "Ne sait pas"
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question2",
                        title: "Qu’est-ce qu’un logiciel libre ?"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Oui"
                            },
                            {
                                value: "2",
                                text: "Non"
                            },
                            {
                                value: "3",
                                text: "Ne se prononce pas"
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question3",
                        title: "Connaissez-vous des personnes travaillant dans le monde Informatique ?"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Des femmes"
                            },
                            {
                                value: "2",
                                text: "Des hommes"
                            },
                            {
                                value: "3",
                                text: "Les deux"
                            },
                            {
                                value: "4",
                                text: "Ne se prononce pas"
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question4",
                        title: "Ces personnes sont plutôt ?",
                        visibleIf: " {question3} = '1'"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Un informaticien"
                            },
                            {
                                value: "2",
                                text: "Un hacker"
                            },
                            {
                                value: "3",
                                text: "Un fan de jeux vidéo "
                            },
                            {
                                value: "4",
                                text: "Une personne passionnée d'informatique, de cinéma, de technologies ..."
                            },
                            {
                                value: "5",
                                text: "Une personne refermée dans son monde"
                            },
                            {
                                value: "6",
                                text: "Ne se prononce pas"
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question5",
                        title: "D'après vous, qu'est-ce qu'un(e) geek ?"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "World Wireless Wifi "
                            },
                            {
                                value: "2",
                                text: "World Wide Web"
                            },
                            {
                                value: "3",
                                text: "Wireless Web Widget"
                            },
                            {
                                value: "4",
                                text: "Ne sait pas"
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question6",
                        title: "Que signifie les 3 lettres WWW ?"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Oui"
                            },
                            {
                                value: "2",
                                text: "Non"
                            }
                        ],
                        isRequired: true,
                        name: "question7",
                        title: "Avez-vous déjà monté ou démonté un ordinateur ?"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Des femmes"
                            },
                            {
                                value: "2",
                                text: "Des hommes"
                            },
                            {
                                value: "3",
                                text: "Autant de femmes que d'hommes"
                            },
                            {
                                value: "4",
                                text: "Ne se prononce pas"
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question8",
                        title: "Diriez-vous que le monde Informatique est plutôt fréquenté par ?"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Un type de jeu à la mode"
                            },
                            {
                                value: "2",
                                text: "Un logiciel qui crypte vos informations jusqu'à ce que vous payiez une rançon"
                            },
                            {
                                value: "3",
                                text: "Une alerte enlèvement diffusée sur internet et par mail"
                            },
                            {
                                value: "4",
                                text: "Un moyen de communication entre les forces de police et les kidnappeurs"
                            },
                            {
                                value: "5",
                                text: "Ne sait pas"
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question9",
                        title: "Qu'est-ce qu'un RansomWare ?"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Des Pokemon de 6ème génération"
                            },
                            {
                                value: "2",
                                text: "Des langages de programmation informatique"
                            },
                            {
                                value: "3",
                                text: "Des logiciels de Windows"
                            },
                            {
                                value: "4",
                                text: "Des langages de cryptologie utilisés en sécurité informatique"
                            },
                            {
                                value: "5",
                                text: "Ne sait pas"
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question10",
                        title: "Que sont HTML, JAVA, PYTHON, PHP ou C# ?"
                    }
                ],
                name: "it_commons"
            }
        ]
    };
} 

/**
 * Returns the json object that corresponds to the form
 * "Employabilité & Rémunération"
 */
function getEmploymentJson()
{
  return {
    title: "Employabilité & Rémunération",
    name: "employment",
    pages: [
        {
            elements: [
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "+ de 50 000"
                        },
                        {
                            value: "2",
                            text: "+ de 12 000"
                        },
                        {
                            value: "3",
                            text: "+ de 190 000"
                        },
                        {
                            value: "4",
                            text: "+ de 5000"
                        },
                        {
                            value: "5",
                            text: "Ne sait pas"
                        }
                    ],
                    choicesOrder: "random",
                    isRequired: true,
                    name: "question1",
                    title: "D'ici à 2022, combien de postes d'informaticiens seront créés chaque année selon vous ?"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "Pas qualifiés (Ouvriers) - Moyennement qualifiés (Techniciens) - Très qualifiés (Ingénieurs)"
                        },
                        {
                            value: "2",
                            text: "Très qualifiés (Ingénieurs) - Moyennement qualifiés (Techniciens) - Pas qualifiés (Ouvriers)"
                        },
                        {
                            value: "3",
                            text: "Moyennement qualifiés (Techniciens) - Pas qualifiés (Ouvriers) - Très qualifiés (Ingénieurs)"
                        },
                        {
                            value: "4",
                            text: "Ne se prononce pas"
                        }
                    ],
                    isRequired: true,
                    name: "question2",
                    title: "A votre avis, quelle est la répartition des emplois dans l'informatique ? (de la plus grande part à la plus petite) ?"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "25%"
                        },
                        {
                            value: "2",
                            text: "17%"
                        },
                        {
                            value: "3",
                            text: "8%"
                        },
                        {
                            value: "4",
                            text: "33%"
                        },
                        {
                            value: "5",
                            text: "Ne sait pas"
                        }
                    ],
                    choicesOrder: "random",
                    isRequired: true,
                    name: "question3",
                    title: "Comment imaginez-vous la proportion de femmes dans les postes de cadres informatique ?"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "Augmentation"
                        },
                        {
                            value: "2",
                            text: "Stagnation"
                        },
                        {
                            value: "3",
                            text: "Diminution"
                        },
                        {
                            value: "4",
                            text: "Ne sait pas"
                        }
                    ],
                    choicesOrder: "random",
                    isRequired: true,
                    name: "question4",
                    title: "Dans quel sens pensez-vous que ce chiffre évolue ?"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "Moins de 20 000€"
                        },
                        {
                            value: "2",
                            text: "Entre 20 000€ et 30 000€"
                        },
                        {
                            value: "3",
                            text: "Entre 30 000€ et 40 000€"
                        },
                        {
                            value: "4",
                            text: "Plus de 40 000€"
                        },
                        {
                            value: "5",
                            text: "Ne sait pas"
                        }
                    ],
                    isRequired: true,
                    name: "question5",
                    title: "A votre avis, quel est le niveau de rémunération d’un bac +5 école d’ingénieur à la sortie de l’école ? "
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "Plus grand"
                        },
                        {
                            value: "2",
                            text: "Identique"
                        },
                        {
                            value: "3",
                            text: "Plus faible"
                        },
                        {
                            value: "4",
                            text: "Ne se prononce pas"
                        }
                    ],
                    isRequired: true,
                    name: "question6",
                    title: "En comparaison avec d'autres domaines, imaginez-vous que l'écart de salaire Hommes/Femmes dans le monde Informatique est ?"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "Oui"
                        },
                        {
                            value: "2",
                            text: "Non"
                        },
                        {
                            value: "3",
                            text: "Ne se prononce pas"
                        }
                    ],
                    isRequired: true,
                    name: "question7",
                    title: "Pour un poste de cadre dans le milieu informatique et à compétences équivalentes, pensez-vous qu’une femme a autant de chances d’être engagé  qu’un homme ?"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "Oui"
                        },
                        {
                            value: "2",
                            text: "Non"
                        },
                        {
                            value: "3",
                            text: "Ne se prononce pas"
                        }
                    ],
                    isRequired: true,
                    name: "question8",
                    title: "Selon vous pour des raisons liées au domaine informatique ?",
                    visible: false,
                    visibleIf: " {question6} = '2'"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "Médical"
                        },
                        {
                            value: "2",
                            text: "Informatique"
                        },
                        {
                            value: "3",
                            text: "Industriel"
                        },
                        {
                            value: "4",
                            text: "Commercial"
                        },
                        {
                            value: "5",
                            text: "Autre"
                        },
                        {
                            value: "6",
                            text: "Ne se prononce pas"
                        }
                    ],
                    isRequired: true,
                    name: "question9",
                    title: "A votre avis, quel est le secteur qui offre a ce jour le plus d’employabilité ?"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "Vrai"
                        },
                        {
                            value: "2",
                            text: "Faux"
                        },
                        {
                            value: "3",
                            text: "Ne sait pas"
                        }
                    ],
                    isRequired: true,
                    name: "question10",
                    title: "Chaque année, de nombreuses offres d'emplois informatiques ne sont pas comblées par manque de candidats ?"
                }
            ],
            name: "employment"
        }
    ]
  };
}

/**
 * Returns the json object that corresponds to the form
 * "Formation & Orientation"
 */
function getFormationJson()
{
  return {
    title: "Formation et orientation",
    name: "formation",
    pages: [
        {
            elements: [
                {
                    type: "checkbox",
                    choices: [
                        {
                            value: "1",
                            text: "Rigueur"
                        },
                        {
                            value: "2",
                            text: "Capacité d'analyse"
                        },
                        {
                            value: "3",
                            text: "Logique"
                        },
                        {
                            value: "4",
                            text: "Introvertision"
                        },
                        {
                            value: "5",
                            text: "Curiosité"
                        },
                        {
                            value: "6",
                            text: "Bonne organisation"
                        },
                        {
                            value: "7",
                            text: "Perseverance"
                        },
                        {
                            value: "8",
                            text: "Réactivité"
                        },
                        {
                            value: "9",
                            text: "Etre Anglophone"
                        },
                        {
                            value: "10",
                            text: "Individualiste"
                        },
                        {
                            value: "11",
                            text: "Créativité"
                        },
                        {
                            value: "12",
                            text: "Autre"
                        }
                    ],
                    colCount: 3,
                    isRequired: true,
                    name: "question1",
                    title: "Selon vous, quelles qualités sont utiles à l’informaticien(ne) ?"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "Oui"
                        },
                        {
                            value: "2",
                            text: "Non"
                        },
                        {
                            value: "3",
                            text: "Ne se prononce pas"
                        }
                    ],
                    isRequired: true,
                    name: "question2",
                    title: "Réfléchissez-vous actuellement à votre orientation d'études ? (Poursuite ou reprise)"
                },
                {
                    type: "checkbox",
                    choices: [
                        {
                            value: "1",
                            text: "Santé / Médical"
                        },
                        {
                            value: "2",
                            text: "Sciences"
                        },
                        {
                            value: "3",
                            text: "Commerce & Management"
                        },
                        {
                            value: "4",
                            text: "Informatique"
                        },
                        {
                            value: "6",
                            text: "Droit / Justice"
                        },
                        {
                            value: "5",
                            text: "Autre"
                        },
                        {
                            value: "7",
                            text: "Ne se prononce pas"
                        }
                    ],
                    colCount: 2,
                    isRequired: true,
                    name: "question3",
                    title: "Quels sont les domaines d'études qui vous intéressent ?",
                    visible: false,
                    visibleIf: "{question2} = '1'"
                },
                {
                    type: "checkbox",
                    choices: [
                        {
                            value: "1",
                            text: "Questionnement sur formation"
                        },
                        {
                            value: "2",
                            text: "Questionnement sur employabilité"
                        },
                        {
                            value: "3",
                            text: "Questionnement sur rémunération"
                        },
                        {
                            value: "4",
                            text: "Hésitation avec autre domaines"
                        },
                        {
                            value: "5",
                            text: "Monde trop masculin"
                        },
                        {
                            value: "6",
                            text: "Pas les capacités"
                        },
                        {
                            value: "7",
                            text: "Autre"
                        },
                        {
                            value: "8",
                            text: "Ne se prononce pas"
                        }
                    ],
                    colCount: 2,
                    name: "question4",
                    title: "Si votre choix n'est pas définitif, pour quelles raisons hésitez-vous encore ?",
                    visible: false,
                    visibleIf: " {question3} = '4'"
                },
                {
                    type: "comment",
                    name: "question5",
                    rows: "2",
                    title: "Précisez si vous le souhaitez",
                    visible: false,
                    visibleIf: " {question4} = '7'"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "Oui"
                        },
                        {
                            value: "2",
                            text: "Non"
                        },
                        {
                            value: "3",
                            text: "Ne se souvient pas"
                        }
                    ],
                    isRequired: true,
                    name: "question6",
                    title: "Les filières informatiques vous ont-elles été présentées et proposées lors de votre parcours de formation ? "
                },
                {
                    type: "checkbox",
                    choices: [
                        {
                            value: "1",
                            text: "Manque d'avenir de la filière"
                        },
                        {
                            value: "2",
                            text: "Monde masculin"
                        },
                        {
                            value: "3",
                            text: "Domaine trop compliqué"
                        },
                        {
                            value: "4",
                            text: "Orientation qui ne vous convient pas"
                        },
                        {
                            value: "5",
                            text: "Autre"
                        },
                        {
                            value: "6",
                            text: "Ne se souvient pas"
                        }
                    ],
                    colCount: 2,
                    isRequired: true,
                    name: "question7",
                    title: "Savez-vous pour quelles raisons ?",
                    visible: false,
                    visibleIf: " {question6} = '2'"
                },
                {
                    type: "comment",
                    name: "question8",
                    rows: "2",
                    title: "Précisez si vous le souhaitez",
                    visible: false,
                    visibleIf: " {question7} = '5'"
                },
                {
                    type: "checkbox",
                    choices: [
                        {
                            value: "1",
                            text: "Employabilité"
                        },
                        {
                            value: "2",
                            text: "Rémunération"
                        },
                        {
                            value: "3",
                            text: "Evolution"
                        },
                        {
                            value: "4",
                            text: "Autonomie"
                        },
                        {
                            value: "5",
                            text: "Passion"
                        },
                        {
                            value: "6",
                            text: "Avenir"
                        },
                        {
                            value: "7",
                            text: "Autre"
                        },
                        {
                            value: "8",
                            text: "Ne se souvient pas"
                        }
                    ],
                    colCount: 2,
                    isRequired: true,
                    name: "question9",
                    title: "Quels arguments et bénéfices à propos de ces filières ont été mis en avant lorsqu'on vous les as présentés ?",
                    visible: false,
                    visibleIf: " {question6} = '1'"
                },
                {
                    type: "comment",
                    name: "question10",
                    rows: "2",
                    title: "Précisez si vous le souhaitez",
                    visible: false,
                    visibleIf: " {question9} = '7'"
                },
                {
                    type: "checkbox",
                    choices: [
                        {
                            value: "1",
                            text: "Mathématiques"
                        },
                        {
                            value: "2",
                            text: "Logique"
                        },
                        {
                            value: "3",
                            text: "Francais"
                        },
                        {
                            value: "4",
                            text: "Droit"
                        },
                        {
                            value: "5",
                            text: "Anglais"
                        },
                        {
                            value: "6",
                            text: "Economie"
                        },
                        {
                            value: "7",
                            text: "Curiosité"
                        },
                        {
                            value: "8",
                            text: "Passion"
                        },
                        {
                            value: "9",
                            text: "Autre"
                        },
                        {
                            value: "10",
                            text: "Ne sait pas"
                        }
                    ],
                    colCount: 2,
                    isRequired: true,
                    name: "question11",
                    title: "A votre avis, quelles sont les disciplines ou compétences qui vous semblent indispensables pour réussir en informatique ?"
                },
                {
                    type: "comment",
                    name: "question12",
                    rows: "2",
                    title: "Précisez si vous le souhaitez",
                    visible: false,
                    visibleIf: "{question11} = '9'"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "Oui"
                        },
                        {
                            value: "2",
                            text: "Non"
                        },
                        {
                            value: "3",
                            text: "Ne se prononce pas"
                        }
                    ],
                    isRequired: true,
                    name: "question13",
                    title: "Avez-vous l'impression que les études et les métiers de l'informatique ont une bonne 'côte' aujourd'hui ?"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "De manière positive"
                        },
                        {
                            value: "2",
                            text: "Pas d'évolution particulière"
                        },
                        {
                            value: "3",
                            text: "De manière négative"
                        },
                        {
                            value: "4",
                            text: "Ne se prononce pas"
                        }
                    ],
                    isRequired: true,
                    name: "question14",
                    title: "Dans quel sens diriez-vous que cette image a évoluée ?"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "Remplies d'hommes"
                        },
                        {
                            value: "2",
                            text: "Avec quelques femmes"
                        },
                        {
                            value: "3",
                            text: "Parité respectée ou presque"
                        },
                        {
                            value: "4",
                            text: "Ne sait pas"
                        }
                    ],
                    isRequired: true,
                    name: "question15",
                    title: "Comment imaginez-vous la répartition dans les classes d'écoles informatiques ?"
                },
                {
                    type: "radiogroup",
                    choices: [
                        {
                            value: "1",
                            text: "Oui"
                        },
                        {
                            value: "2",
                            text: "Non"
                        },
                        {
                            value: "3",
                            text: "Ne se prononce pas"
                        }
                    ],
                    isRequired: true,
                    name: "question16",
                    title: "Verriez-vous d'un bon œil que l'on trouve autant de femmes que d'hommes dans le domaine Informatique (études et entreprise) ?"
                },
                {
                    type: "rating",
                    isRequired: true,
                    maxRateDescription: "Bonne",
                    minRateDescription: "Mauvaise",
                    name: "question17",
                    rateValues: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10"
                    ],
                    title: "Si à l'avenir vous aviez ou connaissiez des jeunes femmes qui veulent se lancer dans des études en informatique, quelle serait votre réaction ? "
                }
            ],
            name: "formation"
        }
    ]
  };
}

/**
 * Returns the json object that corresponds to the form
 * "Les Femmes & l'Informatique"
 */
function getWomenJson() {
    return {
        title: "Les Femmes & l'Informatique",
        name: "women",
        pages: [
            {
                elements: [
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Oui"
                            },
                            {
                                value: "2",
                                text: "Non"
                            },
                            {
                                value: "3",
                                text: "Ne se prononce pas"
                            }
                        ],
                        isRequired: true,
                        name: "question1",
                        title: "Pensez-vous que les femmes ont autant leur place que les hommes dans les métiers de l'informatique"
                    },
                    {
                        type: "comment",
                        name: "question2",
                        rows: "2",
                        title: "Précisez les raisons si vous le souhaitez",
                        visible: false,
                        visibleIf: "{question1} = '2'"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "~ 15%"
                            },
                            {
                                value: "2",
                                text: "~ 20%"
                            },
                            {
                                value: "3",
                                text: "~ 25%"
                            },
                            {
                                value: "4",
                                text: "~ 30%"
                            },
                            {
                                value: "5",
                                text: "Ne sait pas"
                            }
                        ],
                        isRequired: true,
                        name: "question3",
                        title: "Quelle est selon vous la proportion de femmes qui travaillent dans l'informatique ?"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Oui"
                            },
                            {
                                value: "2",
                                text: "Non"
                            }
                        ],
                        isRequired: true,
                        name: "question4",
                        title: "Connaissez-vous une femme 'célèbre' de par ses activités dans le domaine informatique ?"
                    },
                    {
                        type: "comment",
                        name: "question5",
                        rows: "2",
                        title: "Citez-en une si vous le souhaitez",
                        visible: false,
                        visibleIf: "{question4} = '1'"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Oui"
                            },
                            {
                                value: "2",
                                text: "Non"
                            }
                        ],
                        isRequired: true,
                        name: "question6",
                        title: "Connaissez-vous un homme 'célèbre' de par ses activités dans le domaine informatique ?"
                    },
                    {
                        type: "comment",
                        name: "question7",
                        rows: "2",
                        title: "Citez-en un si vous le souhaitez",
                        visible: false,
                        visibleIf: "{question6} = '1'"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Plus performante"
                            },
                            {
                                value: "2",
                                text: "Aussi performante"
                            },
                            {
                                value: "3",
                                text: "Moins performante"
                            },
                            {
                                value: "4",
                                text: "Ne se prononce pas"
                            }
                        ],
                        isRequired: true,
                        name: "question8",
                        title: "A votre avis, une équipe informatique mixte serait-elle plus performante qu'une équipe unisexe ?"
                    },
                    {
                        type: "checkbox",
                        choices: [
                            {
                                value: "1",
                                text: "Infrastructure Système & Réseau"
                            },
                            {
                                value: "2",
                                text: "Développement "
                            },
                            {
                                value: "3",
                                text: "Coordination & Gestion projet"
                            },
                            {
                                value: "4",
                                text: "Management équipe"
                            },
                            {
                                value: "5",
                                text: "Administration Base de données"
                            },
                            {
                                value: "6",
                                text: "Expérience & Interface Utilisateur (UX/UI)"
                            },
                            {
                                value: "7",
                                text: "Autre"
                            },
                            {
                                value: "8",
                                text: "Ne se prononce pas"
                            }
                        ],
                        colCount: 2,
                        isRequired: true,
                        name: "question9",
                        title: "Selon vous, quels sont les domaines informatique préférés des femmes ?"
                    },
                    {
                        type: "comment",
                        name: "question10",
                        rows: "2",
                        title: "Précisez si vous le souhaitez",
                        visible: false,
                        visibleIf: "{question9} = '7'"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Oui"
                            },
                            {
                                value: "2",
                                text: "Non"
                            },
                            {
                                value: "3",
                                text: "Ne se prononce pas"
                            }
                        ],
                        isRequired: true,
                        name: "question11",
                        title: "Imaginez-vous un obstacle particulier qui empêcherait les femmes de travailler dans les métiers de l'informatique ?"
                    },
                    {
                        type: "comment",
                        name: "question14",
                        rows: "2",
                        title: "Précisez si vous le souhaitez",
                        visible: false,
                        visibleIf: "{question11} = '1'"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Oui"
                            },
                            {
                                value: "2",
                                text: "Non"
                            },
                            {
                                value: "3",
                                text: "Ne se prononce pas"
                            }
                        ],
                        isRequired: true,
                        name: "question13",
                        title: "Au contraire, avez-vous en tête une caractéristique, une qualité, ou une mentalité particulière qui aideraient les femmes à s'intégrer dans les métiers de l'informatique ?"
                    },
                    {
                        type: "comment",
                        name: "question12",
                        rows: "2",
                        title: "Précisez si vous le souhaitez",
                        visible: false,
                        visibleIf: "{question13} = '1'"
                    }
                ],
                name: "women"
            }
        ]
    };
}