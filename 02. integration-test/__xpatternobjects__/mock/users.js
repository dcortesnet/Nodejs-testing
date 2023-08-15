const axios = require('axios');

async function getUsers() {
  try {
    const response = await axios.get('https://randomuser.me/api/');
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = getUsers;
