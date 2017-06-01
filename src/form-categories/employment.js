const employmentCategoryTitle = "Employabilité & Rémunération";


module.exports = {
    getEmployment1,
    getEmployment2,
    getEmployment3,
    getEmployment4,
    getEmployment5,
    getEmployment6,
    getEmployment7,
    getEmployment8,
    getEmployment9,
}


function getEmployment1() {
    return {
        name: "employment",
        title: employmentCategoryTitle,
        elements: [{
            type: "radiogroup",
            isRequired: true,
            name: "employment-1",
            title: "1) D'ici à 2022, combien de postes d'informaticiens seront créés chaque année en France selon vous ?",
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
        }]
    }
}

function getEmployment2() {
    return {
        name: "employment",
        title: employmentCategoryTitle,
        elements: [{
            type: "matrix",
            isRequired: true,
            name: "employment-2",
            title: "2) A votre avis, quelle quantité d'emplois est disponible dans l'informatique pour ces qualifications ?",
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
        }]
    }
}

function getEmployment3() {
    return {
        name: "employment",
        title: employmentCategoryTitle,
        elements: [{
            type: "radiogroup",
            isRequired: true,
            name: "employment-3",
            title: "3) Comment imaginez-vous la proportion de femmes dans les postes de cadres informatique ?",
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
        }]
    }
}

function getEmployment4() {
    return {
        name: "employment",
        title: employmentCategoryTitle,
        elements: [{
            type: "radiogroup",
            isRequired: true,
            name: "employment-4",
            title: "4) Dans quel sens pensez-vous que ce chiffre évolue ?",
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
        }]
    }
}

function getEmployment5() {
    return {
        name: "employment",
        title: employmentCategoryTitle,
        elements: [{
            type: "radiogroup",
            isRequired: true,
            name: "employment-5",
            title: "5) A votre avis, quel est le niveau de rémunération d’un bac +5 école d’ingénieur à la sortie de l’école ?",
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
        }]
    }
}

function getEmployment6() {
    return {
        name: "employment",
        title: employmentCategoryTitle,
        elements: [{
            type: "radiogroup",
            isRequired: true,
            name: "employment-6",
            title: "6) En comparaison avec d'autres domaines, l'écart de salaire entre hommes et femmes dans le secteur informatique est plutôt ...",
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
        }]
    }
}

function getEmployment7() {
    return {
        name: "employment",
        title: employmentCategoryTitle,
        elements: [{
                type: "radiogroup",
                isRequired: true,
                name: "employment-7",
                title: "7) Pour un poste de cadre dans le milieu informatique et à compétences équivalentes, pensez-vous qu’une femme a autant de chances d’être engagé qu’un homme ?",
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
            }
        ]
    }
}

function getEmployment8() {
    return {
        name: "employment",
        title: employmentCategoryTitle,
        elements: [{
            type: "radiogroup",
            isRequired: true,
            name: "employment-8",
            title: "8) A votre avis, quel est le secteur qui offre a ce jour le plus d’employabilité ?",
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
        }]
    }
}

function getEmployment9() {
    return {
        name: "employment",
        title: employmentCategoryTitle,
        elements: [{
            type: "radiogroup",
            isRequired: true,
            name: "employment-9",
            title: "9) Chaque année, de nombreuses offres d'emplois informatiques ne sont pas comblées par manque de candidats ?",
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
        }]
    }
}