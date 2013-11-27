(function (app) {

  var MovingObject = app.MovingObject = function (x, y, xV, yV, rad, col) {
    this.x = x;
    this.y = y;
    this.xV = xV;
    this.yV = yV;
    this.rad = rad;
    this.col = col;
  };

  MovingObject.prototype.move = function () {
    this.x += this.xV;
    this.y += this.yV;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.strokeStyle = this.col;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rad, 0, Math.PI*2, true);
    ctx.stroke();
  };

  MovingObject.prototype.distanceFrom = function (otherObject) {
    return Math.sqrt(Math.pow((this.x - otherObject.x),2) +
                Math.pow((this.y - otherObject.y),2) );
  }

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var sumRad = this.rad + otherObject.rad;
    var dist = this.distanceFrom(otherObject);
    if (sumRad > dist) {
      return true;
    } else {
      return false;
    }
  };

})(app);