import Background from '../pages/riddles/Background ';
import TreasureHunt from '../pages/riddles/TreasureHunt';
import Clipboard from '../pages/riddles/clipboard';

export interface Riddle {
  id: string;
  image: string;
  name: string;
  difficulty: number;
  timeSec: number;
  isSuccess: boolean;
  component: React.FC<{ riddle: Riddle }> | null;
}

export const defaultRiddles: Riddle[] = [
<<<<<<< Updated upstream
  {
    id: '1',
    image: 'https://cdn.pixabay.com/photo/2014/04/02/16/16/glue-306757_960_720.png',
    name: 'Copy Pasta',
    difficulty: 3,
    timeSec: 0,
    isSuccess: false,
    component: Clipboard,
  },
  {
    id: '2',
    image:
      'http://goraguer.fr/wp/wp-content/uploads/2012/06/Appartement-marais-5.jpg',
    name: 'riddle-2',
    difficulty: 1,
    timeSec: 0,
    isSuccess: false,
    component: null,
  },
  {
    id: '3',
    image: 'https://zupimages.net/up/20/49/vpcw.jpg',
    name: 'Background',
    difficulty: 1,
    timeSec: 1,
    isSuccess: false,
    component: Background,
  },
  {
    id: '4',
    image:
      'https://www.thespruce.com/thmb/d97ouPVGIw0T655cMAhEVeWeLM4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/indoor-treasure-hunt-for-children-1695332_FINAL-a9fabbdd08a14bfcbf9acb8ecae3a2f3.png',
    name: 'treasure-hunt',
    difficulty: 1,
    timeSec: 0,
    isSuccess: false,
    component: TreasureHunt,
  }
];
=======
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
    },
    {
        id:'4',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/600px-Question_mark_%28black%29.svg.png",
        name: "Another Code ?",
        difficulty: 1,
        timeSec: 0,
        isSuccess: false,
        path: "/clipboard"
    }
]
>>>>>>> Stashed changes
