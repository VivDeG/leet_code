/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
  let pos = [a, b, c].sort((a, b) => a - b);
  const dist1 = pos[1] - pos[0], dist2 = pos[2] - pos[1];
  let min = 0, max = 0;

  if (dist1 == 2 || dist2 == 2) {
    min++;
  } else {
    if (dist1 > 1) min++;
    if (dist2 > 1) min++;
  }

  max += dist1 + dist2 - 2;

  return [min, max];
};