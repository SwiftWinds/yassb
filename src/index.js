import isEmpty from 'is-empty';

export default class StringBuilder {
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
    if (this.isEmpty() && !isEmpty(str)) {
      this.string = str;
    } else {
      this.string += `\n${str}`;
    }
    return this;
  }

  isEmpty() {
    return isEmpty(this.string);
  }

  toString() {
    return this.string;
  }
}
