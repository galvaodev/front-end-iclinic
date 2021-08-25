import styled, { css } from 'styled-components';

export const Wrapper = styled.main``;

export const Header = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: ${theme.spacings.xxlarge};

    h2 {
      text-align: center;
      width: 100%;

      &:nth-child(2) {
        letter-spacing: 0.35em;
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    button {
      display: block;
      margin: ${theme.spacings.xxlarge} auto 0 auto;

      svg {
        width: 30px;
        animation: lds-roller 1.2s linear infinite;
      }

      &:disabled {
        opacity: 0.5;
        cursor: auto;

        &:hover {
          background: ${theme.colors.blue};
          color: ${theme.colors.white};
        }
      }
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
