





Object.prototype.inherits = function (Superclass) {
  function Surrogate() {};
  Surrogate.prototype = Superclass.prototype;
  this.prototype = new Surrogate();
}

function MovingObject() {};

MovingObject.prototype.move = function () {
  console.log("HERE I COME!!!")
}

function Ship () {};

Ship.inherits(MovingObject);

var boat = new Ship();