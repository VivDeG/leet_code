/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let result = "";
  let stack = [];
  let innerParens = false;

  for (let i = 0; i < S.length; i++) {
    if (!innerParens) {
      innerParens = true;
      continue;
    } else if (stack.length === 0 && S[i] == ")") {
      innerParens = false;
      continue;
    } else if (S[i] == "(") {
      stack.push(S[i]);
      result += S[i];
    } else if (S[i] == ")") {
      stack.pop();
      result += S[i];
    }
  }

  return result;
};