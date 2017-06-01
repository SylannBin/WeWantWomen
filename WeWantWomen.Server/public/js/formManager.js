/**
 * Fill the survey-container with the proper form
 * based on getFormFunction parameter
 */
function generateForm() {
  // Remove everything from the container before reloading it
  $("#main-container").empty();

  // build the survey container
  $("#main-container").append('<div id="survey-container" class="col-lg-offset-3 col-lg-6"></div>');

  // set proper model according to current page
  var newModel = getForm();

  // Configure the survey
  survey = new Survey.Model(newModel);
  survey.locale = "fr";
  survey.onComplete.add(sender => surveyData = sender.data);

  // Init Form container element
  $("#survey-container").Survey({
    model: survey,
    onCurrentPageChanged: initScrollEffect,
    onComplete: sendForm
  });
}

// JSON builder Functions

/**
 * Returns the json object containing the form questions and answers
 */
function getForm() {
  return {
    questionTitleTemplate: "{no}) {title}",
    pages: [{
        name: "it_commons",
        title: "Généralités & Connaissances Informatiques ({pageno}/{pagecount})",
        elements: [{
            type: "checkbox",
            isRequired: true,
            name: "it_commons-1",
            title: "Selon vous, l'informatique de nos jours est plutôt ...",
            choices: [{
                value: "1",
                text: "Essentielle"
              },
              {
                value: "2",
                text: "Optionnelle"
              },
              {
                value: "3",
                text: "Difficile d'accès"
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
            choicesOrder: "random"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "it_commons-2",
            title: "Un logiciel est considéré comme libre parce que ...",
            choices: [{
                value: "1",
                text: "il est gratuit"
              },
              {
                value: "2",
                text: "son code est consultable publiquement mais on ne peut pas le récupérer"
              },
              {
                value: "3",
                text: "son code est consultable publiquement et il peut être récupéré et modifié"
              },
              {
                value: "4",
                text: "Ne sait pas"
              }
            ],
            choicesOrder: "random"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "it_commons-3",
            title: "Connaissez-vous des personnes travaillant dans le monde Informatique ?",
            choices: [{
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
            choicesOrder: "random"
          },
          {
            type: "radiogroup",
            isRequired: true,
            visibleIf: "{it_commons-3} = '1'",
            name: "it_commons-3-a1",
            title: "Ces personnes sont ...",
            choices: [{
                value: "1",
                text: "surtout des femmes"
              },
              {
                value: "2",
                text: "surtout des hommes"
              },
              {
                value: "3",
                text: "des femmes et des hommes"
              },
              {
                value: "4",
                text: "Ne se prononce pas"
              }
            ],
            choicesOrder: "random"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "it_commons-4",
            title: "D'après vous, qu'est-ce qu'un(e) geek ?",
            choices: [{
                value: "1",
                text: "Un informaticien"
              },
              {
                value: "2",
                text: "Un hacker"
              },
              {
                value: "3",
                text: "Un fan de jeux vidéo"
              },
              {
                value: "4",
                text: "Une personne passionnée d'informatique, de cinéma, de technologies ..."
              },
              {
                value: "5",
                text: "Une personne renfermée dans son monde"
              },
              {
                value: "6",
                text: "Ne se prononce pas"
              }
            ],
            choicesOrder: "random"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "it_commons-5",
            title: "Que signifient les 3 lettres de WWW (à part We Want Women :D) ?",
            choices: [{
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
            choicesOrder: "random"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "it_commons-6",
            title: "Avez-vous déjà assemblé ou desassemblé vous-même un ordinateur ?",
            choices: [{
                value: "1",
                text: "Oui"
              },
              {
                value: "2",
                text: "Non"
              }
            ]
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "it_commons-7",
            title: "Diriez-vous que le monde Informatique est fréquenté par ...",
            choices: [{
                value: "1",
                text: "des femmes en majorité"
              },
              {
                value: "2",
                text: "des hommes en majorité"
              },
              {
                value: "3",
                text: "autant de femmes que d'hommes"
              },
              {
                value: "4",
                text: "Ne se prononce pas"
              }
            ],
            choicesOrder: "random"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "it_commons-8",
            title: "Qu'est-ce qu'un RansomWare ?",
            choices: [{
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
            choicesOrder: "random"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "it_commons-9",
            title: "Que sont HTML, JAVA, PYTHON, PHP ou C# ?",
            choices: [{
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
            choicesOrder: "random"
          }
        ]
      },
      {
        name: "employment",
        title: "Employabilité & Rémunération ({pageno}/{pagecount})",
        elements: [{
            type: "radiogroup",
            isRequired: true,
            name: "employment-1",
            title: "D'ici à 2022, combien de postes d'informaticiens seront créés chaque année en France selon vous ?",
            choices: [{
                value: "5000",
                text: "+ de 5 000"
              },
              {
                value: "12000",
                text: "+ de 12 000"
              },
              {
                value: "50000",
                text: "+ de 50 000"
              },
              {
                value: "190000",
                text: "+ de 190 000"
              },
              {
                value: "nsp",
                text: "Ne sait pas"
              }
            ],
            choicesOrder: "random"
          },
          {
            type: "matrix",
            isRequired: true,
            name: "employment-2",
            title: "A votre avis, quelle quantité d'emplois est disponible dans l'informatique pour ces qualifications ?",
            columns: [{
                value: "faible",
                text: "faible"
              },
              {
                value: "moyenne",
                text: "moyenne"
              },
              {
                value: "importante",
                text: "importante"
              },
              {
                value: "nsp",
                text: "Ne sais pas"
              }
            ],
            rows: [{
                value: "ouvrier",
                text: "Peu qualifiés (Ouvriers)"
              },
              {
                value: "technicien",
                text: "Moyennement qualifiés (Techniciens)"
              },
              {
                value: "ingenieur",
                text: "Très qualifiés (Ingénieurs)"
              }
            ]
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "employment-3",
            title: "Comment imaginez-vous la proportion de femmes dans les postes de cadres informatique ?",
            choices: [{
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
                value: "nsp",
                text: "Ne sait pas"
              }
            ],
            choicesOrder: "random"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "employment-4",
            title: "Dans quel sens pensez-vous que ce chiffre évolue ?",
            choices: [{
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
                value: "nsp",
                text: "Ne sait pas"
              }
            ],
            choicesOrder: "random"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "employment-5",
            title: "A votre avis, quel est le niveau de rémunération d’un bac +5 école d’ingénieur à la sortie de l’école ?",
            choices: [{
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
                value: "nsp",
                text: "Ne sait pas"
              }
            ]
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "employment-6",
            title: "En comparaison avec d'autres domaines, l'écart de salaire entre hommes et femmes dans le secteur informatique est plutôt ...",
            choices: [{
                value: "1",
                text: "plus grand"
              },
              {
                value: "2",
                text: "équivalent"
              },
              {
                value: "3",
                text: "plus faible"
              },
              {
                value: "nsp",
                text: "Ne sais pas"
              }
            ]
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "employment-7",
            title: "Pour un poste de cadre dans le milieu informatique et à compétences équivalentes, pensez-vous qu’une femme a autant de chances d’être engagé qu’un homme ?",
            choices: [{
                value: "oui",
                text: "Oui"
              },
              {
                value: "non",
                text: "Non"
              },
              {
                value: "nsp",
                text: "Ne sais pas"
              }
            ]
          },
          {
            type: "radiogroup",
            isRequired: true,
            visibleIf: "{employment-7} = '2'",
            name: "employment-7-a1",
            title: "Selon vous pour des raisons liées au domaine informatique ?",
            choices: [{
                value: "oui",
                text: "Oui"
              },
              {
                value: "non",
                text: "Non"
              },
              {
                value: "nsp",
                text: "Ne sais pas"
              }
            ]
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "employment-8",
            title: "A votre avis, quel est le secteur qui offre a ce jour le plus d’employabilité ?",
            choices: [{
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
            ]
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "employment-9",
            title: "Chaque année, de nombreuses offres d'emplois informatiques ne sont pas comblées par manque de candidats ?",
            choices: [{
                value: "vrai",
                text: "Vrai"
              },
              {
                value: "faux",
                text: "Faux"
              },
              {
                value: "nsp",
                text: "Ne sait pas"
              }
            ]
          }
        ]
      },
      {
        name: "formation",
        title: "Formation & Orientation ({pageno}/{pagecount})",
        elements: [{
            type: "checkbox",
            isRequired: true,
            colCount: 3,
            name: "formation-1",
            title: "Selon vous, quelles qualités sont utiles à l’informaticien(ne) ?",
            choices: [{
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
                text: "Introversion"
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
                text: "Persévérance"
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
            ]
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "formation-2",
            title: "Réfléchissez-vous actuellement à votre orientation d'études ? (Poursuite ou reprise)",
            choices: [{
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
            ]
          },
          {
            type: "checkbox",
            isRequired: true,
            colCount: 2,
            visibleIf: "{formation-2} = '1'",
            name: "formation-2-a1",
            title: "Quels sont les domaines d'études qui vous intéressent ?",
            choices: [{
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
            ]
          },
          {
            type: "checkbox",
            colCount: 2,
            visibleIf: "{formation-2-a1} = '4'",
            name: "formation-2-a2",
            title: "Si votre choix n'est pas définitif, pour quelles raisons hésitez-vous encore ?",
            choices: [{
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
            ]
          },
          {
            type: "comment",
            rows: "2",
            visibleIf: "{formation-2-a2} = '7'",
            name: "formation-2-a3",
            title: "Précisez si vous le souhaitez"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "formation-3",
            title: "Les filières informatiques vous ont-elles été présentées et proposées lors de votre parcours de formation ?",
            choices: [{
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
            ]
          },
          {
            type: "checkbox",
            isRequired: true,
            colCount: 2,
            visibleIf: "{formation-3} = '2'",
            name: "formation-3-a1",
            title: "Savez-vous pour quelles raisons ?",
            choices: [{
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
            ]
          },
          {
            type: "comment",
            rows: "2",
            visibleIf: "{formation-3-a1} = '5'",
            name: "formation-3-a2",
            title: "Précisez si vous le souhaitez"
          },
          {
            type: "checkbox",
            isRequired: true,
            colCount: 2,
            visibleIf: "{formation-3} = '1'",
            name: "formation-3-b1",
            title: "Quels arguments et bénéfices à propos de ces filières ont été mis en avant lorsqu'on vous les as présentés ?",
            choices: [{
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
            ]
          },
          {
            type: "comment",
            rows: "2",
            visibleIf: "{formation-3-b1} = '7'",
            name: "formation-3-b2",
            title: "Précisez si vous le souhaitez"
          },
          {
            type: "checkbox",
            isRequired: true,
            colCount: 2,
            name: "formation-4",
            title: "A votre avis, quelles sont les disciplines ou compétences qui vous semblent indispensables pour réussir en informatique ?",
            choices: [{
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
            ]
          },
          {
            type: "comment",
            rows: "2",
            visibleIf: "{formation-4} = '9'",
            name: "formation-4-a1",
            title: "Précisez si vous le souhaitez"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "formation-5",
            title: "Avez-vous l'impression que les études et les métiers de l'informatique ont une bonne 'cote' aujourd'hui ?",
            choices: [{
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
            ]
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "formation-6",
            title: "Dans quel sens diriez-vous que cette image a évolué ?",
            choices: [{
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
            ]
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "formation-7",
            title: "Comment imaginez-vous la répartition dans les classes d'écoles informatiques ?",
            choices: [{
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
            ]
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "formation-8",
            title: "Verriez-vous d'un bon œil que l'on trouve autant de femmes que d'hommes dans le domaine Informatique (études et entreprise) ?",
            choices: [{
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
            ]
          },
          {
            type: "rating",
            isRequired: true,
            name: "formation-9",
            title: "Comment réagirez-vous si une femme de votre entourage souhaite faire des études en informatique ?",
            maxRateDescription: "Positivement",
            minRateDescription: "Négativement",
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
            ]
          }
        ]
      },
      {
        name: "women",
        title: "Les Femmes & l'Informatique ({pageno}/{pagecount})",
        elements: [{
            type: "radiogroup",
            isRequired: true,
            name: "women-1",
            title: "Pensez-vous que les femmes ont autant leur place que les hommes dans les métiers de l'informatique",
            choices: [{
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
            ]
          },
          {
            type: "comment",
            rows: "2",
            visibleIf: "{question1} = '2'",
            name: "women-1-a1",
            title: "Précisez les raisons si vous le souhaitez"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "question3",
            title: "Quelle est selon vous la proportion de femmes qui travaillent dans l'informatique ?",
            choices: [{
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
            ]
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "question4",
            title: "Connaissez-vous une femme 'célèbre' de par ses activités dans le domaine informatique ?",
            choices: [{
                value: "1",
                text: "Oui"
              },
              {
                value: "2",
                text: "Non"
              }
            ]
          },
          {
            type: "comment",
            rows: "2",
            visibleIf: "{women-3} = '1'",
            name: "women-3-a1",
            title: "Citez-en une si vous le souhaitez",
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "women-4",
            title: "Connaissez-vous un homme 'célèbre' de par ses activités dans le domaine informatique ?",
            choices: [{
                value: "1",
                text: "Oui"
              },
              {
                value: "2",
                text: "Non"
              }
            ]
          },
          {
            type: "comment",
            rows: "2",
            visibleIf: "{women-4} = '1'",
            name: "women-4-a1",
            title: "Citez-en un si vous le souhaitez"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "women-5",
            title: "A votre avis, une équipe informatique mixte serait-elle plus performante qu'une équipe unisexe ?",
            choices: [{
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
            ]
          },
          {
            type: "checkbox",
            isRequired: true,
            colCount: 2,
            name: "women-6",
            title: "Selon vous, quels sont les domaines informatique préférés des femmes ?",
            choices: [{
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
            ]
          },
          {
            type: "comment",
            rows: "2",
            visibleIf: "{women-6} = '7'",
            name: "women-6-a1",
            title: "Précisez si vous le souhaitez"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "women-7",
            title: "Voyez-vous une raison qui empêche les femmes de travailler dans les métiers de l'informatique ?",
            choices: [{
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
            ]
          },
          {
            type: "comment",
            rows: "2",
            visibleIf: "{women-7} = '1'",
            name: "women-7-a1",
            title: "Précisez si vous le souhaitez"
          },
          {
            type: "radiogroup",
            isRequired: true,
            name: "women-8",
            title: "Au contraire, avez-vous en tête une caractéristique, une qualité, ou une mentalité particulière qui aideraient les femmes à s'intégrer dans les métiers de l'informatique ?",
            choices: [{
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
            ]
          },
          {
            type: "comment",
            rows: "2",
            visibleIf: "{women-8} = '1'",
            name: "women-8-a1",
            title: "Précisez si vous le souhaitez"
          }
        ]
      }
    ]
  };
}