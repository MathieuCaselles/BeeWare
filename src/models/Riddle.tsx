import CodeLock from '../pages/riddles/CodeLock';
import TreasureHunt from '../pages/riddles/TreasureHunt';

export interface Riddle {
  id: string;
  image: string;
  name: string;
  difficulty: number;
  timeSec: number;
  isSuccess: boolean;
  path: string;
  component: React.FC<{ riddle: Riddle }> | null;
}

export const defaultRiddles: Riddle[] = [
  {
    id: '1',
    image:
      'https://jojo-app.fr/wp-content/uploads/2018/09/espace-optimise-appartement-meuble-paris.jpg',
    name: 'riddle-1',
    difficulty: 3,
    timeSec: 0,
    isSuccess: true,
    path: '',
    component: null,
  },
  {
    id: '2',
    image:
      'http://goraguer.fr/wp/wp-content/uploads/2012/06/Appartement-marais-5.jpg',
    name: 'riddle-2',
    difficulty: 1,
    timeSec: 0,
    isSuccess: false,
    path: '',
    component: null,
  },
  {
    id: '3',
    image:
      'https://blog.malwarebytes.com/wp-content/uploads/2013/11/photodune-5172276-locked-smartphone-m.jpg',
    name: 'Code Lock',
    difficulty: 1,
    timeSec: 1,
    isSuccess: false,
    path: '/codeLock',
    component: CodeLock,
  },
  {
    id: '4',
    image:
      'https://www.thespruce.com/thmb/d97ouPVGIw0T655cMAhEVeWeLM4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/indoor-treasure-hunt-for-children-1695332_FINAL-a9fabbdd08a14bfcbf9acb8ecae3a2f3.png',
    name: 'treasure-hunt',
    difficulty: 1,
    timeSec: 0,
    isSuccess: false,
    path: '',
    component: TreasureHunt,
  },
];
