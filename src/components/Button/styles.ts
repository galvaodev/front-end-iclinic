import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type WrapperProps = Pick<ButtonProps, 'size' | 'fullWidth' | 'color'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, color }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors[color!]};
    color: ${theme.colors[color!] === '#FFFFFF'
      ? theme.colors.black
      : theme.colors.white};
    border: 1px solid ${theme.colors[color!]};
    border-radius: ${theme.border.medium};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    transition: all ease 0.3s;
    cursor: pointer;

    &:hover {
      background: transparent;
      color: ${theme.colors[color!]};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
  `}
`;
