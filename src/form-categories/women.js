const womenCategoryTitle = "Les femmes et l'informatique (4/4)";


module.exports = {
  getWomen1,
  getWomen2,
  getWomen3,
  getWomen4,
  getWomen5,
  getWomen6,
  getWomen7,
  getWomen8
}


function getWomen1() {
  return {
    name: "women",
    title: womenCategoryTitle,
    elements: [{
        type: "radiogroup",
        isRequired: true,
        name: "women-1",
        title: "1) Pensez-vous que les femmes ont autant leur place que les hommes dans les métiers de l'informatique ?",
        choices: [{
            value: "oui",
            text: "Oui"
          },
          {
            value: "non",
            text: "Non"
          },
          {
            value: "jnsp",
            text: "(Je ne sais pas)"
          }
        ]
      },
      {
        type: "comment",
        rows: "2",
        visibleIf: "{women-1} = 'non'",
        name: "women-1-a1",
        title: "1.1) Précisez les raisons si vous le souhaitez"
      }
    ]
  }
}

function getWomen2() {
  return {
    name: "women",
    title: womenCategoryTitle,
    elements: [{
      type: "radiogroup",
      isRequired: true,
      name: "women-2",
      title: "2) Quelle est selon vous la proportion de femmes qui travaillent dans l'informatique ?",
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
          value: "jnsp",
          text: "(Je ne sais pas)"
        }
      ]
    }]
  }
}

function getWomen3() {
  return {
    name: "women",
    title: womenCategoryTitle,
    elements: [{
        type: "radiogroup",
        isRequired: true,
        name: "women-3",
        title: "3) Connaissez-vous une femme 'célèbre' de par ses activités dans le domaine informatique ?",
        choices: [{
            value: "oui",
            text: "Oui"
          },
          {
            value: "non",
            text: "Non, aucune"
          }
        ]
      },
      {
        type: "comment",
        rows: "2",
        visibleIf: "{women-3} = 'oui'",
        name: "women-3-a1",
        title: "3.1) Citez-en une (ou plus) si vous le souhaitez",
      },
    ]
  }
}

function getWomen4() {
  return {
    name: "women",
    title: womenCategoryTitle,
    elements: [{
        type: "radiogroup",
        isRequired: true,
        name: "women-4",
        title: "4) Connaissez-vous un homme 'célèbre' de par ses activités dans le domaine informatique ?",
        choices: [{
            value: "oui",
            text: "Oui"
          },
          {
            value: "non",
            text: "Non, aucun"
          }
        ]
      },
      {
        type: "comment",
        rows: "2",
        visibleIf: "{women-4} = 'oui'",
        name: "women-4-a1",
        title: "4.1) Citez-en un (ou plus) si vous le souhaitez"
      }
    ]
  }
}

function getWomen5() {
  return {
    name: "women",
    title: womenCategoryTitle,
    elements: [{
      type: "radiogroup",
      isRequired: true,
      name: "women-5",
      title: "5) A votre avis, une équipe informatique mixte serait-elle plus performante qu'une équipe unisexe ?",
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
          value: "jnsp",
          text: "(Je ne sais pas)"
        }
      ]
    }]
  }
}

function getWomen6() {
  return {
    name: "women",
    title: womenCategoryTitle,
    elements: [{
        type: "checkbox",
        isRequired: true,
        colCount: 2,
        name: "women-6",
        title: "6) Selon vous, quels sont les domaines informatique préférés des femmes ?",
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
            value: "autre",
            text: "Autre"
          },
          {
            value: "jnsp",
            text: "(Je ne sais pas)"
          }
        ]
      },
      {
        type: "comment",
        rows: "2",
        visibleIf: "{women-6} = 'autre'",
        name: "women-6-a1",
        title: "6.1) Précisez si vous le souhaitez"
      }
    ]
  }
}

function getWomen7() {
  return {
    name: "women",
    title: womenCategoryTitle,
    elements: [{
        type: "radiogroup",
        isRequired: true,
        name: "women-7",
        title: "7) Voyez-vous une raison qui empêche les femmes de travailler dans les métiers de l'informatique ?",
        choices: [{
            value: "oui",
            text: "Oui"
          },
          {
            value: "non",
            text: "Non, je ne vois pas"
          }
        ]
      },
      {
        type: "comment",
        rows: "2",
        visibleIf: "{women-7} = 'oui'",
        name: "women-7-a1",
        title: "7.1) Précisez si vous le souhaitez"
      }
    ]
  }
}

function getWomen8() {
  return {
    name: "women",
    title: womenCategoryTitle,
    elements: [{
        type: "radiogroup",
        isRequired: true,
        name: "women-8",
        title: "8) Au contraire, avez-vous en tête une caractéristique, une qualité, ou une mentalité particulière qui aideraient les femmes à s'intégrer dans les métiers de l'informatique ?",
        choices: [{
            value: "oui",
            text: "Oui"
          },
          {
            value: "non",
            text: "Non, je ne vois pas"
          }
        ]
      },
      {
        type: "comment",
        rows: "2",
        visibleIf: "{women-8} = 'oui'",
        name: "women-8-a1",
        title: "8.1) Précisez si vous le souhaitez"
      }
    ]
  }
}