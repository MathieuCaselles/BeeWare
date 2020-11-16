import { Riddle } from "../models/Riddle"


const riddles: Riddle[] = [
    {
        image: "https://jojo-app.fr/wp-content/uploads/2018/09/espace-optimise-appartement-meuble-paris.jpg",
        name: "Riddle 1",
        difficulty: 3,
        time: 0,
        isSuccess: true,
    },
    {
        image: "http://goraguer.fr/wp/wp-content/uploads/2012/06/Appartement-marais-5.jpg",
        name: "Riddle 2",
        difficulty: 1,
        time: 0,
        isSuccess: false,
    },
    {
        image: "http://www.notreloft.com/images/2014/05/Renovation-appartement-haussmannien-0100.jpg",
        name: "Riddle 3",
        difficulty: 2,
        time: 0,
        isSuccess: false,
    }
]

export { riddles }