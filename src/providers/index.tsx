'use client';

import {FC} from 'react';

import {IChildren, IParams} from '@/types';
import {HeroUIProvider} from '@heroui/react';
import Header from '@/components/header';

const Providers: FC<IChildren & IParams> = ({children, locale}) => (
  <HeroUIProvider className="relative" locale={locale}>
    <Header />
    {children}
  </HeroUIProvider>
);

export default Providers;
