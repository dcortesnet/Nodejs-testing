class FakeDatabase {
  constructor() {
    this.fakeData = {};
  }

  insert(key, value) {
    this.fakeData[key] = value;
  }

  find(key) {
    return this.fakeData[key];
  }
}


module.exports = FakeDatabase;