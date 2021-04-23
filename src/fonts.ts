/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'zen-dots';
    src: url('/fonts/zen-dots/ZenDots-Regular.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'noto-sans';
    src: url('/fonts/noto-sans/NotoSansJP-Regular.otf') format('truetype');
    font-display: fallback;
  }
`;
