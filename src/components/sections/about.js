import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled, { keyframes } from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const skillFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-8px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      color: var(--text-secondary);
      transition: color 0.2s var(--ease-smooth);
      opacity: 0;
      animation: ${skillFadeIn} 0.4s var(--ease-out-expo) forwards;

      ${Array.from(
    { length: 10 },
    (_, i) => `&:nth-child(${i + 1}) { animation-delay: ${i * 60 + 200}ms; }`,
  ).join('\n      ')}

      &:before {
        content: '\\25B9';
        position: absolute;
        left: 0;
        color: var(--accent);
        font-size: var(--fz-sm);
        line-height: 12px;
      }

      &:hover {
        color: var(--accent);
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 40px auto 0;
    width: 60%;
    max-width: 250px;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-card);
    transition: var(--transition-slow);

    &:hover,
    &:focus {
      outline: 0;
      transform: translateY(-5px);
      box-shadow: var(--shadow-card-hover);

      .img {
        filter: brightness(1.02) contrast(1.01);
        transform: scale(1.02);
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius-lg);
      filter: brightness(1) contrast(1);
      transition: var(--transition-slow);
    }

    &:before {
      display: none;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius-lg);
      border: 2px solid var(--border);
      top: 14px;
      left: 14px;
      z-index: -1;
      transition: var(--transition);

      @media (max-width: 480px) {
        top: 10px;
        left: 10px;
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Flutter',
    'Kotlin',
    'Dart',
    'Java',
    'Firebase',
    'TypeScript',
    'Node.js',
    'Swift',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I am a mobile software engineer with a passion for crafting elegant and efficient
              applications.
            </p>
            <p>
              I thrive on turning complex problems into intuitive, delightful mobile experiences
              that users love.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
