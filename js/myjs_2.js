
//Task 2

var myObj = {
  key1: "val-1", 
  key2: "val-2", 
  key3: "val-3", 
  key4: "val-4", 
  key5: "val-5"
};

var newObj = {};

function clone (obj) {
  for (var key in obj) {
    newObj[key] = obj[key];
  }
  console.log(newObj);
}

clone(myObj);
