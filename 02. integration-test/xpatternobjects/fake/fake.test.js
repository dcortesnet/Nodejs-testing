const FakeDatabase = require('./fakedatabase');

jest.doMock('./database', () => {
  return FakeDatabase;
});

describe('Test fake object', () => {
  test('Insert method adds data to the fake database', () => {
    const Database = require('./database');
    const db = new Database();
    db.insert('key1', 'value1');
    expect(db.find('key1')).toBe('value1');
  });
});