import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    text-align: justify;
    text-indent: 50px;
    margin: 20px 0 0;
    max-width: 1000px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Tajim Khot.</h2>;
  const three = <h3 className="big-heading1">I develop products for the ERP Ecosystem.</h3>;
  const four = (
    <p>
      Welcome to my profile! With a B.Eng. Computer Engineering. I bring over 8 years of dedicated
      experience in the ERP and software industry. As a seasoned Epicor Technical Consultant, my
      expertise revolves around Kinetic Epicor ERP (Epicor 9/10) and iScala ERP solutions.
    </p>
  );

  const four1 = (
    <p>
      A result-oriented professional with over 8 years experienced in system integration, database
      scripting, customizations, business intelligence, development, and ERP upgrades since 2014.
      Developed solutions for a variety of clients, including Fortune 500 clients.
    </p>
  );

  const four2 = (
    <p>
      Expertise in Epicor 9/10 ERP and iScala ERP Customizations, BI, Develop and conduct
      unit/integration testing plans and procedures based upon system recommendations/requirements.
      Implemented Report Server system for iScala. Understand Business Processes for Epicor 9/10 ERP
      and iScala ERP.
    </p>
  );
  const four3 = (
    <p>
      Insightful knowledge of ERP business processes and building technical solution on ERP tool
      based on recommendation/requirement.
    </p>
  );

  const four4 = <p></p>;

  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, four1, four2, four3, four4, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
