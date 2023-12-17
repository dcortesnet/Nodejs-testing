const axios = require('axios');
const getUsers = require('./users');
jest.mock('axios');

describe('Test stub object', () => {
  test('fetch data and stub resolve', async () => {
    const axiosStub = jest.fn();
    axiosStub.mockResolvedValue({ data: { results: [{ name: { first: 'John', last: 'Doe' } }] } });
    axios.get = axiosStub;
    const userData = await getUsers();
    expect(userData.results[0].name.first).toBe('John');
    expect(userData.results[0].name.last).toBe('Doe');
    expect(axiosStub).toHaveBeenCalledWith('https://randomuser.me/api/');
  });
});

