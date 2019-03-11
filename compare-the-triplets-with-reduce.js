// https://www.hackerrank.com/contests/mindtech-trial/challenges/compare-the-triplets

function compareTriplets(aResults, bResults) {
  const cica = aResults.reduce(
    (acc, cV, index) => {
      if (cV > bResults[index]) {
        acc[0]++;
      } else if (cV < bResults[index]) {
        acc[1]++;
      }
      return acc;
    },
    [0, 0]
  );
  console.log(cica);
}

const a1 = [5, 6, 7];
const b1 = [3, 6, 10];

const a2 = [17, 28, 30];
const b2 = [99, 16, 8];

compareTriplets(a1, b1);
compareTriplets(a2, b2);
