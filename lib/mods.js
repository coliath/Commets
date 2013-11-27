Object.prototype.inherits = function (Superclass) {
  function Surrogate() {};
  Surrogate.prototype = Superclass.prototype;
  this.prototype = new Surrogate();
};

var origRandom = Math.random;

Math.random = function (min, max) {
  return Math.floor(origRandom() * (max - min + 1)) + min;
}

Math.rand = function () {
  return origRandom();
}

