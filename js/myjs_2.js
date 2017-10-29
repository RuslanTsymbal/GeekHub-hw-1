
//Task 2

var myObj = {
  key1: "val-1", 
  key2: "val-2", 
  key3: "val-3", 
  key4: "val-4", 
  key5: "val-5"
};


function clone (obj) {
   var locObj = {};

   for (var key in obj) {
      locObj[key] = obj[key];
   }
   return locObj;
}

var newObj = clone(myObj);
