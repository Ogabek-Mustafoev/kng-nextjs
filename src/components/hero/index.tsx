'use client';

import {FC} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

import {Button, Divider} from '@heroui/react';
import heroImg from '@/assets/images/hero.webp';

const Hero: FC = () => {
  const t = useTranslations('hero');

  return (
    <section className="container mt-20 flex flex-col gap-10">
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col items-baseline gap-6">
          <h1 className="recoleta text-6xl leading-tight">{t('title')}</h1>
          <Button color="primary" size="lg">
            {t('btnText')}
          </Button>
          <Divider />
          <p className="max-w-sm leading-relaxed">{t('subTitle')}</p>
        </div>
        <div className="group overflow-hidden rounded-xl">
          <Image
            alt="hero"
            src={heroImg}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
