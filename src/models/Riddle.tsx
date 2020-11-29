export interface Riddle {
    id: string,
    image: string,
    name: string,
    difficulty: number,
    timeSec: number,
    isSuccess: boolean,
    path: string
}

export const defaultRiddles: Riddle[] = [
    {
        id: '1',
        image: "https://jojo-app.fr/wp-content/uploads/2018/09/espace-optimise-appartement-meuble-paris.jpg",
        name: "Riddle 1",
        difficulty: 3,
        timeSec: 0,
        isSuccess: true,
        path: ""
    },
    {
        id: '2',
        image: "http://goraguer.fr/wp/wp-content/uploads/2012/06/Appartement-marais-5.jpg",
        name: "Riddle 2",
        difficulty: 1,
        timeSec: 0,
        isSuccess: false,
        path: ""
    },
    {
        id: '3',
        image: "https://blog.malwarebytes.com/wp-content/uploads/2013/11/photodune-5172276-locked-smartphone-m.jpg",
        name: "Code Lock",
        difficulty: 1,
        timeSec: 1,
        isSuccess: false,
        path: "/codeLock"
    }
]