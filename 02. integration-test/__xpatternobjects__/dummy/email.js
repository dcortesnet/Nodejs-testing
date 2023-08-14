function sendEmail(recipients, message) {
  if (!Array.isArray(recipients) || recipients.length === 0) {
    throw new Error('The function needs to recipients');
  }
  console.log(`Send email to ${recipients.join(', ')}: ${message}`);
  return 'ok'
}

module.exports = {
  sendEmail,
};