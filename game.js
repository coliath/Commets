(function (app) {

  var Game = app.Game = function (ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.FPS = 30;
    this.ship = new app.Ship(250, 250, 0, 0);
    this.addAsteroids(10);
    this.bullets = [];
    this.score = 0;
  }

  Game.gameReset = function () {
    game.stop();
    game = new Game(ctx);
    document.getElementById("head").innerHTML = "COMMETS";
    document.activeElement.blur();
    game.start();
  };

  Game.prototype.start = function () {
    this.bindKeyHandlers();
    this.interval = setInterval( function () {
      game.step();
    }, this.FPS);
  };

  Game.prototype.step = function () {
    this.move();
    this.draw();
    this.checkCollisions();
    this.offEdge();
    this.hitAsteroids();
  };

  Game.prototype.stop = function () { clearInterval(this.interval) };

  Game.prototype.addAsteroids = function () {
    var Asteroid = new app.Asteroid();

    for(var i = this.asteroids.length; i < 15; i++) {
      this.asteroids.push(Asteroid.randomAsteroid(this.DIM_X, this.DIM_Y));
    }
  };

  Game.prototype.draw = function () {
    this.ctx.clearRect(0,0,this.DIM_X,this.DIM_Y);
    this.ctx.fillRect(0,0,500,500);
    this.ship.draw(this.ctx);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    }
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].draw(this.ctx);
    }
  };

  Game.prototype.move = function () {
    this.ship.move();
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].move();
    }
  };

  Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.asteroids.length; i++) {
      if (this.asteroids[i].isCollidedWith(this.ship)) {
        document.getElementById("head").innerHTML = "GAME OVER!!!!!"
        this.stop();
        return;
      }
    }
  };

  Game.prototype.offEdge = function () {
    for (var i = 0; i < this.asteroids.length; i++) {
      var a = this.asteroids[i];
      if (a.x > 550 || a.x < -50 || a.y > 550 || a.y < -50) {
        this.asteroids[i] = null;
        this.addAsteroids();
      }
    }
	
    this.asteroids.clean(null);

    for (var j = 0; j < this.bullets.length; j++) {
      var b = this.bullets[j];
      if (b.x > 550 || b.x < -50 || b.y > 550 || b.y < -50) {
        this.bullets[j] = null;
      }
    }
	
    this.bullets.clean(null);
  };

  Game.prototype.hitAsteroids = function () {
    this.asteroids.clean(null);
    this.bullets.clean(null);

    for (var i = 0; i < this.asteroids.length; i++) {

      for (var j = 0; j < this.bullets.length; j++) {

        this.asteroids.clean(null);

        if (this.bullets[j].isCollidedWith(this.asteroids[i])) {
          this.asteroids[i] = null;
          this.bullets[j] = null;
          this.addAsteroids();
          this.incScore();
          this.bullets.clean(null);
        }
      }
    }

    this.asteroids.clean(null);
    this.bullets.clean(null);
  };

  Game.prototype.incScore = function () {
    this.score += 1;
    this.updateScore();
  }

  Game.prototype.updateScore = function () {
    document.getElementById("score").innerHTML = "Score: " + this.score;
  }

  Game.prototype.bindKeyHandlers = function () {
    var that = this;
    key('up', function () {
      that.ship.power([0, -1]);
    });
    key('down', function () {
      that.ship.power([0, 1]);
    });
    key('right', function () {
      that.ship.power([1, 0]);
    });
    key('left', function () {
      that.ship.power([-1, 0]);
    });
    key('space', function () {
      var bulletsToAdd = that.ship.fireBullet(that.score);
      for (var i = 0; i < bulletsToAdd.length; i++) {
        that.bullets.push(bulletsToAdd[i]);
      }
    });
  };

})(app);