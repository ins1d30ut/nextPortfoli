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
      {projects.map(
        ({ id, image, title, description, tasks, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
