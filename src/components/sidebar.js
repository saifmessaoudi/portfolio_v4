import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { navLinks, socialMedia } from '@config';
import { navDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { Icon, IconLogo, IconUser, IconBriefcase, IconLayers, IconMail } from '@components/icons';

const navIcons = {
  About: IconUser,
  Experience: IconBriefcase,
  Work: IconLayers,
  Contact: IconMail,
};

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 4px rgba(124, 106, 255, 0.12); }
  50% { box-shadow: 0 0 10px rgba(124, 106, 255, 0.3); }
`;

const staggerIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* ===== Sidebar — icons only, solid, premium ===== */
const StyledSidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: var(--sidebar-width);
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0 24px;
  background: var(--bg-elevated);
  border-right: 1px solid var(--border);
  box-shadow: var(--shadow-xs);

  @media (max-width: 768px) {
    width: var(--sidebar-width-mobile);
    padding: 20px 0 16px;
  }
`;

const StyledLogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-bottom: 32px;
  opacity: 0;
  animation: ${staggerIn} 0.5s var(--ease-out-expo) 100ms forwards;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  a {
    display: flex;
    align-items: center;
    color: var(--accent);
    width: 32px;
    height: 32px;
    transition: var(--transition);

    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }

    &:hover {
      transform: scale(1.08);
    }

    svg {
      fill: none;
      transition: var(--transition);
    }
  }
`;

const StyledProgressBar = styled.div`
  width: 2px;
  height: 60px;
  background: var(--border);
  border-radius: var(--border-radius-full);
  margin: 0 auto 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 40px;
    margin: 0 auto 16px;
  }
`;

const StyledProgressFill = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: var(--border-radius-full);
  background: var(--gradient-primary);
  transition: height 0.3s var(--ease-out-expo);
  height: ${props => props.progress}%;
`;

const StyledNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const activeIndicator = css`
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scaleY(1);
    width: 3px;
    height: 24px;
    background: var(--gradient-primary);
    border-radius: 0 var(--border-radius-full) var(--border-radius-full) 0;
    transition: transform 0.3s var(--ease-spring);
    animation: indicatorIn 0.3s var(--ease-spring);

    @media (max-width: 768px) {
      height: 20px;
    }
  }

  @keyframes indicatorIn {
    from {
      transform: translateY(-50%) scaleY(0);
    }
    to {
      transform: translateY(-50%) scaleY(1);
    }
  }
`;

const StyledNavItem = styled.li`
  width: 100%;
  position: relative;
  opacity: 0;
  animation: ${staggerIn} 0.4s var(--ease-out-expo) forwards;
  animation-delay: ${props => props.index * 70 + 200}ms;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 0;
    color: var(--text-muted);
    text-decoration: none;
    position: relative;
    transition: all 0.2s var(--ease-smooth);
    -webkit-tap-highlight-color: transparent;

    ${props => props.isActive && activeIndicator}

    ${props =>
    props.isActive &&
      css`
        color: var(--accent);
      `}

    &:hover {
      color: var(--accent);
    }

    &:active {
      transform: scale(0.9);
    }

    svg {
      width: 19px;
      height: 19px;
      transition: transform 0.2s var(--ease-smooth);

      @media (max-width: 768px) {
        width: 17px;
        height: 17px;
      }
    }

    &:hover svg {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      padding: 10px 0;
    }
  }

  /* Tooltip on hover */
  &::after {
    content: '${props => props.label}';
    position: absolute;
    left: calc(100% + 10px);
    top: 50%;
    transform: translateY(-50%) translateX(-4px);
    padding: 5px 10px;
    background: var(--text-bright);
    color: var(--bg-elevated);
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.02em;
    border-radius: var(--border-radius-sm);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: all 0.2s var(--ease-smooth);
    z-index: 100;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
`;

const StyledVisitedDot = styled.span`
  position: absolute;
  top: 8px;
  right: 18px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${props => (props.isActive ? 'var(--accent)' : 'var(--accent-secondary)')};
  transition: var(--transition);
  animation: ${props => (props.isActive ? pulseGlow : 'none')} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    right: 12px;
    top: 6px;
    width: 3px;
    height: 3px;
  }
`;

const StyledSocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-top: auto;
  padding-top: 16px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding-top: 8px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
    color: var(--text-muted);
    transition: var(--transition);
    opacity: 0;
    animation: ${staggerIn} 0.4s var(--ease-out-expo) forwards;

    @media (max-width: 768px) {
      padding: 5px;
    }

    &:hover {
      color: var(--accent);
      transform: translateY(-2px);
    }

    svg {
      width: 15px;
      height: 15px;

      @media (max-width: 768px) {
        width: 13px;
        height: 13px;
      }
    }
  }
`;

/* ===== Resume — fixed top-right pill ===== */
const StyledResumeButton = styled.div`
  position: fixed;
  top: 24px;
  right: 28px;
  z-index: 11;

  @media (max-width: 768px) {
    top: 16px;
    right: 16px;
  }

  a {
    ${({ theme }) => theme.mixins.smallButton};
    font-size: var(--fz-xxs);
    padding: 10px 20px;
    border-radius: var(--border-radius-full);
    letter-spacing: 0.04em;
    background: var(--bg-elevated);
    box-shadow: var(--shadow-card);

    @media (max-width: 480px) {
      padding: 8px 16px;
      font-size: 10px;
    }
  }
`;

const Sidebar = ({ isHome }) => {
  const [activeSection, setActiveSection] = useState('');
  const [visitedSections, setVisitedSections] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(!isHome);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Mount animation
  useEffect(() => {
    if (!isHome || prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const sectionIds = navLinks.map(({ url }) => url.replace('/#', ''));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            setActiveSection(id);
            setVisitedSections(prev => {
              const next = new Set(prev);
              next.add(id);
              return next;
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' },
    );

    const timeout = setTimeout(() => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  // Scroll progress
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset;
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
          setScrollProgress(Math.min(100, Math.max(0, progress)));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  const sidebarContent = (
    <>
      <StyledLogoSection>
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Home">
          <IconLogo />
        </a>
      </StyledLogoSection>

      <StyledProgressBar>
        <StyledProgressFill progress={scrollProgress} />
      </StyledProgressBar>

      <StyledNavList>
        {navLinks.map(({ url, name }, i) => {
          const sectionId = url.replace('/#', '');
          const isActive = activeSection === sectionId;
          const isVisited = visitedSections.has(sectionId);
          const NavIcon = navIcons[name];

          return (
            <StyledNavItem key={url} isActive={isActive} label={name} index={i}>
              <Link to={url} aria-label={name}>
                {NavIcon && <NavIcon />}
                {isVisited && <StyledVisitedDot isActive={isActive} />}
              </Link>
            </StyledNavItem>
          );
        })}
      </StyledNavList>

      <StyledSocialSection>
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <a
              key={name}
              href={url}
              aria-label={name}
              target="_blank"
              rel="noreferrer"
              style={{ animationDelay: `${(navLinks.length + i) * 70 + 400}ms` }}>
              <Icon name={name} />
            </a>
          ))}
      </StyledSocialSection>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar — icons only */}
      {prefersReducedMotion ? (
        <StyledSidebar>{sidebarContent}</StyledSidebar>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={isHome ? 'fadein' : ''} timeout={isHome ? navDelay : 0}>
              <StyledSidebar>{sidebarContent}</StyledSidebar>
            </CSSTransition>
          )}
        </TransitionGroup>
      )}

      {/* Resume — fixed top-right pill */}
      <StyledResumeButton>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </StyledResumeButton>
    </>
  );
};

Sidebar.propTypes = {
  isHome: PropTypes.bool,
};

export default Sidebar;
