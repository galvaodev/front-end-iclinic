import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Heading from '.';

describe('<Heading />', () => {
  it('shold render a heading heading by default', () => {
    renderWithTheme(<Heading>iClinic</Heading>);
    expect(screen.getByRole('heading', { name: /iClinic/i })).toHaveStyle({
      color: '#2C97D1',
    });
  });

  it('shold render a heading heading by coloris passed', () => {
    renderWithTheme(<Heading color="white">iClinic</Heading>);
    expect(screen.getByRole('heading', { name: /iClinic/i })).toHaveStyle({
      color: '#ffffff',
    });
  });

  it('shold render a heading heading by coloris passed', () => {
    renderWithTheme(<Heading color="black">iClinic</Heading>);
    expect(screen.getByRole('heading', { name: /iClinic/i })).toHaveStyle({
      color: 'rgb(0, 0, 0)',
    });
  });

  it('shold render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">iClinic</Heading>);
    expect(screen.getByRole('heading', { name: /iClinic/i })).toHaveStyle({
      'font-size': '0.938rem',
    });
  });
});
