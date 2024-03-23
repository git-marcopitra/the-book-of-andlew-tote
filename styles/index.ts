import { css } from '@emotion/react';

export const GlobalStyles = css`
  @font-face {
    font-family: 'GochiHand';
    src: url('/fonts/GochiHand-Regular.ttf');
  }
  @font-face {
    font-family: 'Holywind';
    src: url('/fonts/Holywind.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'GochiHand';
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Holywind';
    text-shadow: 3px 3px 0 #fff;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
