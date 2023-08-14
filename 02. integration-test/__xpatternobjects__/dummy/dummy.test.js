const { sendEmail } = require('./email');

describe('Test dummy object', () => {
  test('sendEmail sends email to recipients', () => {
    const dummyRecipient = ['dummy@example.com'];
    const result = sendEmail(dummyRecipient, 'Hello world!');
    expect(result).toBe('ok');
  });
});
