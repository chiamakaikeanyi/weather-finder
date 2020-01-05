import React from 'react';
import { render } from '@testing-library/react';
import App from 'containers/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/weather finder/i);
  expect(linkElement).toBeInTheDocument();
});
