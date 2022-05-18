import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Demonstrating my ability to start front end development and working on
        backend development that incorporates micropayments using the BitcoinSV
        block chain.
      </SectionText>
      <Button onClick={() => (window.location = 'https://pegged.digital')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
