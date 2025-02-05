'use client';

import {FC} from 'react';
import ReactLenis, {useLenis} from 'lenis/react';

import Header from '@/components/header';
import {IChildren, IParams} from '@/types';
import {HeroUIProvider} from '@heroui/react';
import Footer from '@/components/footer';

const Providers: FC<IChildren & IParams> = ({children, locale}) => {
  useLenis();

  return (
    <ReactLenis root>
      <HeroUIProvider className="relative" locale={locale}>
        <Header />
        {children}
        <Footer />
      </HeroUIProvider>
    </ReactLenis>
  );
};

export default Providers;
