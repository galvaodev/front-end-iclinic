import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 80.5%;
  }



    ${({ theme }) => css`
      body {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
        background: ${theme.colors.white};
      }

      .ReactModal__Overlay {
        opacity: 0;
        transition: opacity 1000ms ease-in-out;
      }

      .ReactModal__Overlay--after-open {
        opacity: 1;
      }

      .ReactModal__Overlay--before-close {
        opacity: 0;
      }
    `}
`;
export default GlobalStyles;
