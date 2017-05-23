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
 * "Employabilité et rémunération"
 */
function getEmploymentJson()
{
  return {
    title: "Employabilité et rémunération",
    name: "employment",
    pages: [
      {
        name: "page1",
        questions: [
          {
            type: "multipletext",
            items: [
              {
                name: "text1",
                title: "Difficulté 1"
              },
              {
                name: "text2",
                title: "Difficulté 2"
              },
              {
                name: "text3",
                title: "Difficulté 3"
              }
            ],
            name: "Question 1",
            title: "Quels sont les freins à l’embauche des femmes dans l’informatique ?"
          },
          {
            type: "multipletext",
            items: [
              {
                name: "text1",
                title: "Qualité 1"
              },
              {
                name: "text2",
                title: "Qualité 2"
              },
              {
                name: "text3",
                title: "Qualité 3"
              }
            ],
            name: "Question 2",
            title: "Quelles sont les qualités d’un informaticien ?"
          },
          {
            type: "radiogroup",
            choices: [
              {
                value: "1",
                text: "Marine 25 ans dev web"
              },
              {
                value: "2",
                text: "Ismaël 32 ans admin réseau"
              },
              {
                value: "3",
                text: "Marcel 53 ans spécialiste cybersécurité"
              },
              {
                value: "4",
                text: "Mathilda 38 ans spécialiste base de données"
              }
            ],
            name: "Question 3",
            title: "Quelle personne a le plus de chances d’être promue ?"
          },
          {
            type: "radiogroup",
            choices: [
              {
                value: "1",
                text: "Moins de 20 000 €"
              },
              {
                value: "2",
                text: "Entre 20 000 € et 30 000 €"
              },
              {
                value: "3",
                text: "Entre 30 000 € et 40 000 €"
              },
              {
                value: "4",
                text: "Plus de 40 000 €"
              }
            ],
            name: "Question 4",
            title: "A votre avis quel est le niveau de rémunération d’un bac+5 école d’ingénieur à la sortie de l’école ?"
          },
          {
            type: "multipletext",
            items: [
              {
                name: "text1",
                title: "Métier 1"
              },
              {
                name: "text2",
                title: "Métier 2"
              },
              {
                name: "text3",
                title: "Métier 3"
              },
              {
                name: "text4",
                title: "Métier 4"
              },
              {
                name: "text5",
                title: "Métier 5"
              }
            ],
            name: "Question 5",
            title: "Citez 6 métiers en lien avec l’informatique :"
          }
        ]
      }
    ]
  };
}

/**
 * Returns the json object that corresponds to the form
 * "Formation et orientation"
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
                    choicesOrder: "asc",
                    isRequired: true,
                    name: "question1",
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
                            value: "5",
                            text: "Autre"
                        },
                        {
                            value: "6",
                            text: "Droit / Justice"
                        }
                    ],
                    choicesOrder: "random",
                    name: "question2",
                    title: "Quels sont les domaines d'études qui vous intéressent ?",
                    visibleIf: "{question1} = '1'"
                },
                {
                    type: "comment",
                    name: "question3",
                    title: "Si votre choix n'est pas définitif, pour quelles raisons hésitez-vous encore ?",
                    visibleIf: " {question2} = '4'"
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
                    title: "Les filières informatiques vous ont-elles été présentées et proposées pour votre parcours de formation ? "
                },
                {
                    type: "comment",
                    name: "question5",
                    title: "Savez-vous pour quelles raisons ?",
                    visibleIf: " {question4} = '2'"
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
                            text: "Autre"
                        }
                    ],
                    isRequired: true,
                    name: "question6",
                    title: "Quels arguments et bénéfices à propos de ces filières ont été mis en avant lorsqu'on vous les as présentés ?",
                    visibleIf: " {question4} = '1'"
                },
                {
                    type: "comment",
                    name: "question7",
                    title: "Précisez",
                    visibleIf: " {question6} = '6'"
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
                        }
                    ],
                    choicesOrder: "random",
                    colCount: 2,
                    isRequired: true,
                    name: "question8",
                    title: "A votre avis, quelles sont les disciplines ou compétences qui vous semblent indispensables pour réussir en informatique ?"
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
                    name: "question9",
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
                        }
                    ],
                    isRequired: true,
                    name: "question10",
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
                        }
                    ],
                    isRequired: true,
                    name: "question11",
                    title: "Comment imaginez-vous la répartition dans les classes d'écoles informatiques ?"
                },
                {
                    type: "comment",
                    name: "question12",
                    title: "A votre avis, pourquoi ? ",
                    visibleIf: "{question11} < 3"
                }
            ],
            name: "page1"
        }
    ]
  };
}

/**
 * Returns the json object that corresponds to the form
 * "Généralités informatiques"
 */
function getITCommonsJson()
{
  return {
    title: "Généralités Informatiques",
    name: "it_commons",
    pages: [
        {
            elements: [
                {
                    type: "radiogroup",
                    name: "question1",
                    title: "Quelle est votre vision de l’informatique ?",
                    isRequired: true,
                    choices: [
                        {
                            value: "1",
                            text: "Inutile"
                        },
                        {
                            value: "2",
                            text: "Passionnante"
                        },
                        {
                            value: "3",
                            text: "Difficile"
                        },
                        {
                            value: "4",
                            text: "Optionnelle"
                        },
                        {
                            value: "5",
                            text: "Essentielle"
                        }
                    ],
                    choicesOrder: "random"
                },
                {
                    type: "radiogroup",
                    name: "question2",
                    title: "D'après vous, qu'est-ce qu'un geek ?",
                    isRequired: true,
                    choices: [
                        {
                            value: "1",
                            text: "Une personne passionnée d'informatique, de cinéma, de technologies ..."
                        },
                        {
                            value: "2",
                            text: "Un développeur"
                        },
                        {
                            value: "3",
                            text: "Un informaticien"
                        },
                        {
                            value: "4",
                            text: "Un e-sportif"
                        },
                        {
                            value: "5",
                            text: "Un hacker"
                        }
                    ],
                    choicesOrder: "random"
                },
                {
                    type: "radiogroup",
                    name: "question3",
                    title: "D'ici à 2022, combien de postes d'informaticiens seront créés chaque année selon vous ?",
                    isRequired: true,
                    choices: [
                        {
                            value: "1",
                            text: "50000"
                        },
                        {
                            value: "2",
                            text: "12500"
                        },
                        {
                            value: "3",
                            text: "191000"
                        },
                        {
                            value: "4",
                            text: "7000"
                        }
                    ],
                    choicesOrder: "random"
                },
                {
                    type: "rating",
                    name: "question5",
                    title: "A votre avis, quelle est la répartition des emplois dans l'informatique ? (de la plus grande part à la plus petite)",
                    isRequired: true,
                    rateValues: [
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
                        }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "question6",
                    title: "Chaque année, de nombreuses offres d'emplois informatiques ne sont pas comblées par manque de candidats :",
                    isRequired: true,
                    choices: [
                        {
                            value: "1",
                            text: "Faux"
                        },
                        {
                            value: "2",
                            text: "Vrai"
                        }
                    ],
                    choicesOrder: "random"
                },
                {
                    type: "radiogroup",
                    name: "question6",
                    title: "Comment imaginez-vous la proportion de femmes dans les postes de cadres informatique ?",
                    isRequired: true,
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
                        }
                    ],
                    choicesOrder: "random"
                },
                {
                    type: "radiogroup",
                    name: "question7",
                    title: "Dans quel sens pensez-vous que ce chiffre évolue ?",
                    isRequired: true,
                    choices: [
                        {
                            value: "1",
                            text: "Diminution"
                        },
                        {
                            value: "2",
                            text: "Stagnation"
                        },
                        {
                            value: "3",
                            text: "Augmentation"
                        }
                    ],
                    choicesOrder: "asc"
                },
                {
                    type: "panel",
                    name: "reaction1",
                    elements: [
                        {
                            type: "rating",
                            name: "question8",
                            title: "Votre enfant veut se lancer dans l’informatique. Comment réagissez-vous ? ",
                            isRequired: true,
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
                            minRateDescription: "Mal",
                            maxRateDescription: "Bien"
                        },
                        {
                            type: "comment",
                            name: "question9",
                            title: "Commentaire :",
                            isRequired: true
                        }
                    ],
                    title: "Réaction"
                },
                {
                    type: "radiogroup",
                    name: "question10",
                    title: "Quelle est la marque de votre ordinateur ? ",
                    isRequired: true,
                    choices: [
                        {
                            value: "1",
                            text: "Apple"
                        },
                        {
                            value: "2",
                            text: "Dell"
                        },
                        {
                            value: "3",
                            text: "Toshiba"
                        },
                        {
                            value: "4",
                            text: "Asus"
                        },
                        {
                            value: "5",
                            text: "Hewlett Packard (HP)"
                        },
                        {
                            value: "6",
                            text: "Lenovo"
                        },
                        {
                            value: "7",
                            text: "MSI"
                        },
                        {
                            value: "8",
                            text: "Microsoft (surface...)"
                        },
                        {
                            value: "9",
                            text: "Sony (Vaio...)"
                        },
                        {
                            value: "10",
                            text: "Acer"
                        },
                        {
                            value: "11",
                            text: "PC Monté"
                        },
                        {
                            value: "12",
                            text: "Autre"
                        }
                    ],
                    choicesOrder: "random",
                    colCount: 4
                },
                {
                    type: "radiogroup",
                    name: "question11",
                    title: "Quelle est la marque de votre smartphone ? ",
                    isRequired: true,
                    choices: [
                        {
                            value: "1",
                            text: "Apple"
                        },
                        {
                            value: "2",
                            text: "Asus"
                        },
                        {
                            value: "3",
                            text: "Microsoft"
                        },
                        {
                            value: "4",
                            text: "Sony"
                        },
                        {
                            value: "5",
                            text: "Samsung"
                        },
                        {
                            value: "6",
                            text: "HTC"
                        },
                        {
                            value: "7",
                            text: "One Plus"
                        },
                        {
                            value: "8",
                            text: "Autre"
                        }
                    ],
                    choicesOrder: "random",
                    colCount: 2
                }
            ]
        }
    ]
  };
}

/**
 * Returns the json object that corresponds to the form
 * "Connaissances informatiques"
 */
function getITKnowledgeJson() {
 return {
        title: "Connaissances Informatiques",
        name: "it_knowledge",
        pages: [
            {
                name: "page1",
                elements: [
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Internet Explorer"
                            },
                            {
                                value: "2",
                                text: "Google"
                            },
                            {
                                value: "3",
                                text: "Firefox"
                            },
                            {
                                value: "4",
                                text: "Safari"
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question1",
                        title: "Parmi les choix suivant lequel n'est pas un navigateur web ?"
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
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question2",
                        title: "Qu’est-ce qu’un logiciel libre ?"
                    },
                    {
                        type: "checkbox",
                        choices: [
                            {
                                value: "1",
                                text: "Ubuntu"
                            },
                            {
                                value: "2",
                                text: "Chromium"
                            },
                            {
                                value: "3",
                                text: "Mac OS"
                            },
                            {
                                value: "4",
                                text: "Android"
                            },
                            {
                                value: "5",
                                text: "Yenop"
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question3",
                        title: "Parmi les choix suivant, sélectionnez les systèmes d'exploitation :"
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
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question4",
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
                        name: "question5",
                        title: "Avez-vous déjà monté ou démonté un ordinateur ?"
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
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question6",
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
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question7",
                        title: "Que sont HTML, JAVA, PYTHON, PHP ou C# ?"
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
                        name: "question8",
                        title: "Savez-vous ce qu'est l'invité de commande ?"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "ipconfig"
                            },
                            {
                                value: "2",
                                text: "ifconfig"
                            },
                            {
                                value: "3",
                                text: "netconfig"
                            },
                            {
                                value: "4",
                                text: "ipaddress"
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question9",
                        title: "Quelle est la commande pour avoir sa configuration réseau sur Windows ?",
                        visible: false,
                        visibleIf: "{question5} = '1'"
                    },
                    {
                        type: "radiogroup",
                        choices: [
                            {
                                value: "1",
                                text: "Un langage de programation"
                            },
                            {
                                value: "2",
                                text: "Une marque de processeur"
                            },
                            {
                                value: "3",
                                text: "Un anti-virus"
                            }
                        ],
                        choicesOrder: "random",
                        isRequired: true,
                        name: "question10",
                        title: "Selon vous, qu'est-ce que le Powershell ?"
                    }
                ]
            }
        ]
    };
} 