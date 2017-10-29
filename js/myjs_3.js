
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
  var key = i;
  objFirst[key] = "value" + i; 
}

//Create obj - 2
for (var i = 0; i < 10; i++) {
  key = "key-"  + i;
  objSecond[key] = "value-" + i; 
}

//1 test
function testArr1() {

  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);  
  }
};


function testArr2() {
  var newArr = [];

  for (var key in arr) {
    newArr.push(key);    
  }
};

alert( 'Время выполненияфункции testArr1: ' + bench(testArr1) + 'мс' );
alert( 'Время выполнения функции testArr2: ' + bench(testArr2) + 'мс' );

if (bench(testArr1) > bench(testArr2)) {
  alert( 'Время выполнения функции "testArr1" дольше' );
} else {
  alert( 'Время выполнения функции "testArr2" дольше' );
}

//2  test

function testObj3() {

  var newObj = {};

  for (var key in objFirst) {
    newObj[key] = objFirst[key];
  }
}

function testObj4() {
 
  var newObj = {};

  for (var i = 0; i < Object.keys(objFirst).length; i++) {
    newObj[i] = objFirst[i];
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

  var newObj = {};
 
  for (var key in objSecond) {
    newObj[key] = objSecond[key];
  }
}

function testObj6() {
  
  var newObj = {};

  for (var i = 0; i < Object.keys(objSecond).length; i++) {
    
    for (var key in objSecond) {
      newObj[key] = objSecond[key];
    }
  }
}

alert( 'Время выполненияфункции testObj5: ' + bench(testObj5) + 'мс' );
alert( 'Время выполнения функции testObj6: ' + bench(testObj6) + 'мс' );

if (bench(testObj5) > bench(testObj6)) {
  alert( 'Время выполнения функции "testObj5" дольше' );
} else {
  alert( 'Время выполнения функции "testObj6" дольше' );
}