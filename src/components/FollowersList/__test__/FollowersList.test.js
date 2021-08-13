import { render, screen, fireEvent } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

//unit testing
//find By - async
describe('FollowersList', () => {
  beforeEach(() => {
    console.log('before each test');
  });

  beforeAll(() => {
    console.log('before running ones');
  });

  afterEach(() => {
    console.log('after each test');
  });

  afterAll(() => {
    console.log('after running ones');
  });
  it('should render follower item', async () => {
    render(<MockFollowersList />);
    const followerDivElements = await screen.findByTestId('follower-item-0');
    expect(followerDivElements).toBeInTheDocument();
  });
  //   it('should render follower items', async () => {
  //     render(<MockFollowersList />);
  //     const followerDivElements = await screen.findAllByTestId(/follower-item-/i);
  //     expect(followerDivElements.length).toBe(5);
  //   });
});
