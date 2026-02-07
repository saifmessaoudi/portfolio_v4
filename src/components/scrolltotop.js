import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IconArrowUp } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledScrollButton = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  width: 48px;
  height: 48px;
  bottom: 30px;
  right: 75px;
  z-index: 10;
  background: var(--bg-glass-strong);
  backdrop-filter: blur(20px) saturate(1.5);
  -webkit-backdrop-filter: blur(20px) saturate(1.5);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-full);
  color: var(--accent);
  cursor: pointer;
  transition: var(--transition);
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(20px)')};

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    bottom: 20px;
    right: 20px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    bottom: 15px;
    right: 15px;
  }

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover,
  &:focus {
    outline: none;
    background-color: var(--accent);
    border-color: var(--accent);
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: var(--shadow-glow-strong);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    let ticking = false;

    const checkScrollTop = () => {
      const scrollY = window.pageYOffset;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (scrollY > 300) {
            setShowScroll(true);
          } else {
            setShowScroll(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', checkScrollTop, { passive: true });
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <StyledScrollButton
      show={showScroll}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      type="button">
      <IconArrowUp />
    </StyledScrollButton>
  );
};

export default ScrollToTop;
