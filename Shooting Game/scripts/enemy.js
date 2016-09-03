function Enemy(){
	this.x = Math.random() * 740;
	this.y = -20;
	this.img = new Image();
	this.img.src = "images/ufo.jpg";
	this.IsAlive = true;
}

Enemy.prototype.fall = function(){
	this.y+=10;
}

