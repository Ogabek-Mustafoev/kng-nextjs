import {StaticImageData} from 'next/image';

import {TLocale} from '@/types';
import webImg from '@/assets/images/web.png';
import cloudImg from '@/assets/images/cloud.png';
import mobileImg from '@/assets/images/mobile.png';
import developmentImg from '@/assets/images/development.png';

export const locales: TLocale[] = ['en', 'ru', 'uz'];

export const servicesImages: StaticImageData[] = [
  developmentImg,
  mobileImg,
  webImg,
  cloudImg,
];
