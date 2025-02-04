'use client';

import {FC, useRef} from 'react';
import {useScroll} from 'framer-motion';

import {projects} from '@/constants/data';
import {ProjectCard} from '@/components/project-card';

const OurProjects: FC = () => {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={container} id="projects" className="container relative mb-80">
      <h1 className="recoleta text-center text-3xl font-semibold">
        Our Projects
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-center">
        Our work combines modern innovations and practical solutions, ensuring
        unique and effective results for each project.
      </p>
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
    </section>
  );
};

export default OurProjects;
