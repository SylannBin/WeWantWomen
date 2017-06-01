const itCommonsCategoryTitle = "Généralités & Connaissances Informatiques";

module.exports = {
  getItCommons1,
  getItCommons2,
  getItCommons3,
  getItCommons4,
  getItCommons5,
  getItCommons6,
  getItCommons7,
  getItCommons8,
  getItCommons9
}


function getItCommons1() {
  return {
    name: "it_commons",
    title: itCommonsCategoryTitle,
    elements: [{
      type: "checkbox",
      isRequired: true,
      name: "it_commons-1",
      title: "1) Selon vous, l'informatique de nos jours est plutôt ...",
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
    }]
  }
}

function getItCommons2() {
  return {
    name: "it_commons",
    title: itCommonsCategoryTitle,
    elements: [{
      type: "radiogroup",
      isRequired: true,
      name: "it_commons-2",
      title: "2) Un logiciel est considéré comme libre parce que ...",
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
    }]
  }
}

function getItCommons3() {
  return {
    name: "it_commons",
    title: itCommonsCategoryTitle,
    elements: [{
        type: "radiogroup",
        isRequired: true,
        name: "it_commons-3",
        title: "3) Connaissez-vous des personnes travaillant dans le monde Informatique ?",
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
        type: "panel",
        innerIndent: 2,
        name: "it_commons-3a",
        elements: [{
          type: "radiogroup",
          isRequired: true,
          visibleIf: "{it_commons-3} = '1'",
          name: "it_commons-3-a1",
          title: "3.1) Ces personnes sont ...",
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
        }]
      }
    ]
  }
}

function getItCommons4() {
  return {
    name: "it_commons",
    title: itCommonsCategoryTitle,
    elements: [{
      type: "radiogroup",
      isRequired: true,
      name: "it_commons-4",
      title: "4) D'après vous, qu'est-ce qu'un(e) geek ?",
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
    }]
  }
}

function getItCommons5() {
  return {
    name: "it_commons",
    title: itCommonsCategoryTitle,
    elements: [{
      type: "radiogroup",
      isRequired: true,
      name: "it_commons-5",
      title: "5) Que signifient les 3 lettres de WWW (à part We Want Women :D) ?",
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
    }]
  }
}

function getItCommons6() {
  return {
    name: "it_commons",
    title: itCommonsCategoryTitle,
    elements: [{
      type: "radiogroup",
      isRequired: true,
      name: "it_commons-6",
      title: "6) Avez-vous déjà assemblé ou desassemblé vous-même un ordinateur ?",
      choices: [{
          value: "1",
          text: "Oui"
        },
        {
          value: "2",
          text: "Non"
        }
      ]
    }]
  }
}

function getItCommons7() {
  return {
    name: "it_commons",
    title: itCommonsCategoryTitle,
    elements: [{
      type: "radiogroup",
      isRequired: true,
      name: "it_commons-7",
      title: "7) Diriez-vous que le monde Informatique est fréquenté par ...",
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
    }]
  }
}

function getItCommons8() {
  return {
    name: "it_commons",
    title: itCommonsCategoryTitle,
    elements: [{
      type: "radiogroup",
      isRequired: true,
      name: "it_commons-8",
      title: "8) Qu'est-ce qu'un RansomWare ?",
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
    }]
  }
}

function getItCommons9() {
  return {
    name: "it_commons",
    title: itCommonsCategoryTitle,
    elements: [{
      type: "radiogroup",
      isRequired: true,
      name: "it_commons-9",
      title: "9) Que sont HTML, JAVA, PYTHON, PHP ou C# ?",
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
    }]
  }
}