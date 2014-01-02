(function (app) {

  var Ship = app.Ship = function (x, y, xV, yV) {
    this.RAD = 6;
    app.MovingObject.call(this, x, y, xV, yV, this.RAD);
    this.col = "#00FF00";
  }

  Ship.inherits(app.MovingObject);

  Ship.prototype.power = function (impulse) {
    this.xV += impulse[0];
    this.yV += impulse[1];
  };

  Ship.prototype.move = function () {
    this.x += this.xV;
    this.y += this.yV;
    if (this.x > 500) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = 500;
    } else if (this.y > 500) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = 500;
    }
  };

  Ship.prototype.fireBullet = function (score) {
    if (score < 2) {
      return this.normalFire();
    } else if (score < 10) {
      return this.superFire();
    } else if (score < 20) {
      return this.superCrayFire();
    } else {
      return this.superCrayCrayFire();
    }
  };
  
  Ship.prototype.generateVelocities = function () {
	  var Bullet = new app.Bullet();
	  
	  var multiplier = Bullet.SPEED/(Math.abs(this.xV) + Math.abs(this.yV));
	  
      if (multiplier > 1000) { multiplier = 0; }
	
      var bX = multiplier * this.xV;
      var bY = multiplier * this.yV;

      if (bX === 0) {
        bX = 5;
        bY = 5;
      }
	  
	  return [bX, bY];
  }

  Ship.prototype.normalFire = function () {
    var velocities = this.generateVelocities();

    var bullet = new app.Bullet(this.x, this.y, velocities[0], velocities[1]);
    return [bullet];
  };


  Ship.prototype.superFire = function () {
    var velocities = this.generateVelocities();

    var bullet1 = new app.Bullet(this.x, this.y, velocities[0], velocities[1]);
    var bullet2 = new app.Bullet(this.x, this.y, 0, velocities[1]);
    var bullet3 = new app.Bullet(this.x, this.y, velocities[0], 0);
    return [bullet1, bullet2, bullet3];
  }

  Ship.prototype.superCrayFire = function () {
    var velocities = this.generateVelocities();
	var bX = velocities[0];
	var bY = velocities[1];
	
    var bullet1 = new app.Bullet(this.x, this.y, bX, bY);
    var bullet2 = new app.Bullet(this.x, this.y, 0, bY);
    var bullet3 = new app.Bullet(this.x, this.y, bX, 0);
    var bullet4 = new app.Bullet(this.x, this.y, 4, bY);
    var bullet5 = new app.Bullet(this.x, this.y, bX, 7);
    return [bullet1, bullet2, bullet3, bullet4, bullet5];
  }

  Ship.prototype.superCrayCrayFire = function () {
    var velocities = this.generateVelocities();
  	var bX = velocities[0];
  	var bY = velocities[1];
	
    var bullet1 = new app.Bullet(this.x, this.y, bX, bY);
    var bullet2 = new app.Bullet(this.x, this.y, 0, bY);
    var bullet3 = new app.Bullet(this.x, this.y, bX, 0);
    var bullet4 = new app.Bullet(this.x, this.y, 4, bY);
    var bullet5 = new app.Bullet(this.x, this.y, bX, 7);
    var bullet6 = new app.Bullet(this.x, this.y, bX, bY);
    var bullet7 = new app.Bullet(this.x, this.y, 0, bY);
    var bullet8 = new app.Bullet(this.x, this.y, bX, 0);
    var bullet9 = new app.Bullet(this.x, this.y, bX, 4);
    var bullet10 = new app.Bullet(this.x, this.y, 7, bY);
    return [bullet1, bullet2, bullet3, bullet4, bullet5, bullet6, bullet7, bullet8, bullet9, bullet10];
  }

})(app);