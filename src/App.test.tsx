import { render } from '@testing-library/react';
import App from './App';

test('renders calculator', () => {
  const { getByText } = render(<App />);
  expect(getByText(/historic total/i)).toBeInTheDocument();
  expect(getByText(/add/i)).toBeInTheDocument();
});
