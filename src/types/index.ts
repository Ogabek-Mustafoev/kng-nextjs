import {ReactNode} from 'react';
import {StaticImageData} from 'next/image';

export type TLocale = 'en' | 'ru' | 'uz';

export interface IParams {
  locale: TLocale;
}

export interface IProps {
  params: Promise<IParams>;
}

export interface IChildren {
  children: ReactNode;
}

export interface ILinkData {
  href: string;
  text: string;
  image?: StaticImageData;
}
