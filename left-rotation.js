//www.hackerrank.com/contests/mindtech-trial/challenges/array-left-rotation

function readLine(length, rotation) {
  const arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(i);
  }
  for (let i = 1; i <= rotation; i++) {
    arr[0] = arr[length - 1];
    console.log("arr, ", arr);
    console.log(arr[0]);
  }
  console.log(arr);
  console.log(arr[length - 1]);
}

readLine(5, 2);
