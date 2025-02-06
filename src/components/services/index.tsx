'use client';

import Image from 'next/image';
import {FC, useState} from 'react';
import {motion} from 'framer-motion';
import parse from 'html-react-parser';
import {useTranslations} from 'next-intl';

import {servicesImages} from '@/constants';
import {servicesData} from '@/constants/data';

const Services: FC = () => {
  const t = useTranslations('services');
  const [index, setIndex] = useState(0);

  return (
    <section
      id="services"
      className="rounded-3xl bg-gradient-to-b from-white to-transparent py-20"
    >
      <div className="container flex flex-col gap-20">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h1 className="recoleta text-5xl">{t('title')}</h1>
          <p className="mx-auto max-w-2xl">{t('subtitle')}</p>
        </div>
        <div className="relative grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-16">
            {servicesData.map(({title, content, icon}, idx) => (
              <motion.div
                key={content}
                viewport={{amount: 1}}
                className="flex flex-col gap-5"
                onViewportEnter={() => setIndex(idx)}
              >
                <div className="flex w-max items-center gap-3 rounded-full border px-2 py-1">
                  <Image src={icon} alt={content} className="h-8 w-8" />
                  <h2 className="text-lg">{t(title)}</h2>
                </div>
                <div className="text-3xl leading-relaxed">
                  {parse(t.raw(content))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="sticky top-1/4 h-96">
            {servicesImages.map((image, idx) => (
              <Image
                src={image}
                key={idx + '-image'}
                alt={idx + '-image'}
                className={`absolute right-0 top-0 ml-auto w-11/12 ${idx === index ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
