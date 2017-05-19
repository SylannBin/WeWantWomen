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
    pages: [
      {
        name: "page1", questions: [
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
            name: "Question1",
            startWithNewLine: false,
            title: "Seriez-vous intéressé par une carrière/formation en informatique ?"
          },
          {
            type: "comment",
            name: "Question2",
            title: "Pour quelle(s) raison(s) ?",
            visibleIf: "{Question1}='2'"
          },
          {
            type: "comment",
            isRequired: true,
            name: "Question3",
            title: "Quel est votre cursus ?",
            visibleIf: "{Question1} = '1'"
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
            name: "Question4",
            title: "Les filières informatiques vous ont-elles été proposées dans votre parcours de formation ?",
            visibleIf: "{Question1} = '1'"
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
            name: "Question5",
            title: "Pensez-vous que l’informatique n’est qu’une spécialité ?",
            visibleIf: "{Question 1} = '2'"
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
                text: "Histoire"
              },
              {
                value: "5",
                text: "Economie"
              },
              {
                value: "6",
                text: "Droit"
              }
            ],
            choicesOrder: "random",
            isRequired: true,
            name: "Question6",
            title: "Quelles disciplines vous semblent indispensables pour faire de l’informatique ?"
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
            name: "Question7",
            title: "Pensez-vous qu’il soit nécessaire d’aller dans une école spécialisée pour faire carrière dans l’informatique ?"
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
    pages: [
      {
        name: "page1", questions: [
          {
            type: "checkbox",
            choices: [
              {
                value: "3",
                text: "Inutile"
              },
              {
                value: "1",
                text: "Jeune"
              },
              {
                value: "2",
                text: "Passionnante"
              },
              {
                value: "4",
                text: "Difficile"
              }
            ],
            choicesOrder: "random",
            isRequired: true,
            name: "G_question1",
            title: "Quelle est votre vision de l'informatique ?"
          },
          {
            type: "radiogroup",
            choices: [
              {
                value: "1",
                text: "Non"
              },
              {
                value: "2",
                text: "Oui"
              }
            ],
            choicesOrder: "random",
            isRequired: true,
            name: "G_question2",
            title: "Pensez-vous que le traitement de l'information par le cerveau est différente selon si l'on est une femme ou un homme ?"
          },
          {
            type: "radiogroup",
            choices: [
              {
                value: "1",
                text: "Non"
              },
              {
                value: "2",
                text: "Oui"
              }
            ],
            choicesOrder: "random",
            isRequired: true,
            name: "G_question3",
            title: "Pensez-vous que le traitement de l'information par le cerveau est influencée par notre éducation ?"
          },
          {
            type: "radiogroup",
            choices: [
              {
                value: "1",
                text: "Une personne qui passe sa vie devant les jeu vidéos "
              },
              {
                value: "2",
                text: "Une personne passionnée d'informatique, de science, de cinéma, ..."
              },
              {
                value: "3",
                text: "Une personne qui n'a pas d'ami"
              }
            ],
            choicesOrder: "random",
            isRequired: true,
            name: "G_question4",
            title: "Selon vous, laquelle de ces définitions correspond le plus au terme 'geek' :"
          },
          {
            type: "radiogroup",
            choices: [
              {
                value: "1",
                text: "Inquiet"
              },
              {
                value: "2",
                text: "Confiant"
              },
              {
                value: "3",
                text: "Content"
              },
              {
                value: "4",
                text: "Refus"
              },
              {
                value: "5",
                text: "Encouragement"
              },
              {
                value: "6",
                text: "Neutre"
              },
              {
                value: "7",
                text: "Questionnement"
              }
            ],
            choicesOrder: "random",
            isRequired: true,
            name: "G_question5",
            title: "Votre enfant vous annonce qu'il souhaite se lancer dans des études d'informatique, quelle est votre réaction ?"
          },
          {
            type: "comment",
            name: "G_question6",
            title: "Commentaire question précédente"
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
            choicesOrder: "random",
            isRequired: true,
            name: "G_question7",
            title: "Avez-vous déjà entendu parler des Moocs ? (OpenClassrooms, Digischool, etc) ?"
          },
          {
            type: "comment",
            name: "G_question8",
            title: "De manière générale, comment voyez-vous l'informatique ? \nQuelle importance revêt-elle dans votre vie quotidienne ?"
          }
        ],
        name: "GénéralitésInformatique",
        title: "Généralités sur l'informatique"
      }
    ]
  };
}