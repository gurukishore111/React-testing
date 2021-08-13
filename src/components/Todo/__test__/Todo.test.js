import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTodo = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

//integration testing
describe('todo', () => {
  it('should render single item', async () => {
    render(<MockTodo />);
    addTodo(['Go to shop']);
    const divElements = screen.getByText(/Go to shop/i);
    expect(divElements).toBeInTheDocument();
  });

  it('should render multiple items', async () => {
    render(<MockTodo />);
    addTodo(['Go to shop', 'Something 2', 'Something 3']);
    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(3);
  });

  it('should not have completed class when initally added', async () => {
    render(<MockTodo />);
    addTodo(['Go to shop']);
    const divElements = screen.getByText(/Go to shop/i);
    expect(divElements).not.toHaveClass('todo-item-active');
  });

  it('should have completed class when initally added', async () => {
    render(<MockTodo />);
    addTodo(['Go to shop']);
    const divElements = screen.getByText(/Go to shop/i);
    fireEvent.click(divElements);
    expect(divElements).toHaveClass('todo-item-active');
  });
});
