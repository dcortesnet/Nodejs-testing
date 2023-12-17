const axios = require('axios');
const getUsers = require('./users');
jest.mock('axios');

describe('Test mock object', () => {
  test('fetch data and mock resolve', async () => {
    const mockUserData = {
      results: [
        { name: { first: 'John', last: 'Doe' } },
        { name: { first: 'Jane', last: 'Smith' } },
      ],
    };
    axios.get.mockResolvedValue({ data: mockUserData });
    const usersData = await getUsers();
    expect(usersData).toEqual(mockUserData);
    expect(axios.get).toHaveBeenCalledWith('https://randomuser.me/api/');
  });
});


