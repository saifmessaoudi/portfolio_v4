import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const glowPulse = keyframes`
  0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.05); }
`;

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    max-width: 80vw;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124, 106, 255, 0.06) 0%, transparent 70%);
    filter: blur(60px);
    pointer-events: none;
    z-index: -1;
    animation: ${glowPulse} 4s ease-in-out infinite;

    @media (max-width: 768px) {
      width: 250px;
      height: 250px;
    }
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
    letter-spacing: 0.05em;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    background: var(--gradient-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 20px;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What's Next?</h2>

      <h2 className="title">Let's Build Together</h2>

      <p>
        I'm always open to discussing new opportunities, interesting projects, or just having a chat
        about mobile development. Feel free to reach out!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
