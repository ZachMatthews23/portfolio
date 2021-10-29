import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './MainStyles';

const Main = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome, I'm Zach Matthews <br/>
        Full Stack Web Developer
      </SectionTitle>
      <SectionText>
        Dedicated to learning | Leadership abilities | Relentless work ethic
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/zachary-matthews-734647171/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Main;