import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const projectsDemo = [
  {
    title: 'Project1',
    description: 'This is a really long descr ab this proj',
  },
  {
    title: 'Project2',
    description: 'This is a really long descr ab this proj',
  },
  {
    title: 'Project3',
    description: 'This is a really long descr ab this proj',
  },
  {
    title: 'Project4',
    description: 'This is a really long descr ab this proj',
  },
];
const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projectsDemo.map((project) => (
        <div>
          {project.title}
          <br />
          {project.description}
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
