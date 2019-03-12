// https://www.hackerrank.com/contests/mindtech-trial/challenges/breaking-best-and-worst-records/problem

function breakingRecords(score) {
  const cica = score.reduce(
    (acc, cV, index) => {
      const lastScore = score[index];
      if (lastScore < acc.minScore) {
        acc.min++;
        acc.minScore = lastScore;
      }
      if (lastScore > acc.maxScore) {
        acc.max++;
        acc.maxScore = lastScore;
      }
      return acc;
    },
    {
      min: 0,
      max: 0,
      minScore: score[0],
      maxScore: score[0],
    }
  );
  console.log(cica, cica.max, cica.min);
}

const games1 = 10;
const score1 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
// 4 0

const games2 = 9;
const score2 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
// 2 4

breakingRecords(score1);
breakingRecords(score2);
