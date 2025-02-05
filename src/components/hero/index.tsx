'use client';

import {FC} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, FreeMode} from 'swiper/modules';

import {array} from '@/constants/data';
import {Button, Divider} from '@heroui/react';
import heroImg from '@/assets/images/hero.webp';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero: FC = () => {
  const t = useTranslations('hero');

  return (
    <section className="custom-height flex flex-col items-center justify-center gap-28">
      <div className="container">
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
              priority
              src={heroImg}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl">
        <Swiper
          loop
          freeMode
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
          }}
          noSwiping
          speed={5000}
          spaceBetween={5}
          slidesPerView={2}
          slidesPerGroup={1}
          allowTouchMove={false}
          wrapperClass="!ease-linear"
          className="mySwiper gradient"
          modules={[Autoplay, FreeMode]}
          noSwipingClass="swiper-no-swiping"
          breakpoints={{
            768: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 9,
            },
            1280: {
              slidesPerView: 9,
              spaceBetween: 10,
            },
          }}
        >
          <div />
          {array.map((num) => (
            <SwiperSlide key={num + 'slide'} className="swiper-no-swiping">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white">
                <p className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 font-semibold">
                  {num}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
