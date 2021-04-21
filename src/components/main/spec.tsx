import { render, screen } from '@testing-library/react';
import Main from '.';

test('renders olar', () => {
  render(<Main />);
  const text = screen.getByText(/olar/i);
  expect(text).toBeInTheDocument();
});
