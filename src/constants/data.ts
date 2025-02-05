import {ILinkData} from '@/types';
import rockImg from '@/assets/images/rock.jpg';
import treeImg from '@/assets/images/tree.jpg';
import waterImg from '@/assets/images/water.jpg';
import houseImg from '@/assets/images/house.jpg';
import cactusImg from '@/assets/images/cactus.jpg';

import codeIcon from '@/assets/icons/code.svg';
import cloudIcon from '@/assets/icons/cloud.svg';
import mobileIcon from '@/assets/icons/mobile.svg';
import developmentIcon from '@/assets/icons/development.svg';

export const headerLinks: ILinkData[] = [
  {
    href: '#projects',
    text: 'projects',
  },
  {
    href: '#services',
    text: 'services',
  },
  {
    href: '#about',
    text: 'about',
  },
  {
    href: '#privacy',
    text: 'privacy',
  },
];

export const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export const projects = [
  {
    title: 'matthias_leidinger.title',
    description: 'matthias_leidinger.description',
    image: rockImg,
    color: '#ffffff',
  },
  {
    title: 'clement_chapillon.title',
    description: 'clement_chapillon.description',
    image: treeImg,
    color: '#c5b09c',
  },
  {
    title: 'zissou.title',
    description: 'zissou.description',
    image: waterImg,
    color: '#d8a291',
  },
  {
    title: 'mathias_svold_ulrik_hasemann.title',
    description: 'mathias_svold_ulrik_hasemann.description',
    image: houseImg,
    color: '#D2E8C8',
  },
  {
    title: 'mark_rammers.title',
    description: 'mark_rammers.description',
    image: cactusImg,
    color: '#EAE8E1',
  },
];

export const servicesData = [
  {
    title: 'development.title',
    icon: developmentIcon,
    content: 'development.content',
  },
  {
    title: 'mobile.title',
    icon: mobileIcon,
    content: 'mobile.content',
  },
  {
    title: 'web.title',
    icon: codeIcon,
    content: 'web.content',
  },
  {
    title: 'cloud.title',
    icon: cloudIcon,
    content: 'cloud.content',
  },
];
