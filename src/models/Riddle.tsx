import Alphabet from '../pages/riddles/Alphabet';
import Background from '../pages/riddles/Background';
import TreasureHunt from '../pages/riddles/TreasureHunt';
import Clipboard from '../pages/riddles/clipboard';
import Light from '../pages/riddles/Light';
import ContactRiddle from '../pages/riddles/ContactRiddle';

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
      'https://cdn.discordapp.com/attachments/768961466145308702/785223146063921162/file.jpg',
    name: 'Light',
    difficulty: 2,
    timeSec: 0,
    isSuccess: false,
    component: Light,
  },
  {
    id: '3',
    image: 'https://zupimages.net/up/20/49/vpcw.jpg',
    name: 'Background',
    difficulty: 3,
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
  {
    id: '5',
    image: 'https://cdn.pixabay.com/photo/2014/04/02/16/16/glue-306757_960_720.png',
    name: 'Copy Pasta',
    difficulty: 2,
    timeSec: 0,
    isSuccess: false,
    component: Clipboard,
  },
  {
    id: '6',
    image:
      'https://media.istockphoto.com/illustrations/childrens-multicolored-alphabet-abc-illustration-id1136738832',
    name: 'Alphabet',
    difficulty: 3,
    timeSec: 0,
    isSuccess: false,
    component: Alphabet,
  }

];
