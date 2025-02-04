import Image from 'next/image';
import {FC, useRef} from 'react';
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

  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          backgroundColor: color,
          top: `calc(15vh + ${idx * 25}px)`,
        }}
        className="relative flex h-[500px] w-full origin-top flex-col rounded-3xl p-12"
      >
        <h2 className="text-center text-3xl">{title}</h2>
        <div className="mt-14 flex h-full gap-12">
          <div className="w-2/5">
            <p className="recoleta first-letter:text-2xl">{description}</p>
          </div>
          <div className="relative h-full w-3/5 overflow-hidden rounded-2xl">
            <motion.div className="h-full w-full" style={{scale: imageScale}}>
              <Image className="object-cover" fill src={image} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
