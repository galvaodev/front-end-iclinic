import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps } from '.';

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    font-weight: 100;

    span {
      font-weight: bold;
    }
    ${!!size && wrapperModifiers[size](theme)}
  `}
`;
