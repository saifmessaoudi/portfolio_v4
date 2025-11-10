import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IconArrowUp } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledScrollButton = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 30px;
  right: 75px;
  z-index: 10;
  background-color: var(--green-tint);
  border: 1px solid var(--green);
  border-radius: 50%;
  color: var(--green);
  cursor: pointer;
  transition: var(--transition);
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(20px)')};

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
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
    width: 20px;
    height: 20px;

    @media (max-width: 480px) {
      width: 18px;
      height: 18px;
    }
  }

  &:hover,
  &:focus {
    outline: none;
    background-color: var(--green);
    color: var(--navy);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.4);
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
