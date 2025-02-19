'use client';

import {FC} from 'react';
import {useTranslations} from 'next-intl';
import {Button} from '@heroui/react';

const Footer: FC = () => {
  const t = useTranslations('footer');
  return (
    <footer className="relative h-screen min-h-screen p-10">
      <div className="to-lightWhite grid h-full w-full place-items-center rounded-3xl bg-gradient-to-b from-transparent">
        <div className="container text-center">
          <div className="relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-full bg-lime-600 bg-opacity-40 py-24">
            <h1 className="recoleta max-w-lg text-5xl leading-tight">
              {t('title')}
            </h1>
            <p className="mb-10 text-xl font-medium">{t('subtitle')}</p>
            <Button size="lg" color="primary">
              {t('contact')}
            </Button>
            <div className="absolute left-0 top-0 h-[46%] w-1/5 rounded-br-[7rem] bg-red-600 bg-gradient-to-b from-lime-700 to-lime-50" />
            <div className="absolute right-0 top-0 h-[46%] w-1/5 rounded-bl-[7rem] bg-red-600 bg-gradient-to-bl from-lime-700 to-lime-100" />
            <div className="absolute bottom-0 left-0 h-[46%] w-1/5 rounded-tr-[7rem] bg-red-600 bg-gradient-to-tr from-lime-700 to-lime-100" />
            <div className="absolute bottom-0 right-0 h-[46%] w-1/5 rounded-tl-[7rem] bg-red-600 bg-gradient-to-tl from-lime-700 to-lime-100" />
          </div>
          <p className="mt-20 font-light text-gray-500">{t('company')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
