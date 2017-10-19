//Task 1

function recurs(arr, num) {
  arr.push(num);

  if (num > 0) {
    recurs(arr, num -1);
  }
}

var myArr = [];

recurs(myArr, 5);

console.log(myArr);
