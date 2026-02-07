import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';
import TransitionStyles from './TransitionStyles'; // eslint-disable-line no-unused-vars
import PrismStyles from './PrismStyles'; // eslint-disable-line no-unused-vars

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--accent);
    color: #ffffff;
  }

  :focus {
    outline: 2px dashed var(--accent);
    outline-offset: 3px;
  }

  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }

  :focus-visible {
    outline: 2px dashed var(--accent);
    outline-offset: 3px;
  }

  /* Scrollbar — light theme */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--accent-muted) var(--bg-secondary);
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--accent-muted);
    border: 1px solid var(--bg-secondary);
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--navy);
    color: var(--text-secondary);
    font-family: var(--font-sans);
    font-size: var(--fz-lg);
    line-height: 1.6;
    letter-spacing: -0.01em;

    @media (max-width: 480px) {
      font-size: var(--fz-md);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      #content > * {
        filter: blur(5px) brightness(0.95);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
    overflow-x: hidden;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 100px 150px 100px calc(150px + var(--sidebar-width));

    @media (max-width: 1080px) {
      padding: 100px 100px 100px calc(100px + var(--sidebar-width));
    }
    @media (max-width: 768px) {
      padding: 80px 24px 80px calc(24px + var(--sidebar-width-mobile));
    }
    @media (max-width: 480px) {
      padding: 60px 16px 60px calc(16px + var(--sidebar-width-mobile));
    }

    &.fillHeight {
      padding: 0 150px 0 calc(150px + var(--sidebar-width));

      @media (max-width: 1080px) {
        padding: 0 100px 0 calc(100px + var(--sidebar-width));
      }
      @media (max-width: 768px) {
        padding: 0 24px 0 calc(24px + var(--sidebar-width-mobile));
      }
      @media (max-width: 480px) {
        padding: 0 16px 0 calc(16px + var(--sidebar-width-mobile));
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--text-bright);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 72px);
    font-weight: 700;
    letter-spacing: -0.04em;
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }
    .small-heading {
    margin: 0;
    font-size: clamp(16px, 4vw, var(--fz-heading));
  
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(24px, 5vw, var(--fz-heading));
    white-space: nowrap;

    @media (max-width: 480px) {
      margin: 10px 0 30px;
    }

    &:before {
      position: relative;
      bottom: 2px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--accent);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -1px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background: var(--border);
      flex-shrink: 1;
      min-width: 0;

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
      @media (max-width: 480px) {
        display: none;
      }
    }
  }

  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--accent);
    }

    &.inline-link {
      \${({ theme }) => theme.mixins.inlineLink};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      \${({ theme }) => theme.mixins.inlineLink};
    }

    & > code {
      background-color: var(--light-navy);
      color: var(--accent);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius-sm);
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
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
    }
  }

  blockquote {
    border-left-color: var(--accent);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: var(--lightest-navy);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .skip-to-content {
    \${({ theme }) => theme.mixins.button};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:hover,
    &:focus {
      background-color: var(--accent);
      color: #ffffff;
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
      box-shadow: none;
      transform: none;
    }
  }

  #logo {
    color: var(--accent);
  }

  .overline {
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {
    color: var(--accent);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      \${({ theme }) => theme.mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: var(--accent);

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      \${({ theme }) => theme.mixins.inlineLink};
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  /* Ambient background mesh — very subtle, barely visible */
  .gradient-mesh {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 0;
    background:
      radial-gradient(ellipse at 15% 50%, rgba(124, 106, 255, 0.04) 0%, transparent 50%),
      radial-gradient(ellipse at 85% 20%, rgba(0, 201, 160, 0.03) 0%, transparent 50%);
  }

  \${TransitionStyles};

  \${PrismStyles};
`;

export default GlobalStyle;
