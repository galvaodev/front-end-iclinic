import * as S from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black' | 'blue';
  size?: 'small' | 'medium';
};

const Heading = ({
  children,
  color = 'blue',
  size = 'medium',
}: HeadingProps) => (
  <S.Wrapper size={size} color={color}>
    {children}
  </S.Wrapper>
);

export default Heading;
