import styled, { css, DefaultTheme } from 'styled-components';
import { ThemeProps } from '.';

type WrapperProps = Pick<ThemeProps, 'hasTheme'>;

const wrapperModifiers = {
  darth: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};

    ${Back} {
      color: ${theme.colors.white};
      font-weight: ${theme.font.normal};
    }
  `,
  luke: (theme: DefaultTheme) => css`
    background: ${theme.colors.yellow};

    ${Back} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.normal};
    }
  `,
};

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, hasTheme }) => css`
    height: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    overflow: auto;

    ${Back} {
      margin-top: 20px;
      margin-left: 30px;
      text-decoration: none;
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
        width: 30px;
      }
    }

    ${!!hasTheme &&
    (hasTheme === 'darth'
      ? wrapperModifiers.darth(theme)
      : wrapperModifiers.luke(theme))}
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: ${theme.spacings.large};

    h2 {
      text-align: center;
      font-size: ${theme.font.sizes.xlarge};
      width: 100%;
    }
  `}
`;

export const Thumbnail = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-top: ${theme.spacings.xlarge};

    img {
      border-radius: 50%;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    button {
      display: block;
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};
      margin: ${theme.spacings.xlarge} auto 0 auto;
    }
  `}
`;

export const Back = styled.div`
  cursor: pointer;
`;

export const Loading = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${theme.colors.white};
    backdrop-filter: blur(5px);
    opacity: 0.8;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 50px;
      color: ${theme.colors.blue};
      animation: lds-roller 1.2s linear infinite;
    }

    @keyframes lds-roller {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
