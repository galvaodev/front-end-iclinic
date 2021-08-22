import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';

describe('<Button />', () => {
  it('should render the default size', () => {
    renderWithTheme(<Button>Start</Button>);

    expect(screen.getByRole('button', { name: /Start/i })).toHaveStyle({
      'height': '4rem',
      'padding': '0.8rem 3.33rem',
      'font-size': '0.938rem',
    });
  });

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Start</Button>);

    expect(screen.getByRole('button', { name: /Start/i })).toHaveStyle({
      'height': '3rem',
      'font-size': '0.875rem',
    });
  });

  it('should render the large size by default', () => {
    renderWithTheme(<Button size="large">Start</Button>);

    expect(screen.getByRole('button', { name: /Start/i })).toHaveStyle({
      'height': '5rem',
      'padding': '0.8rem 6rem',
      'font-size': '1.8rem',
    });
  });

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Start</Button>);

    expect(screen.getByRole('button', { name: /Start/i })).toHaveStyle({
      width: '100%',
    });
  });
});
