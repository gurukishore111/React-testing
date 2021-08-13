import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

it('should render "tasks" when the number of incomplete task is more than one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElements = screen.getByText(/5 tasks left/i);
  expect(paragraphElements).toBeInTheDocument();
});

it('should render "task" when the number of incomplete task is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElements = screen.getByText(/1 task left/i);
  expect(paragraphElements).toBeInTheDocument();
});

it('should render "task" when the number of incomplete task is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElements = screen.getByText(/1 task left/i);
  expect(paragraphElements).toBeTruthy(); //element in document
});

it('should render "task" when the number of incomplete task is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElements = screen.getByText(/1 task left/i);
  expect(paragraphElements).toBeVisible(); //element in screen
  //   expect(paragraphElements).not.toBeVisible(); //element in screen
});

it('should render "task" when the number of incomplete task is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElements = screen.getByText(/1 task left/i);
  expect(paragraphElements).toContainHTML('p');
});

it('should render "task" when the number of incomplete task is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElements = screen.getByTestId('para');
  expect(paragraphElements).toHaveTextContent(/1 task left/i);
});

it('should render "task" when the number of incomplete task is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElements = screen.getByTestId('para');
  expect(paragraphElements).not.toBeFalsy();
});

it('should render "task" when the number of incomplete task is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElements = screen.getByTestId('para');
  expect(paragraphElements.textContent).toBe('1 task left');
});
