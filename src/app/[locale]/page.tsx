'use server';

import {setRequestLocale} from 'next-intl/server';

import {IProps} from '@/types';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import OurProjects from '@/components/our-projects';

export default async function Home({params}: Readonly<IProps>) {
  const locale = (await params)?.locale;

  setRequestLocale(locale);

  return (
    <main className="flex flex-col gap-20 px-10">
      <Hero />
      <OurProjects />
      <Services />
      <About />
    </main>
  );
}
