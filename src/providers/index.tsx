'use client';

import {FC} from 'react';
import ReactLenis, {useLenis} from 'lenis/react';

import Header from '@/components/header';
import {IChildren, IParams} from '@/types';
import {HeroUIProvider} from '@heroui/react';

const Providers: FC<IChildren & IParams> = ({children, locale}) => {
  useLenis();

  return (
    <ReactLenis root>
      <HeroUIProvider className="relative" locale={locale}>
        <Header />
        <main className="min-h-[200vh]">{children}</main>
      </HeroUIProvider>
    </ReactLenis>
  );
};

export default Providers;
