(function (app) {

  var Game = app.Game = function (ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.FPS = 30
    this.addAsteroids(10);
  }

  Game.prototype.start = function () {
    setInterval( function () {
      game.step();
    }, this.FPS);
  }


  Game.prototype.addAsteroids = function (num) {
    var Asteroid = new app.Asteroid();

    for(var i = 0; i < num; i++) {
      this.asteroids.push(Asteroid.randomAsteroid(this.DIM_X, this.DIM_Y));
    }
  };

  Game.prototype.draw = function () {
    this.ctx.clearRect(0,0,this.DIM_X,this.DIM_Y)
    this.ctx.fillRect(0,0,500,500);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    }
  };

  Game.prototype.move = function () {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  };

  Game.prototype.step = function () {
    this.move();
    this.draw();
  }



})(app);