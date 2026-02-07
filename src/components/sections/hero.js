import React from 'react';
import styled, { keyframes } from 'styled-components';
import { usePrefersReducedMotion } from '@hooks';

const subtlePulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.02); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const lineGrow = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

const heroFadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  position: relative;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--space-24);
  }

  @media (max-width: 480px) {
    min-height: 100vh;
    justify-content: center;
  }

  .hero-item {
    opacity: 0;
    animation: ${heroFadeUp} 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .hero-item-0 {
    animation-delay: 100ms;
  }
  .hero-item-1 {
    animation-delay: 200ms;
  }
  .hero-item-2 {
    animation-delay: 350ms;
  }
  .hero-item-3 {
    animation-delay: 500ms;
  }
  .hero-item-4 {
    animation-delay: 650ms;
  }
  .hero-item-5 {
    animation-delay: 800ms;
  }
  .hero-item-6 {
    animation-delay: 950ms;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 28px 3px;
    padding: 6px 14px;
    background: var(--accent-subtle);
    border: 1px solid var(--bg-glass-border);
    border-radius: var(--border-radius-full);
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 500;
    letter-spacing: 0.04em;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
      font-size: var(--fz-xxs);
    }

    .badge-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent-secondary);
      animation: ${subtlePulse} 2s ease-in-out infinite;
    }
  }

  .hero-intro {
    margin: 0 0 16px 4px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
    letter-spacing: 0.03em;

    @media (max-width: 480px) {
      font-size: var(--fz-sm);
      margin: 0 0 12px 2px;
    }
  }

  .hero-name {
    margin: 0;
    line-height: 1.05;

    .gradient-name {
      background: linear-gradient(135deg, #7c6aff 0%, #00c9a0 50%, #7c6aff 100%);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: ${gradientShift} 6s ease-in-out infinite;
    }
  }

  .hero-tagline {
    margin-top: 10px;
    color: var(--text-secondary);
    line-height: 1.05;
    font-weight: 600;

    @media (max-width: 480px) {
      margin-top: 6px;
    }
  }

  .hero-divider {
    width: 60px;
    height: 2px;
    margin: 28px 0;
    background: var(--gradient-primary);
    border-radius: var(--border-radius-full);
    transform-origin: left;
    animation: ${lineGrow} 0.8s var(--ease-out-expo) 0.1s both;

    @media (max-width: 480px) {
      width: 40px;
      margin: 20px 0;
    }
  }

  .hero-description {
    margin: 0;
    max-width: 520px;
    line-height: 1.75;
    color: var(--text-secondary);
    font-size: var(--fz-lg);

    @media (max-width: 480px) {
      font-size: var(--fz-md);
    }
  }

  .cta-group {
    display: flex;
    gap: 14px;
    margin-top: 44px;
    flex-wrap: wrap;

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 12px;
      width: 100%;
      margin-top: 32px;
    }
  }

  .cta-primary {
    ${({ theme }) => theme.mixins.bigButton};

    @media (max-width: 480px) {
      width: 100%;
      text-align: center;
      justify-content: center;
    }
  }

  .cta-secondary {
    color: var(--text-secondary);
    background-color: transparent;
    border: 1.5px solid var(--border);
    border-radius: var(--border-radius-sm);
    padding: 1.25rem 2rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    @media (max-width: 480px) {
      width: 100%;
      text-align: center;
    }

    &:hover,
    &:focus-visible {
      outline: none;
      border-color: var(--accent);
      color: var(--accent);
      transform: translateY(-2px);
      box-shadow: var(--shadow-sm);
    }
    &:after {
      display: none !important;
    }
  }

  .hero-scroll-hint {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.5;
    transition: opacity 0.3s;

    @media (max-width: 768px) {
      display: none;
    }

    .scroll-line {
      width: 1px;
      height: 24px;
      background: var(--gradient-primary);
      border-radius: var(--border-radius-full);
      animation: scrollPulse 2s ease-in-out infinite;
    }

    @keyframes scrollPulse {
      0%,
      100% {
        opacity: 0.3;
        transform: scaleY(0.6);
      }
      50% {
        opacity: 1;
        transform: scaleY(1);
      }
    }
  }
`;

const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const items = [
    <div key="badge" className="hero-badge">
      <span className="badge-dot" />
      <span>Available for work</span>
    </div>,

    <p key="intro" className="hero-intro">
      Hey, my name is
    </p>,

    <h2 key="name" className="big-heading hero-name">
      <span className="gradient-name">Saif Messaoudi</span>
    </h2>,

    <h3 key="tagline" className="big-heading hero-tagline">
      I craft Mobile Experiences.
    </h3>,

    <div key="divider" className="hero-divider" />,

    <p key="description" className="hero-description">
      I'm a Mobile Software Engineer specializing in building exceptional native &amp;
      cross-platform applications. <br />
      Currently, I'm focused on developing and maintaining the core financial application at{' '}
      <a href="https://maaarpay.com" target="_blank" rel="noreferrer">
        MaaarPay
      </a>
      .
    </p>,

    <div key="cta" className="cta-group">
      <a className="cta-secondary" href="/#contact">
        Get In Touch
      </a>
    </div>,
  ];

  return (
    <StyledHeroSection>
      {items.map((item, i) => (
        <div key={i} className={prefersReducedMotion ? '' : `hero-item hero-item-${i}`}>
          {item}
        </div>
      ))}

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
