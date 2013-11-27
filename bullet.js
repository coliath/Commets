(function (app) {

  var Bullet = app.Bullet = function (x, y, xV, yV) {
    this.RAD = 4;
    app.MovingObject.call(this, x, y, xV, yV, this.RAD);
    this.col = "#FF6347";
    this.SPEED = 10;
  }

  Bullet.inherits(app.MovingObject);


})(app);