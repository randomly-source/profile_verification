import { Users, Home, Monitor, Smartphone, Tv } from 'lucide-react';
import { ReactNode } from 'react';

export interface Section {
  id: string;
  title: string;
  icon: ReactNode;
  questionIds: string[];
}

export const sectionConfig: Section[] = [
  {
    id: 'home-address-move-status',
    title: 'Home Address',
    icon: <Home size={20} />,
    questionIds: ['Q_ADDRESS']
  },
  {
    id: 'household-members',
    title: 'Household Members',
    icon: <Users size={20} />,
    questionIds: ['Q_MEMBER_RELATION', 'Q_MEMBER_OWNER', 'Q_MEMBER_EDUCATION', 'Q_MEMBER_RACE', 'Q_MEMBER_CONTACT_TIME']
  },
  {
    id: 'computers-smart-displays',
    title: 'Computers & Smart Displays',
    icon: <Monitor size={20} />,
    questionIds: ['Q_COMPUTER_LOCATION', 'Q_COMPUTER_USER', 'Q_COMPUTER_WORK', 'Q_COMPUTER_OS', 'Q_COMPUTER_INTERNET_30', 'Q_COMPUTER_PAID_BY']
  },
  {
    id: 'phones-tablets',
    title: 'Phones & Tablets',
    icon: <Smartphone size={20} />,
    questionIds: ['Q_PHONE_NAME', 'Q_PHONE_TYPE', 'Q_PHONE_INTERNET', 'Q_PHONE_OTHER_USERS', 'Q_PHONE_TEXT_PERMISSION']
  },
  {
    id: 'televisions-peripherals',
    title: 'Televisions & Peripherals',
    icon: <Tv size={20} />,
    questionIds: ['Q_TV_LOCATION', 'Q_TV_INTERNET', 'Q_TV_STB', 'Q_TV_AUDIO', 'Q_TV_DVD', 'Q_TV_GAME', 'Q_TV_STREAMING', 'Q_TV_HDMI', 'Q_TV_HEADPHONES', 'Q_TV_OTHER']
  },
  {
    id: 'streaming-subscriptions',
    title: 'Streaming Subscriptions',
    icon: <Tv size={20} />,
    questionIds: ['Q_STREAMING_SVOD', 'Q_STREAMING_LIVE_TV']
  }
];
