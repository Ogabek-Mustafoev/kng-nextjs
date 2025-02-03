'use server';

import {setRequestLocale} from 'next-intl/server';

import {IProps} from '@/types';
import Hero from '@/components/hero';

export default async function Home({params}: Readonly<IProps>) {
  const locale = (await params)?.locale;

  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <></>
    </>
  );
}
