
//Task 3

var arr = [];
var objFirst = {};
var objSecond = {};

//function Benchmark 
function bench(f) {
  var date = new Date();
  for (var i = 0; i < 10000; i++) f();
  return new Date() - date;
}

//Create arr
for (var i = 0; i < 10; i++) {
  arr.push("val-" + i);
}

//Create obj - 1
for (var i = 0; i < 10; i++) {
  var key = "key-" + i;
  objFirst[key] = key; 
}

//Create obj - 2
for (var i = 0; i < 10; i++) {
  debugger;
  var key  = Math.random();
  key = key.toFixed(2);
  key = "key-"  + key;
  objSecond[key] = key; 
}

//1

function testArr1() {
  var counter = 0;

  for (var i = 0; i < arr.length; i++) {
    counter += 1;
  }
  console.log(counter);
};

function testArr2() {
  var counter = 0;

  for (var key in arr) {
    counter += 1;
  }
};

alert( 'Время выполненияфункции testArr1: ' + bench(testArr1) + 'мс' );
alert( 'Время выполнения функции testArr2: ' + bench(testArr2) + 'мс' );

if (bench(testArr1) > bench(testArr2)) {
  alert( 'Время выполнения функции "testArr1" дольше' );
} else {
  alert( 'Время выполнения функции "testArr2" дольше' );
}

//2

function testObj3() {
  var counter = 0;

  for (var key in objFirst) {
    counter++;
  }
}

function testObj4() {
  var counter = 0;

  for (var i = 0; i < Object.keys(objFirst).length; i++) {
    counter++;
  }
}

alert( 'Время выполненияфункции testObj3: ' + bench(testObj3) + 'мс' );
alert( 'Время выполнения функции testObj4: ' + bench(testObj4) + 'мс' );

if (bench(testObj3) > bench(testObj4)) {
  alert( 'Время выполнения функции "testObj3" дольше' );
} else {
  alert( 'Время выполнения функции "testObj4" дольше' );
}

//3

function testObj5() {
  var counter = 0;

  for (var key in objSecond) {
    counter++;
  }
}

function testObj6() {
  var counter = 0;

  for (var i = 0; i < Object.keys(objSecond).length; i++) {
    counter++;
  }
}

alert( 'Время выполненияфункции testObj5: ' + bench(testObj5) + 'мс' );
alert( 'Время выполнения функции testObj6: ' + bench(testObj6) + 'мс' );

if (bench(testObj5) > bench(testObj6)) {
  alert( 'Время выполнения функции "testObj5" дольше' );
} else {
  alert( 'Время выполнения функции "testObj6" дольше' );
}