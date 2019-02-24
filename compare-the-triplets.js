// https://www.hackerrank.com/contests/mindtech-trial/challenges/compare-the-triplets

function compareTriplets(a, b) {
  let aResults = 0;
  let bResults = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aResults++;
    }
    if (a[i] < b[i]) {
      bResults++;
    }
  }
  console.log(aResults, bResults);
}

const a1 = [5, 6, 7];
const b1 = [3, 6, 10];
// 1 1

const a2 = [17, 28, 30];
const b2 = [99, 16, 8];
// 2 1

compareTriplets(a1, b1);

compareTriplets(a2, b2);
