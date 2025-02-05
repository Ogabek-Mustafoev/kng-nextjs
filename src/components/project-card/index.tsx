import Image from 'next/image';
import {FC, useRef} from 'react';
import {useTranslations} from 'next-intl';
import {MotionValue, motion, useScroll, useTransform} from 'framer-motion';

import {projects} from '@/constants/data';

interface IProjectCard {
  idx: number;
  range: number[];
  targetScale: number;
  project: (typeof projects)[0];
  progress: MotionValue<number>;
}

export const ProjectCard: FC<IProjectCard> = (props) => {
  const {
    idx,
    range,
    progress,
    targetScale,
    project: {color, image, description, title},
  } = props;
  const t = useTranslations('projects');

  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div
      ref={container}
      className="sticky top-[20vh] flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: ` ${idx * 10}px`,
          backgroundColor: color,
        }}
        className="relative flex h-[550px] w-full origin-top flex-col rounded-3xl p-12"
      >
        <h2 className="text-center text-3xl">{t(title)}</h2>
        <div className="mt-14 flex h-full gap-12">
          <div className="w-2/5">
            <p className="recoleta first-letter:text-2xl">{t(description)}</p>
          </div>
          <div className="h-full w-3/5 overflow-hidden rounded-2xl">
            <motion.div
              className="relative h-full w-full"
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={image}
                alt="image"
                loading="lazy"
                placeholder="blur"
                className="absolute object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
