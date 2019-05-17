/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function (A) {
  let count = {};

  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const diff = A[j] - A[i];
      if (count[diff]) {
        let inserted = false;
        let arr = count[diff];
        for (let sub = 0; sub < arr.length; sub++) {
          if (arr[sub][0] == i) {
            count[diff][sub].unshift(j);
            inserted = true;
          }
        }
        if (!inserted) count[diff].push([j, i]);
      } else {
        count[diff] = [[j, i]];
      }
    }
  }

  let longest = 0;
  Object.keys(count).forEach(diff => {
    const arr = count[diff];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longest) longest = arr[i].length;
    }
  })

  return longest;
};