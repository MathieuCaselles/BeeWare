export interface Riddle {
    id: string,
    image: string,
    name: string,
    difficulty: number,
    timeSec: 0,
    isSuccess: boolean
}

export const defaultRiddles: Riddle[] = [
    {
        id: '1',
        image: "https://jojo-app.fr/wp-content/uploads/2018/09/espace-optimise-appartement-meuble-paris.jpg",
        name: "Riddle 1",
        difficulty: 3,
        timeSec: 0,
        isSuccess: true,
    },
    {
        id: '2',
        image: "http://goraguer.fr/wp/wp-content/uploads/2012/06/Appartement-marais-5.jpg",
        name: "Riddle 2",
        difficulty: 1,
        timeSec: 0,
        isSuccess: false,
    },
    {
        id: '3',
        image: "http://www.notreloft.com/images/2014/05/Renovation-appartement-haussmannien-0100.jpg",
        name: "Riddle 3",
        difficulty: 2,
        timeSec: 0,
        isSuccess: false,
    }
]