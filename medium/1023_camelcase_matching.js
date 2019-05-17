/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    result.push(doesMatch(queries[i], pattern));
  }
  return result;
};

const doesMatch = (query, pattern) => {
  for (let i = 0; i < query.length; i++) {
    if (query[i] == pattern[0]) {
      pattern = pattern.slice(1);
    } else if (query[i] == query[i].toUpperCase()) {
      return false;
    }
  }

  if (pattern.length === 0) return true;
  return false;
}