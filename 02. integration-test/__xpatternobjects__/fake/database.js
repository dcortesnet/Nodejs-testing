class Database {
  constructor() {
    this.data = {};
  }

  insert(key, value) {
    this.data[key] = value;
  }

  find(key) {
    return this.data[key];
  }
}

module.exports = Database;
