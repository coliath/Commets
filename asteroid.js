(function (app) {





  var Asteroid = app.Asteroid = function (x, y, xV, yV, rad) {
    app.MovingObject.call(this, x, y, xV, yV, rad);
    this.col = "#FFFFFF";
  }

  Asteroid.inherits(app.MovingObject);

  Asteroid.prototype.randomAsteroid = function (dimX, dimY) {
    var randX = Math.random(0, dimX);
    var randY = Math.random(0, dimY);
    var randVelX = Math.random(-3, 3);
    var randVelY = Math.random(-3, 3);
    var randRad = Math.random(5, 25);

    if (randVelX === 0) {
      randVelX = 1;
    }


    asteroid = new Asteroid(randX, randY, randVelX, randVelY, randRad);
    return asteroid;
  }



})(app);