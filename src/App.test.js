import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test (or) it
// it('', () => {});

// * ⻣ Structure of test

// 1.Render a component we to test
// 2.Find the elements we want to interact with
// 3.Interact with those elements
// 4.Assert that the results are as expected
