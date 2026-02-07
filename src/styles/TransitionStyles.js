import { css } from 'styled-components';

const TransitionStyles = css`
  /* ===== Fade Up — primary section reveal ===== */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(24px);
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 800ms var(--ease-out-expo), transform 800ms var(--ease-out-expo);
  }

  /* ===== Fade Down ===== */
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 400ms var(--ease-out-quint), transform 400ms var(--ease-out-quint);
  }

  /* ===== Fade — simple opacity ===== */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--ease-smooth);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--ease-smooth);
  }

  /* ===== Fade In from Left — sidebar entrance ===== */
  .fadein-enter {
    opacity: 0.01;
    transform: translateX(-12px);
  }
  .fadein-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms var(--ease-out-expo), transform 500ms var(--ease-out-expo);
  }

  /* ===== Scale Up — card / badge reveal ===== */
  .scaleup-enter {
    opacity: 0.01;
    transform: scale(0.9);
  }
  .scaleup-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 700ms var(--ease-out-expo), transform 700ms var(--ease-spring);
  }

  /* ===== Blur In — premium text reveal ===== */
  .blurin-enter {
    opacity: 0.01;
    filter: blur(12px);
    transform: translateY(6px) scale(0.98);
  }
  .blurin-enter-active {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0px) scale(1);
    transition: opacity 900ms var(--ease-out-expo), filter 900ms cubic-bezier(0.16, 1, 0.3, 1),
      transform 900ms var(--ease-out-expo);
  }

  /* ===== Slide Up — gentle rise for descriptions/CTAs ===== */
  .slideup-enter {
    opacity: 0.01;
    transform: translateY(16px);
  }
  .slideup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
      transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export default TransitionStyles;
