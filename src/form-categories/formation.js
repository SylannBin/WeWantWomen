const formationCategoryTitle = "Formation & Orientation";


module.exports = {
    getFormation1,
    getFormation2,
    getFormation3,
    getFormation4,
    getFormation5,
    getFormation6,
    getFormation7,
    getFormation8,
    getFormation9
}


function getFormation1() {
    return {
        name: "formation",
        title: formationCategoryTitle,
        elements: [{
            type: "checkbox",
            isRequired: true,
            colCount: 3,
            name: "formation-1",
            title: "1) Selon vous, quelles qualités sont utiles à l’informaticien(ne) ?",
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
        }]
    }
}

function getFormation2() {
    return {
        name: "formation",
        title: formationCategoryTitle,
        elements: [{
                type: "radiogroup",
                isRequired: true,
                name: "formation-2",
                title: "2) Réfléchissez-vous actuellement à votre orientation d'études ? (Poursuite ou reprise)",
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
                title: "2.1) Quels sont les domaines d'études qui vous intéressent ?",
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
                title: "2.2) Si votre choix n'est pas définitif, pour quelles raisons hésitez-vous encore ?",
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
                title: "2.3) Précisez si vous le souhaitez"
            }
        ]
    }
}

function getFormation3() {
    return {
        name: "formation",
        title: formationCategoryTitle,
        elements: [{
                type: "radiogroup",
                isRequired: true,
                name: "formation-3",
                title: "3) Les filières informatiques vous ont-elles été présentées et proposées lors de votre parcours de formation ?",
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
                title: "3.1) Savez-vous pour quelles raisons ?",
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
                title: "3.2) Précisez si vous le souhaitez"
            },
            {
                type: "checkbox",
                isRequired: true,
                colCount: 2,
                visibleIf: "{formation-3} = '1'",
                name: "formation-3-b1",
                title: "3.1) Quels arguments et bénéfices à propos de ces filières ont été mis en avant lorsqu'on vous les as présentés ?",
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
                title: "3.2) Précisez si vous le souhaitez"
            }
        ]
    }
}

function getFormation4() {
    return {
        name: "formation",
        title: formationCategoryTitle,
        elements: [{
                type: "checkbox",
                isRequired: true,
                colCount: 2,
                name: "formation-4",
                title: "4) A votre avis, quelles sont les disciplines ou compétences qui vous semblent indispensables pour réussir en informatique ?",
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
                title: "4.1) Précisez si vous le souhaitez"
            }
        ]
    }
}

function getFormation5() {
    return {
        name: "formation",
        title: formationCategoryTitle,
        elements: [{
            type: "radiogroup",
            isRequired: true,
            name: "formation-5",
            title: "5) Avez-vous l'impression que les études et les métiers de l'informatique ont une bonne 'cote' aujourd'hui ?",
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
        }]
    }
}

function getFormation6() {
    return {
        name: "formation",
        title: formationCategoryTitle,
        elements: [{
            type: "radiogroup",
            isRequired: true,
            name: "formation-6",
            title: "6) Dans quel sens diriez-vous que cette image a évolué ?",
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
        }]
    }
}

function getFormation7() {
    return {
        name: "formation",
        title: formationCategoryTitle,
        elements: [{
            type: "radiogroup",
            isRequired: true,
            name: "formation-7",
            title: "7) Comment imaginez-vous la répartition dans les classes d'écoles informatiques ?",
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
        }]
    }
}

function getFormation8() {
    return {
        name: "formation",
        title: formationCategoryTitle,
        elements: [{
            type: "radiogroup",
            isRequired: true,
            name: "formation-8",
            title: "8) Verriez-vous d'un bon œil que l'on trouve autant de femmes que d'hommes dans le domaine Informatique (études et entreprise) ?",
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
        }]
    }
}

function getFormation9() {
    return {
        name: "formation",
        title: formationCategoryTitle,
        elements: [{
            type: "rating",
            isRequired: true,
            name: "formation-9",
            title: "9) Comment réagirez-vous si une femme de votre entourage souhaite faire des études en informatique ?",
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
        }]
    }
}