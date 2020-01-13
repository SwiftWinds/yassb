import StringBuilder from '../index';

test('should output empty string', () => {
  const sb1 = new StringBuilder().add('');
  const sb2 = new StringBuilder('');

  expect(sb1.toString()).toBe('');
  expect(sb2.toString()).toBe('');
});

test('should output "Hello, world!"', () => {
  const sb = new StringBuilder().add('Hello, ').add('world!');

  expect(sb.toString()).toBe('Hello, world!');
});

test('should output "A line\\nAnother new line"', () => {
  const sb = new StringBuilder('A line');
  sb.addLine('Another new line');

  expect(sb.toString()).toBe('A line\nAnother new line');
});

test('should output empty string', () => {
  const sb1 = new StringBuilder();
  const sb2 = new StringBuilder().add().add();

  expect(sb1.toString()).toBe('');
  expect(sb2.toString()).toBe('');
});

test('should output \\n', () => {
  const sb1 = new StringBuilder().addLine();

  const sb2 = new StringBuilder();
  sb2.addLine();

  expect(sb1.toString()).toBe('\n');
  expect(sb2.toString()).toBe('\n');
});

test('should output true', () => {
  const sb1 = new StringBuilder();

  const sb2 = new StringBuilder('test');

  const sb3 = new StringBuilder();
  sb3.add().add('');

  expect(sb1.isEmpty()).toBeTruthy();
  expect(sb2.isEmpty()).toBeFalsy();
  expect(sb3.isEmpty()).toBeTruthy();
});

test('should output "Another hello world."', () => {
  const sb = new StringBuilder();
  sb.addLine('Another hello world.');

  expect(sb.toString()).toBe('Another hello world.');
});
