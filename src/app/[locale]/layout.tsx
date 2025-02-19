'use server';

import {FC} from 'react';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';

import Providers from '@/providers';
import {locales} from '@/constants';
import {IChildren, IProps} from '@/types';

import '@/styles/globals.scss';
import GradientBg from '@/components/gradient-bg';

const inter = Inter({subsets: ['latin']});

export async function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

const RootLayout: FC<IChildren & IProps> = async ({children, params}) => {
  const locale = (await params)?.locale;

  const messages = await getMessages();

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers locale={locale}>{children}</Providers>
        </NextIntlClientProvider>
        <GradientBg />
      </body>
    </html>
  );
};

export default RootLayout;
