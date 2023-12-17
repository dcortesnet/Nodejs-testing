const math = require('./math');

describe('Test spy object', () => {
  test('Apply sum and register called with and times', () => {
    const sumSpy = jest.spyOn(math, 'sum');
    const result = math.sum(3, 5);
    expect(sumSpy).toHaveBeenCalledWith(3, 5);
    expect(sumSpy).toHaveBeenCalledTimes(1);
    sumSpy.mockRestore();
    expect(result).toBe(8);
  });
});


