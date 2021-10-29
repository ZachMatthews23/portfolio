import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './MainStyles';

const Main = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello and Welcome to <br/>
        my Professional Portfolio
      </SectionTitle>
      <SectionText>
        This is where I want to talk about how I can add value and some of my strengths.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/zachary-matthews-734647171/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Main;