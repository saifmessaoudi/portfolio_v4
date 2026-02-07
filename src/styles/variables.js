import { css } from 'styled-components';

const variables = css`
  :root {
    /* ========== V5.2 LIGHT PREMIUM DESIGN SYSTEM ========== */

    /* --- Color System: Light & Airy --- */
    --dark-navy: #f0f1fa;
    --navy: #f8f9fe;
    --light-navy: #e8eaf6;
    --lightest-navy: #dde0f0;
    --navy-shadow: rgba(124, 106, 255, 0.08);
    --dark-slate: #8a95b0;
    --slate: #5a6b8c;
    --light-slate: #4a5a78;
    --lightest-slate: #2a3150;
    --white: #1a1f3a;

    --green: #7c6aff;
    --green-tint: rgba(124, 106, 255, 0.08);
    --pink: #e855b5;
    --blue: #00c9a0;

    /* Primary accent */
    --accent: #7c6aff;
    --accent-hover: #6a55e8;
    --accent-muted: #9b8cff;
    --accent-glow: rgba(124, 106, 255, 0.18);
    --accent-subtle: rgba(124, 106, 255, 0.06);
    --accent-secondary: #00c9a0;
    --accent-secondary-hover: #00b090;
    --accent-secondary-glow: rgba(0, 201, 160, 0.15);
    --accent-tertiary: #e855b5;

    /* Surfaces */
    --bg-primary: #f8f9fe;
    --bg-secondary: #f0f2fa;
    --bg-elevated: #ffffff;
    --bg-card: rgba(255, 255, 255, 0.7);
    --bg-glass: rgba(255, 255, 255, 0.6);
    --bg-glass-strong: rgba(255, 255, 255, 0.85);
    --bg-glass-border: rgba(124, 130, 180, 0.12);
    --bg-glass-border-hover: rgba(124, 106, 255, 0.22);

    /* Text */
    --text-primary: #2a3150;
    --text-secondary: #5a6b8c;
    --text-muted: #8a95b0;
    --text-bright: #1a1f3a;

    /* Borders */
    --border: rgba(124, 130, 180, 0.12);
    --border-hover: rgba(124, 130, 180, 0.22);
    --border-active: rgba(124, 106, 255, 0.35);

    /* Surface tiers */
    --surface-1: #ffffff;
    --surface-2: #f6f7fc;
    --surface-3: #eef0f8;

    /* Shadows — soft, purple-tinted for premium feel */
    --shadow-xs: 0 1px 3px rgba(124, 106, 255, 0.06);
    --shadow-sm: 0 2px 8px rgba(124, 106, 255, 0.08);
    --shadow-md: 0 4px 20px rgba(124, 106, 255, 0.1);
    --shadow-lg: 0 8px 40px rgba(124, 106, 255, 0.12);
    --shadow-xl: 0 20px 60px rgba(124, 106, 255, 0.15);
    --shadow-glow: 0 0 40px rgba(124, 106, 255, 0.15), 0 4px 16px rgba(124, 106, 255, 0.1);
    --shadow-glow-strong: 0 0 50px rgba(124, 106, 255, 0.22), 0 8px 24px rgba(124, 106, 255, 0.14);
    --shadow-glow-secondary: 0 0 30px rgba(0, 201, 160, 0.15);
    --shadow-card: 0 2px 16px rgba(42, 49, 80, 0.06);
    --shadow-card-hover: 0 12px 40px rgba(124, 106, 255, 0.12);

    /* Gradients — soft pastel for light theme */
    --gradient-primary: linear-gradient(135deg, #7c6aff 0%, #00c9a0 100%);
    --gradient-primary-hover: linear-gradient(135deg, #6a55e8 0%, #00b090 100%);
    --gradient-subtle: linear-gradient(
      135deg,
      rgba(124, 106, 255, 0.08) 0%,
      rgba(0, 201, 160, 0.05) 100%
    );
    --gradient-text: linear-gradient(135deg, #7c6aff 0%, #00c9a0 60%);
    --gradient-card: linear-gradient(
      145deg,
      rgba(124, 106, 255, 0.04) 0%,
      rgba(0, 201, 160, 0.02) 100%
    );
    --gradient-border: linear-gradient(135deg, rgba(124, 106, 255, 0.18), rgba(0, 201, 160, 0.12));
    --gradient-shine: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.6) 50%,
      transparent 100%
    );

    /* --- Typography --- */
    --font-sans: 'Inter', -apple-system, 'Segoe UI', system-ui, sans-serif;
    --font-display: 'Inter', -apple-system, 'Segoe UI', system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;

    --fz-xxs: 0.75rem;
    --fz-xs: 0.8125rem;
    --fz-sm: 0.875rem;
    --fz-md: 1rem;
    --fz-lg: 1.125rem;
    --fz-xl: 1.25rem;
    --fz-xxl: 1.5rem;
    --fz-heading: 2rem;

    --lh-tight: 1.1;
    --lh-snug: 1.3;
    --lh-normal: 1.6;
    --lh-relaxed: 1.8;

    --ls-tight: -0.03em;
    --ls-normal: -0.01em;
    --ls-wide: 0.05em;
    --ls-wider: 0.1em;

    /* --- Spacing (8px grid) --- */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-24: 6rem;
    --space-32: 8rem;

    /* --- Layout --- */
    --max-width: 1200px;
    --border-radius: 10px;
    --border-radius-sm: 6px;
    --border-radius-md: 10px;
    --border-radius-lg: 16px;
    --border-radius-xl: 24px;
    --border-radius-full: 9999px;

    --sidebar-width: 70px;
    --sidebar-width-mobile: 52px;
    --sidebar-expanded: 220px;

    --tab-height: 42px;
    --tab-width: 120px;

    /* --- Timing & Easing --- */
    --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
    --ease-in-quint: cubic-bezier(0.55, 0, 1, 0.45);
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
    --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);

    --duration-fast: 150ms;
    --duration-base: 250ms;
    --duration-slow: 400ms;
    --duration-slower: 600ms;

    --transition: all 0.25s var(--ease-smooth);
    --transition-slow: all 0.4s var(--ease-out-quint);
    --transition-spring: all 0.5s var(--ease-spring);

    --hamburger-width: 28px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
