import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Greetings and Welcome to <br/>
        my Professional Portfolio
      </SectionTitle>
      <SectionText>
        This is where I want to talk about how I can add value and some of my strengths.
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;