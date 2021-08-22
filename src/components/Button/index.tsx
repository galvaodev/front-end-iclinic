import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'large' | 'medium';
  color?: 'blue' | 'white' | 'black';
  fullWidth?: boolean;
  as?: React.ElementType;
} & ButtonTypes;

const Button = ({
  children,
  size = 'medium',
  color = 'blue',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} color={color} {...props}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
