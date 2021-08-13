import { render, screen } from '@testing-library/react';
import Header from '../Header';

//unit testing
//get By
it('should render same text passed into title prop', async () => {
  render(<Header title="Todo" />);
  const headingElement = screen.getByText(/todo/i);
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop', async () => {
  render(<Header title="Todo" />);
  const headingElement = screen.getByRole('heading', { name: /todo/i });
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop', async () => {
  render(<Header title="Todo" />);
  const headingElement = screen.getByTitle(/header/i);
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop', async () => {
  render(<Header title="Todo" />);
  const headingElement = screen.getByTestId('header-1');
  expect(headingElement).toBeInTheDocument();
});

//find by
//async
it('should render same text passed into title prop', async () => {
  render(<Header title="Todo" />);
  const headingElement = await screen.findByText(/todo/i);
  expect(headingElement).toBeInTheDocument();
});

//query by
// sync
it('should render same text passed into title prop', async () => {
  render(<Header title="Todo" />);
  const headingElement = screen.queryByText(/dogs/i); //not fail
  expect(headingElement).not.toBeInTheDocument();
});

it('should render same text passed into title prop', async () => {
  render(<Header title="Todo" />);
  const headingElement = screen.getAllByRole('heading'); //not fail
  expect(headingElement.length).toBe(2);
});
