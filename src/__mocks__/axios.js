const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'John',
          last: 'Doe',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/10.jpg',
        },
        login: {
          username: 'something___j',
        },
      },
    ],
  },
};
export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
