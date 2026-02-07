import { css } from 'styled-components';

const button = css`
  color: var(--accent);
  background-color: transparent;
  border: 1px solid var(--accent);
  border-radius: var(--border-radius-sm);
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  padding: 1.25rem 1.75rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--accent);
    opacity: 0;
    transition: opacity 0.3s var(--ease-smooth);
    z-index: -1;
  }

  &:hover,
  &:focus-visible {
    outline: none;
    color: #ffffff;
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
    &:before {
      opacity: 1;
    }
  }
  &:after {
    display: none !important;
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--accent);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    position: relative;
    color: var(--accent);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--accent-hover);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--accent-hover) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background: var(--gradient-primary);
      opacity: 0.6;
      @media (prefers-reduced-motion: no-preference) {
        transition: var(--transition);
      }
    }
  `,

  button,

  smallButton: css`
    color: var(--accent);
    background-color: transparent;
    border: 1px solid var(--accent);
    border-radius: var(--border-radius-sm);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--accent);
      opacity: 0;
      transition: opacity 0.3s var(--ease-smooth);
      z-index: -1;
    }

    &:hover,
    &:focus-visible {
      outline: none;
      color: #ffffff;
      transform: translateY(-2px);
      box-shadow: var(--shadow-glow);
      &:before {
        opacity: 1;
      }
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: #ffffff;
    background: var(--gradient-primary);
    border: none;
    border-radius: var(--border-radius-sm);
    padding: 1.25rem 2rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--gradient-primary-hover);
      opacity: 0;
      transition: opacity 0.3s var(--ease-smooth);
    }

    &:hover,
    &:focus-visible {
      outline: none;
      transform: translateY(-3px);
      box-shadow: var(--shadow-glow-strong);
      color: #ffffff;
      &:before {
        opacity: 1;
      }
    }
    &:after {
      display: none !important;
    }

    span {
      position: relative;
      z-index: 1;
    }
  `,

  glassCard: css`
    background: var(--bg-glass);
    backdrop-filter: blur(30px) saturate(1.2);
    -webkit-backdrop-filter: blur(30px) saturate(1.2);
    border: 1px solid var(--bg-glass-border);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-card);
    transition: var(--transition-slow);

    &:hover {
      border-color: var(--bg-glass-border-hover);
      background: var(--bg-glass-strong);
      box-shadow: var(--shadow-card-hover);
    }
  `,

  boxShadow: css`
    box-shadow: var(--shadow-md);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      box-shadow: var(--shadow-lg);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '\\25B9';
        position: absolute;
        left: 0;
        color: var(--accent);
      }
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;
