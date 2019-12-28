# yassb

> Yet another simple StringBuilder

> Useful if you want to log to a string instead of the console

Please consider following this project's author, [SwiftWinds](https://github.com/SwiftWinds), and starring the project to show your ❤️ and support.

## Installation

Install with [npm](https://nodejs.org/en/download/):

```bash
$ npm install --save yassb
```

## Usage

```js
import StringBuilder from 'yassb';

const sb = new StringBuilder();
sb.add('Hello, ');
sb.add('world!');
console.log(sb.toString());
//=> Hello, world!

// commands can be chained like this
sb.addLine('This is another line!').addLine('So is this!');
console.log(sb.toString());
//=> Hello, world
//   This is another line!
//   So is this!

// addLine() without parameters simply creates a new line
console.log(sb.addLine().addLine('This is so cool.').toString());
//=> Hello, world
//   This is another line!
//   So is this!
//
//   This is so cool.

const emptySb = new StringBuilder();
console.log(sb.isEmpty(), emptySb.isEmpty());
//=> true false

// there is no empty line at the beginning of the StringBuilder
const anotherSb = new StringBuilder();
anotherSb.addLine("This is the first (and last) line");
console.log(anotherSb.toString());
//=> This is the first line
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
