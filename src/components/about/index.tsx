'use client';

import quoteIcon from '@/assets/icons/quote.svg';
import rocketImg from '@/assets/images/rocket.png';

import {FC} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

const About: FC = () => {
  const t = useTranslations('about');

  return (
    <section
      id="about"
      className="to-lightWhite rounded-3xl bg-gradient-to-b from-transparent pb-10"
    >
      <div className="container flex flex-col gap-14">
        <h1 className="recoleta text-center text-5xl">{t('title')}</h1>
        <div className="grid grid-cols-2 gap-5 text-gray-500">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-2 rounded-2xl bg-[#D2E8C8] px-3 pb-2 pt-5 text-lime-700">
              <h2 className="recoleta text-3xl font-bold">
                {t('mission.title')}
              </h2>
              <p className="mb-10 text-lg font-light">{t('mission.text')}</p>
              <Image
                alt="quote"
                src={quoteIcon}
                className="mt-auto opacity-50"
              />
            </div>
            <div className="grid grid-rows-2 gap-5">
              <Image
                className="h-full w-full rounded-2xl object-cover"
                src={rocketImg}
                alt="rocket"
              />
              <div className="flex flex-col gap-2 rounded-2xl bg-[#E5DBEB] px-3 pb-2 pt-5">
                <p className="mb-28 text-xl font-semibold">{t('text')}</p>
                <Image
                  alt="quote"
                  src={quoteIcon}
                  className="mt-auto opacity-50"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-2xl bg-[#DCE4EA] px-3 pb-2 pt-5">
            <p className="mb-10 text-xl font-semibold">{t('description')}</p>
            <Image alt="quote" src={quoteIcon} className="mt-auto opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
