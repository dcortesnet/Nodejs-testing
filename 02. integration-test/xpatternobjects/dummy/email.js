function sendEmail(recipients, message) {
  if (!Array.isArray(recipients) || recipients.length === 0) {
    throw new Error('The function needs to recipients');
  }
  return 'ok'
}

module.exports = {
  sendEmail,
};