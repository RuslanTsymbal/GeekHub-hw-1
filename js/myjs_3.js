
//Task 3

var arr = [];
var newArr_1 = [];
var newArr_2 = [];

var objFirst = {};
var objSecond = {};

//function Benchmark 

function bench(f) {
  var date = new Date();
  for (var i = 0; i < 10000; i++) f(arr);
  return new Date() - date;
}

//Create arr
for (var i = 0; i < 10; i++) {
  arr.push("val" + i);
}

///////////////////////////////////////////////////////////////////

function testArr1() {
  for (var i = 0; i < arr.length; i++) {
    newArr_1.push(i);
  }
};


function testArr2() {
  for (var key in arr) {
    newArr_2.push(arr[key]);
  }
};


alert( 'Время выполненияфункции testArr1: ' + bench(testArr1) + 'мс' );
alert( 'Время выполнения функции testArr2: ' + bench(testArr2) + 'мс' );

if (bench(testArr1) > bench(testArr2)) {
  alert( 'Время выполнения функции "testArr1" дольше' );
} else {
  alert( 'Время выполнения функции "testArr2" дольше' );
}
