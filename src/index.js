module.exports = function check(str, bracketsConfig) {
  const arr = ['()', '{}', '[]', '||', '12', '34', '56', '77', '88'];
  let result = str;
  let lastLength = result.length;
  while (true) {
    for (const brackets of arr) {
      result = result.split(brackets).join('');
    }
    if (result.length === 0 || result.length === lastLength) {
      break;
    }
    lastLength = result.length;
  }
  return result.length === 0;
}