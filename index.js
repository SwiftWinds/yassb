const isEmpty = require('is-empty');

class StringBuilder {
  constructor(str = '') {
    this.string = str;
  }

  add(str = '') {
    if (this.isEmpty()) {
      this.string = str;
    } else {
      this.string += str;
    }
    return this;
  }

  addLine(str = '') {
    return this.add(`\n${str}`);
  }

  isEmpty() {
    return isEmpty(this.string);
  }

  toString() {
    return this.string;
  }
}

module.exports = StringBuilder;
