// https://www.hackerrank.com/contests/mindtech-trial/challenges/breaking-best-and-worst-records/problem
function breakingRecords(games, score) {
  let min = [];
  let max = [];
  let minScore = score[0];
  let maxScore = score[0];
  for (let i = 0; i < games; i++) {
    let lastScore = score[i];
    if (lastScore < minScore) {
      min.push(minScore);
      minScore = lastScore;
    }
    if (lastScore > maxScore) {
      max.push(maxScore);
      maxScore = lastScore;
    }
  }
  console.log(max.length, min.length);
}

const games1 = 10;
const score1 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
// 4 0

const games2 = 9;
const score2 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
// 2 4

breakingRecords(games1, score1);
breakingRecords(games2, score2);
