(function (app) {

  var Asteroid = app.Asteroid = function (x, y, xV, yV, rad) {
    app.MovingObject.call(this, x, y, xV, yV, rad);
    this.col = "#FFFFFF";
  }

  Asteroid.inherits(app.MovingObject);

  Asteroid.prototype.randomAsteroid = function () {

    var coord = this.randCoord();
    var randX = coord[0];
    var randY = coord[1];
    var randVelX = Math.random(-3, 3);
    var randVelY = Math.random(-3, 3);
    var randRad = Math.random(5, 25);

    if (randVelX === 0) { randVelX = 1; };

    asteroid = new Asteroid(randX, randY, randVelX, randVelY, randRad);
    return asteroid;
  }

  Asteroid.prototype.randCoord = function () {
    var quad = Math.random(1, 4);
    switch(quad) {
      case 1:
        var x = Math.random(0,500);
        var y = Math.random(-50,0);
        break;
      case 2:
        var x = Math.random(0,500);
        var y = Math.random(500,550);
        break;
      case 3:
        var x = Math.random(500,550);
        var y = Math.random(0,500);
        break;
      default:
        var x = Math.random(-50,0);
        var y = Math.random(0,500);
    }
    return [x,y];
  }

})(app);