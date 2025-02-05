'use client';

import {FC, useRef} from 'react';
import {useScroll} from 'framer-motion';
import {useTranslations} from 'next-intl';

import {projects} from '@/constants/data';
import {ProjectCard} from '@/components/project-card';

const OurProjects: FC = () => {
  const container = useRef(null);
  const t = useTranslations('projects');
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="rounded-3xl bg-gradient-to-b from-transparent to-white pb-20"
    >
      <div ref={container} className="container sticky flex flex-col gap-16">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h1 className="recoleta text-5xl">{t('title')}</h1>
          <p className="mx-auto max-w-xl">{t('subtitle')}</p>
        </div>

        {projects.map((project, idx) => (
          <ProjectCard
            idx={idx}
            project={project}
            key={project?.color}
            range={[idx * 0.25, 1]}
            progress={scrollYProgress}
            targetScale={1 - (projects.length - idx) * 0.05}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
