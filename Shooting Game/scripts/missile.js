function Missile(x, y){
	this.x = x;
	this.y = y;
	this.img = new Image();
	this.img.src = "images/missile.jpg";
	this.IsAlive = true;
}

Missile.prototype.fire = function(value){
	this.y -= 5;
}