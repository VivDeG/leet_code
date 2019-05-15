/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  coins = coins.sort((a, b) => a - b).filter((el, idx, arr) => arr.indexOf(el) == idx);
  console.log(coins, amount)
  let minTable = {};

  for (let i = 0; i < coins.length; i++) {
    minTable[coins[i]] = [0];

    for (let currAmt = 1; currAmt <= amount; currAmt++) {
      const currCoin = coins[i];
      const leftIdx = currAmt - currCoin;
      let left;

      if (i === 0) {
        if (currAmt % currCoin === 0) {
          left = minTable[currCoin][leftIdx];
          minTable[currCoin].push(left + 1);
        } else {
          minTable[currCoin].push(-1);
        }
        continue;
      }

      const prevCoin = coins[i - 1];
      let up = minTable[prevCoin][currAmt];

      if (currCoin > currAmt) {
        minTable[currCoin].push(up);
        continue;
      }

      left = minTable[currCoin][leftIdx];

      if (left < 0) {
        minTable[currCoin].push(up);
      } else if (up < 0) {
        minTable[currCoin].push(left + 1);
      } else {
        minTable[currCoin].push(Math.min(up, left + 1));
      }
    }
  }

  return minTable[coins[coins.length - 1]][amount];
};