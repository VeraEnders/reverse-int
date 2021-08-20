module.exports = function reverse (n) {
  let num = Math.abs(n).toString();
  let reverseStr = '';
  for (let i = num.length - 1; i >= 0; i--) {
    reverseStr += num[i];
  }
  return reverseStr;
}