function mySum () {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

// console.log(mySum(1, 2, 3, 4));
// console.log(mySum(1, 2, 3, 4, 5));

Function.prototype.myBind = function (obj) {
  var args = Array.prototype.slice.call(arguments);
  var that = this;
  return function () {
    that.apply(obj, args.slice(1,args.length));
  }
};

// var cat = {
//   age: 5,
//   myAge: function (puncuation) {
//     console.log(this.age + " Im that old" + puncuation);
//   }
// }
//
// var dog = {
//   age: 10
// }
//
// cat.myAge.myBind(dog, "!")();


var curredSum = function (numArgs) {
  var numbers = [];
  function _curriedSum (number) {
    numbers.push(number);
    if (numbers.length == numArgs) {
      //console.log("numleng = numargs" + numArgs);
      var total = 0;
      for(var i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
      return total;
    } else {
      //console.log("call _curriedSum");
      return _curriedSum;
    }
  }
  return _curriedSum;
};

// var f1 = curredSum(3);
// var f2 = f1(4);
// var f3 = f2(20);
// var result = f3(5);
// console.log(result);