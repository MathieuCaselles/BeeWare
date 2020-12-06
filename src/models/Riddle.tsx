import Background from '../pages/riddles/Background ';
import TreasureHunt from '../pages/riddles/TreasureHunt';
import ContactRiddle from '../pages/riddles/ContactRiddle'

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
  {
    id: '1',
    image:
      'https://cdn.discordapp.com/attachments/778266281107259402/785263111451312198/unknown.png',
    name: 'Contact riddle',
    difficulty: 1,
    timeSec: 0,
    isSuccess: false,
    component: ContactRiddle,
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
  },
];
