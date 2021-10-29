import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineRocket } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, Profile } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:484-797-0667">484-797-0667</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:zachmatthews010@gmail.com">zachmatthews010@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Resume</LinkTitle>
          <LinkItem href="../images/resume.pdf">Resume</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <Profile src="../images/profile.png" />
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan style={{ marginLeft: '-10px'}}>Together We Can Build The Future <AiOutlineRocket style={{marginBottom: '-3px'}} /></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/ZachMatthews23">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/zachary-matthews-734647171/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
