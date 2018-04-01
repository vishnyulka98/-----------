window.onload = init;
//window onload = function()
//{
//	Giffer();
//}

var map;
var ctxMap;

var map2;
var ctxMap2;


var pl;  /*player*/
var ctxPl;

var pl2;
var ctxPl2;

var pl3;
var ctxPl3;

var enemyCvs;
var ctxEnemy;

var w;
var ctxW;

var enemy2Cvs;
var ctxEnemy2;

var stats;
var ctxStats;

//var drawBtn;
//var clearBtn;

var gameWidth = 800;//screen.width/2;
var gameHeight = 500;//screen.height/2;

var background = new Image();
background.src = "img/fon.jpg";
var background1 = new Image();
background1.src = "img/fon.jpg";

var background2 = new Image();
background2.src = "img/ZASTAVKA.jpg";



var background3 = new Image();
background3.src = "img/DuJpaOyPLO4.png";
var background4 = new Image();
background4.src = "img/diplom2.png";
var background11 = new Image();
background11.src = "img/DIPLOM.jpg";
var background12 = new Image();
background12.src = "img/POTRAChENO.jpg";
var t = 0;

//hiddenImg = new Image();
//hiddenImg.src = "img/ova.gif";
//window.onload = function()
//{
var hiddenImg = document.createElement("IMG");
hiddenImg.src = "img/ova.gif";
//}
//pc.appendChild(hiddenImg);

//var play = new Image();
//play.src = "img/ova.gif";
var tiles = new Image();
tiles.src = "img/tiless2.png";
var vs = new Image();
vs.src = "img/vzryv.png";
var sl = new Image();
sl.src = "img/SLOVA.png";

var player;
var player2;
var player3;

var enemy;
var water;

var enemy2;

var isPlaying;
var health;

var mapX = 0;
var map1X = gameWidth;
var map2X = gameWidth;
var map3X = gameWidth;
var map4X = gameWidth;
var map5X = gameWidth;
var map10X = gameWidth;
var map11X = gameWidth;
var map12X = gameWidth;
var num = 0;
//for creating enemies


var requestAnimFrame = window.requestAnimationFrame ||      
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame;


//document.write("<button onClick='init2()', x: 100, y: 200>Start</button>");
function init2()
{if (num == 1) num = 0; else num = 1;init();}
function init()
{
	if (dn >= 1200) clearTimeout();
	map = document.getElementById("map");
	ctxMap = map.getContext("2d");
	map2 = document.getElementById("map2");
	ctxMap2 = map.getContext("2d");

	pl = document.getElementById("player");
	ctxPl = pl.getContext("2d");

	pl2 = document.getElementById("player2");
	ctxPl2 = pl.getContext("2d");

	enemyCvs = document.getElementById("enemy");
	ctxEnemy = enemyCvs.getContext("2d");
		
	enemy2Cvs = document.getElementById("enemy2");
	ctxEnemy2 = enemy2Cvs.getContext("2d");	
	
	w = document.getElementById("water");
	ctxW = pl.getContext("2d");

	stats = document.getElementById("stats");
	ctxStats = stats.getContext("2d");

	map.width = gameWidth;
	map.height = gameHeight;
	map2.width = gameWidth;
	map2.height = gameHeight;

	w.width = gameWidth;
	w.height = gameHeight;

	pl.width = gameWidth;
	pl.height = gameHeight;

	pl2.width = gameWidth;
	pl2.height = gameHeight;

	enemyCvs.width = gameWidth;
	enemyCvs.height = gameHeight;
	
	enemy2Cvs.width = gameWidth;
	enemy2Cvs.height = gameHeight;

	stats.width = gameWidth;
	stats.height = gameHeight*2;	

	ctxStats.fillStyle = "#ffff";
	ctxStats.font = "bold 15pt Arial";
if (num == 1) {
	//drawBtn = document.getElementById("drawBtn");
	//clearBtn = document.getElementById("clearBtn");

	//drawBtn.addEventListener("click", drawRect, false);
	//clearBtn.addEventListener("click", clearRect, false);

	player = new Player();
	player2 = new Player2();

	enemy = new Enemy();
	water = new Water();
	
	enemy2 = new Enemy2();

	resetHealth();
	
	//drawBg();

//	if (st == 5) drawBg2();
//	if (st > 5) drawDiplom();
	startLoop();
	/*draw();*/

	//updateStats();

	document.addEventListener("keydown", checkKeyDown, false);
	document.addEventListener("keyup", checkKeyUp, false);
}}


function resetHealth()
{
	health = 3;
}


function loop()
{
	if (isPlaying)
	{
		draw();
		update();
		requestAnimFrame(loop);
	}
}

function startLoop()
{
	isPlaying = true;
	loop();
}

function stopLoop()
{
	isPlaying = false;
}
var ppp = 0;

function draw()
{
//	if (ppp % 9) player2.draw();
//	else if (ppp % 10) player3.draw();
//	else 
	player.draw();
	enemy.draw();
	//water.draw();
	enemy2.draw();
}

function update()
{
	moveBg();
	drawBg();
	updateStats();
	player.update();
	//console.log("loop");
	enemy.update();
	//water.update();
	enemy2.update();
}
var t = 0;
var k = 0;
var d;
var dd = 10;
function moveBg()
{
	var vel = 4;//скорость
	if (k != 1000000001) k += 1;
	if (k % 4 == 0)
	t += 1;
	if (t % 5) player.draw2;
	if (t % 10) player.draw3;
	ctxStats.clearRect(640, 0, gameWidth, gameHeight);
	ctxStats.fillText("Result " + t, 640, 400);
	//if ((t == 1000) || (t == 2000) || (t == 3000) || (t == 4000) || (t == 5000) || (t == 6000) || (t == 7000) || (t == 8000) || (t == 9000) || (t == 10000)) init();
	mapX -= 4;
	map1X -= 4;
	//map2X -= 4;
	if (st <= 5)
	{
		if (mapX + gameWidth < 0) mapX = gameWidth-5;
		if (map1X + gameWidth < 0) map1X = gameWidth-5;	
		map10X = 0;
	}
	else
	{
		if (st == 5) {init(); init();}
		map2X = -4;
		if (map1X + gameWidth < 0) map1X = gameWidth-5;	
		if (map2X + gameWidth < 0) map2X = gameWidth-5;	
		//drawBg2(); 
		map2X = 0;
		d = 0; while (d!=5) {if (map1X + gameWidth < 0) map1X = gameWidth-5;	
		if (map2X + gameWidth < 0) map2X = gameWidth-5;	map2X = 0; map2X = 0; map2X = 0; map2X = 0; map2X = 0; map2X = 0; map2X = 0; map2X = 0; map2X = 0; map2X = 0; map2X = 0; map2X = 0; d += 1;}
		if (d == 5)
		 {map3X = 0; 
		map10X = 0;}
	}
}



/*objects*/

function Player()
{
	this.srcX = 11;
	this.srcY = 5;
	this.drawX = 0;
	this.drawY = gameHeight/2 - 100;
	this.width = 177;
	this.height = 119;
	this.speed = 3;
	
	//for keys
	this.isUp = false;
	this.isDown = false;
	this.isRight = false;
	this.isLeft = false;

	this.speed = 10;
}

function Player2()
{
	this.srcX = 47;
	this.srcY = 37;
	this.drawX = player.drawX;
	this.drawY = player.drawY;
	this.width = 99;
	this.height = 80;
	this.speed = 3;
	
	//for keys
	this.isUp = false;
	this.isDown = false;
	this.isRight = false;
	this.isLeft = false;

	this.speed = 10;
}
var st = 0;
function Enemy()
{
	this.srcX = 59;
	this.srcY = 164;
	this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;  //число 0.1-1
	this.drawY = Math.floor(Math.random() * gameHeight);
	while(this.drawY + 58 > gameHeight)
	{ 
		this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;  //число 0.1-1
		this.drawY = Math.floor(Math.random() * gameHeight);
	}
	this.width = 45;
	this.height = 58;

	this.speed = 10000;
	st += 1;
//	if (st > 5) 
//	{
//		this.width = 0;
//		this.height = 0;
//		water = new Water();
//	}
}
if (st == 5) init();
function Water()
{
	this.srcX = 208;
	this.srcY = 160;
	this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;  //число 0.1-1
	this.drawY = Math.floor(Math.random() * gameHeight);
	while(this.drawY + 58 > gameHeight)
	{ 
		this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;  //число 0.1-1
		this.drawY = Math.floor(Math.random() * gameHeight);
	}
	this.width = 0;
	this.height = 0;

	this.speed = 10000;
}


function Enemy2()
{
	this.srcX = 34;
	this.srcY = 230;
	this.drawX = Math.floor(Math.random() * gameWidth);
	this.drawY = Math.floor(Math.random() * gameHeight) + gameHeight;
	this.width = 98;
	this.height = 102;

	this.speed = 3;
	
}
var e = 0;
var d = 0;
var dn = 0;
Enemy.prototype.draw = function()
{
	clearCtxEnemy();
	if ((st <= 5) && (d != 5)) 
	ctxEnemy.drawImage(tiles, this.srcX, this.srcY, this.width, this.height, 
		this.drawX, this.drawY, this.width, this.height); 
	else 
	{
//	this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;  //число 0.1-1
//	this.drawY = Math.floor(Math.random() * gameHeight);
//	this.speed = 1;
//	while(this.drawY + 58 > gameHeight)
//	{ 
//		this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;  //число 0.1-1
//		this.drawY = Math.floor(Math.random() * gameHeight);
//	}
	ctxEnemy.drawImage(tiles, 150, 160, 39, 60, 
		this.drawX, this.drawY, 39, 60); 
	//dn += 1;
	
	}
	if ((dn >= 1200) || (health == 0)) clearTimeout();
}

Water.prototype.draw = function()
{
	clearCtxEnemy();
	if ((st <= 5) && (d != 5)) 
	ctxW.drawImage(tiles, this.srcX, this.srcY, this.width, this.height, 
		this.drawX, this.drawY, this.width, this.height); 
	else 
	{while (this.drawX == enemy2.drawX) this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;
	ctxW.drawImage(tiles, 208, 160, 60, 39, 
		this.drawX, this.drawY, 200, 130); 
	//dn += 1;
	
	}
	if (dn >= 1190) clearTimeout();

}
Enemy.prototype.update = function()
{
//	if ((st <= 5) && (d != 5)) 
	this.drawX -= 7;
//	else this.drawX -= 7;
	if (this.drawX + this.width < 0)
	{
		this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;
		this.drawY = Math.floor(Math.random() * gameHeight);
		
	}
}

Water.prototype.update = function()
{
	this.drawX -= 7;
	if (this.drawX + this.width < 0)
	{
		this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;
		this.drawY = Math.floor(Math.random() * gameHeight);
		
	}
}
var nd = 0;
Enemy2.prototype.draw = function()
{
	clearCtxEnemy2();
	if ((st <= 5) && (d != 5)) 
	ctxEnemy2.drawImage(tiles, this.srcX, this.srcY, this.width, this.height, 
		this.drawX, this.drawY, 186, 194); 
	else {//dn += 1; if (dn == 10) res();
	//this.drawX = Math.floor(Math.random() * (gameWidth - 361 - this.width));
	//this.drawY = Math.floor(Math.random() * gameHeight);
	//this.speed = 1;
	//while(this.drawY + 58 > gameHeight)
	//{ 
	//	this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;  //число 0.1-1
	//	this.drawY = Math.floor(Math.random() * gameHeight);
	//}
ctxEnemy2.drawImage(tiles, 208, 160, 244, 141, 
		this.drawX, this.drawY, 487, 300)
	if (this.drawX > 442) clearTimeout();}
	if ((dn >= 1200) || (health == 0)) clearTimeout();
}

Enemy2.prototype.update = function()
{
	if ((st <= 5) && (d != 5)) 
	{
	this.drawY += 4;
	this.drawX -= 4;
	
	if (this.drawY > gameHeight + 200)
	{
		this.drawX = Math.floor(Math.random() * gameWidth);
		this.drawY = 0;
	}
	}
	else 
	{this.drawX -=  10;
	if (this.drawX + this.width < 0)
	{
		this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;
		this.drawY = Math.floor(Math.random() * gameHeight);
	}
	}
}


Player.prototype.draw = function()
{
	clearCtxPlayer();
	ppp += 1;
//	ctxPl.drawImage(tiles, this.srcX, this.srcY, this.width, this.height, 
//		this.drawX, this.drawY, this.width, this.height);
	ctxPl.drawImage(hiddenImg, 0, 0, 650, 600, 
		this.drawX, this.drawY, 177, 119);
}


Player2.prototype.draw2 = function()
{
	if (dn >= 1200) clearTimeout();
	ctxPl2.drawImage(vs, this.srcX, this.srcY, this.width, this.height, 
		player.drawX + 20, player.drawY, this.width, this.height);
	clearCtxEnemy2();
	ctxPl2.drawImage(vs, 178, 33, 149, 125, 
		player.drawX + 20, player.drawY, 149, 125);
	clearCtxEnemy2();
	ctxPl2.drawImage(vs, 422, 34, 202, 180, 
		player.drawX + 20, player.drawY, 149, 125);
	clearCtxEnemy2();
	ctxPl2.drawImage(vs, 30, 224, 154, 139, 
		player.drawX + 20, player.drawY, 154, 139);
	clearCtxEnemy2();
	ctxPl2.drawImage(vs, 288, 234, 155, 130, 
		player.drawX + 20, player.drawY, 155, 130);
	if ((dn >= 1200) || (health == 0)) clearTimeout();
}
var kkooll = 0;
var kol = 0;
function res()
{
	
	if ((dn >= 10) && (health != 0))
	{
		//clearTimeout();
		
		clearCtxEnemy2();
		clearCtxPlayer();
		clearCtxEnemy();
		ctxStats.clearRect(0, 0, gameWidth, gameHeight);
		 map11X = 0; 
		
		//ctxStats.fillText(kkooll, 500, 300);
		//ctxStats.fillText(e, 500, 207);
		//ctxStats.fillText(kol, 500, 272);
		//ctxStats.fillText(d, 500, 331);
		//ctxStats.fillText(e, 500, 1000);
		//num = 0; init(); kkooll = t; k = 1000000001; 
		//ctxStats.fillText(kkooll, 500, 300);
	}
}
Player.prototype.update = function()
{
	if (health <= 0) { num = 0; init(); kkooll = t; k = 1000000001;ctxStats.clearRect(0, 0, gameWidth, gameHeight);map12X = 0; 
		ctxStats.fillText("Game over! Your result: " + kkooll, 500, 500);}
	
//	if (health <= 0) {num = 0; init(); kol = t; k = 1000000001; ctxStats.clearRect(0, 0, gameWidth/2, gameHeight/2);ctxStats.fillText("Game over", 100, 200); 
//		ctxStats.clearRect(640, 0, gameWidth, gameHeight); ctxStats.fillText("Result: " + kol, 640, 100);}//resetHealth();
	if (this.drawX < 0) this.drawX = 0;
	if (this.drawX > gameWidth - this.width) this.drawX = gameWidth - this.width;
	if (this.drawY < 0) this.drawY = 0;
	if (this.drawY > gameHeight - this.height) this.drawY = gameHeight - this.height;

	//столкновения
/*
		if ((this.drawX + this.width >= enemy.drawX && this.drawY >= enemy.drawY &&  
			this.drawX + this.width <= enemy.drawX + enemy.width && this.drawY <= enemy.drawY + enemy.height) ||
			(this.drawX + this.width >= enemy.drawX && this.drawY + this.height >= enemy.drawY &&  
			this.drawX + this.width <= enemy.drawX + enemy.width && this.drawY + this.height <= enemy.drawY + enemy.height) ||
			(this.drawX >= enemy.drawX && this.drawY >= enemy.drawY &&  
			this.drawX + this.width <= enemy.drawX + enemy.width && this.drawY <= enemy.drawY + enemy.height) ||
			(this.drawX >= enemy.drawX && this.drawY + this.height >= enemy.drawY &&  
			this.drawX <= enemy.drawX + enemy.width && this.drawY + this.height <= enemy.drawY + enemy.height))
		{
			clearCtxEnemy();
			clearCtxEnemy();
			enemy = new Enemy();
			
		} 
*/

if (st >= 5) {dn += 1; if (dn >= 1200) res();}
if (st > 5)
{
	var nnn = enemy.drawY;
		while (nnn <= enemy.drawY + enemy.height)
		{
		if (enemy.drawY == -1.19 * enemy.drawX + 231.26) 
		{
			clearCtxEnemy();
			enemy = new Enemy();
			
		} 
		if (((this.drawY == nnn) && (this.drawX <= enemy.drawX) && (enemy.drawX <= this.drawX + this.width)) ||
			((this.drawY + this.height == nnn) && (this.drawX <= enemy.drawX) && (enemy.drawX <= this.drawX + this.width)) ||
			((this.drawX + this.width == enemy.drawX) && (this.drawY <= nnn) && (nnn <= this.drawY + this.height)) ||
			((this.drawX == enemy.drawX) && (this.drawY <= nnn) && (nnn <= this.drawY + this.height)))
		{
			clearCtxEnemy();
			health+=1;
			if (st <= 5) {e += 1; 	ctxStats.clearRect(160, 0, 320, gameHeight); ctxStats.fillText("Your strong: " + e, 160, 20);}
			else {d += 1; 	ctxStats.clearRect(320, 0, 480, gameHeight); ctxStats.fillText("Your diplom: " + d, 320, 20);}
			enemy = new Enemy();//if (d == 5) { map4X = 0;}
			
		} 
		nnn += 1;
		}

var nnn2 = enemy.drawX;
		while (nnn2 <= enemy.drawX + 244)
		{
		if (((this.drawX == nnn2) && (this.drawY <= enemy.drawY) && (enemy.drawY <= this.drawY + this.height)) ||
			((this.drawX + this.width == nnn2) && (this.drawY <= enemy.drawY) && (enemy.drawY <= this.drawY + this.height)) ||
			((this.drawY + this.height == enemy.drawY) && (this.drawX <= nnn2) && (nnn2 <= this.drawX + this.width)) ||
			((this.drawY == enemy.drawY) && (this.drawX <= nnn2) && (nnn2 <= this.drawX + this.width)))
		{
			clearCtxEnemy();
			health+=1;
			if (st <= 5) {e += 1; 	ctxStats.clearRect(160, 0, 320, gameHeight); ctxStats.fillText("Your strong: " + e, 160, 20);}
			else {d += 1; 	ctxStats.clearRect(320, 0, 480, gameHeight); ctxStats.fillText("Your diplom: " + d, 320, 50);}
			enemy = new Enemy();//if (d == 5) { map4X = 0;}
			
		} 
		nnn2 += 1;
		}


var nnn = enemy2.drawY;
		while (nnn <= enemy2.drawY + 141)
		{
		if (((this.drawY  == nnn) && (this.drawX <= enemy2.drawX) && (enemy2.drawX <= this.drawX + this.width)) ||
			((this.drawY + this.height == nnn) && (this.drawX <= enemy2.drawX) && (enemy2.drawX <= this.drawX + this.width)) ||
			((this.drawX + this.width == enemy2.drawX) && (this.drawY <= nnn) && (nnn <= this.drawY + this.height)) ||
			((this.drawX == enemy2.drawX) && (this.drawY <= nnn) && (nnn <= this.drawY + this.height)))
		{
			player2.draw2();
			health-=1;
			kol += 1;
			if (st > 5) {nd += 1; 	ctxStats.clearRect(480, 0, 640, gameHeight); ctxStats.fillText("Your water: " + nd, 480, 50);}
			clearCtxEnemy2();
			enemy2 = new Enemy2();//if (d == 5) { map4X = 0;}
			
		} 
		if (enemy2.drawY == -1.25 * enemy2.drawX + 245.5) 
		{
			player2.draw2();
			health-=1;
			kol += 1;
			if (st > 5) {nd += 1; 	ctxStats.clearRect(480, 0, 640, gameHeight); ctxStats.fillText("Your water: " + nd, 480, 50);}
			clearCtxEnemy2();
			enemy2 = new Enemy2();//if (d == 5) { map4X = 0;}
		} 
		nnn += 1;
		}

var nnn2 = enemy2.drawX;
		while (nnn2 <= enemy2.drawX + 244)
		{
		if (((this.drawX == nnn2) && (this.drawY <= enemy2.drawY) && (enemy2.drawY <= this.drawY + this.height)) ||
			((this.drawX + this.width == nnn2) && (this.drawY <= enemy2.drawY) && (enemy2.drawY <= this.drawY + this.height)) ||
			((this.drawY + this.height == enemy2.drawY) && (this.drawX <= nnn2) && (nnn2 <= this.drawX + this.width)) ||
			((this.drawY == enemy2.drawY) && (this.drawX <= nnn2) && (nnn2 <= this.drawX + this.width)))
		{
			player2.draw2();
			health-=1;
			kol += 1;
			if (st > 5) {nd += 1; 	ctxStats.clearRect(480, 0, 640, gameHeight); ctxStats.fillText("Your water: " + nd, 480, 50);map4X = 0;}
			clearCtxEnemy2();
			enemy2 = new Enemy2();//if (d == 5) { map4X = 0;}
			
		} 
		nnn2 += 1;
		}

} else{
var nnn = enemy.drawY;
		while (nnn <= enemy.drawY + enemy.height)
		{
		if (enemy.drawY == -1.19 * enemy.drawX + 231.26) 
		{
			clearCtxEnemy();
			enemy = new Enemy();
			
		} 
		if (((this.drawY == nnn) && (this.drawX <= enemy.drawX) && (enemy.drawX <= this.drawX + this.width)) ||
			((this.drawY + this.height == nnn) && (this.drawX <= enemy.drawX) && (enemy.drawX <= this.drawX + this.width)) ||
			((this.drawX + this.width == enemy.drawX) && (this.drawY <= nnn) && (nnn <= this.drawY + this.height)) ||
			((this.drawX == enemy.drawX) && (this.drawY <= nnn) && (nnn <= this.drawY + this.height)))
		{
			clearCtxEnemy();
			health+=1;
			if (st <= 5) {e += 1; 	ctxStats.clearRect(160, 0, 320, gameHeight); ctxStats.fillText("Your strong: " + e, 160, 20);}
			else {d += 1; 	ctxStats.clearRect(320, 0, 480, gameHeight); ctxStats.fillText("Your diplom: " + d, 320, 20);}
			enemy = new Enemy();//if (d == 5) { map4X = 0;}
			
		} 
		nnn += 1;
		}

var nnn2 = enemy.drawX;
		while (nnn2 <= enemy.drawX + enemy.width)
		{
		if (((this.drawX == nnn2) && (this.drawY <= enemy.drawY) && (enemy.drawY <= this.drawY + this.height)) ||
			((this.drawX + this.width == nnn2) && (this.drawY <= enemy.drawY) && (enemy.drawY <= this.drawY + this.height)) ||
			((this.drawY + this.height == enemy.drawY) && (this.drawX <= nnn2) && (nnn2 <= this.drawX + this.width)) ||
			((this.drawY == enemy.drawY) && (this.drawX <= nnn2) && (nnn2 <= this.drawX + this.width)))
		{
			clearCtxEnemy();
			health+=1;
			if (st <= 5) {e += 1; 	ctxStats.clearRect(160, 0, 320, gameHeight); ctxStats.fillText("Your strong: " + e, 160, 20);}
			else {d += 1; 	ctxStats.clearRect(320, 0, 480, gameHeight); ctxStats.fillText("Your diplom: " + d, 320, 50);}
			enemy = new Enemy();//if (d == 5) { map4X = 0;}
			
		} 
		nnn2 += 1;
		}


var nnn = enemy2.drawY;
		while (nnn <= enemy2.drawY + enemy2.height)
		{
		if (((this.drawY  == nnn) && (this.drawX <= enemy2.drawX) && (enemy2.drawX <= this.drawX + this.width)) ||
			((this.drawY + this.height == nnn) && (this.drawX <= enemy2.drawX) && (enemy2.drawX <= this.drawX + this.width)) ||
			((this.drawX + this.width == enemy2.drawX) && (this.drawY <= nnn) && (nnn <= this.drawY + this.height)) ||
			((this.drawX == enemy2.drawX) && (this.drawY <= nnn) && (nnn <= this.drawY + this.height)))
		{
			player2.draw2();
			health-=1;
			kol += 1;
			if (st > 5) {nd += 1; 	ctxStats.clearRect(480, 0, 640, gameHeight); ctxStats.fillText("Your water: " + nd, 480, 50);}
			clearCtxEnemy2();
			enemy2 = new Enemy2();//if (d == 5) { map4X = 0;}
			
		} 
		if (enemy2.drawY == -1.25 * enemy2.drawX + 245.5) 
		{
			player2.draw2();
			health-=1;
			kol += 1;
			if (st > 5) {nd += 1; 	ctxStats.clearRect(480, 0, 640, gameHeight); ctxStats.fillText("Your water: " + nd, 480, 50);}
			clearCtxEnemy2();
			enemy2 = new Enemy2();//if (d == 5) { map4X = 0;}
		} 
		nnn += 1;
		}

var nnn2 = enemy2.drawX;
		while (nnn2 <= enemy2.drawX + enemy2.width)
		{
		if (((this.drawX == nnn2) && (this.drawY <= enemy2.drawY) && (enemy2.drawY <= this.drawY + this.height)) ||
			((this.drawX + this.width == nnn2) && (this.drawY <= enemy2.drawY) && (enemy2.drawY <= this.drawY + this.height)) ||
			((this.drawY + this.height == enemy2.drawY) && (this.drawX <= nnn2) && (nnn2 <= this.drawX + this.width)) ||
			((this.drawY == enemy2.drawY) && (this.drawX <= nnn2) && (nnn2 <= this.drawX + this.width)))
		{
			player2.draw2();
			health-=1;
			kol += 1;
			if (st > 5) {nd += 1; 	ctxStats.clearRect(480, 0, 640, gameHeight); ctxStats.fillText("Your water: " + nd, 480, 50);map4X = 0;}
			clearCtxEnemy2();
			enemy2 = new Enemy2();//if (d == 5) { map4X = 0;}
			
		} 
		nnn2 += 1;
		}
}
	//this.drawX += 3; /*перемещение*/
	this.chooseDir(); // управление кнопками wsad
}


Player.prototype.chooseDir = function()
{
	if (this.isUp)
	{
		this.drawY -= this.speed;
	}
	if (this.isDown)
	{
		this.drawY += this.speed;
	}
	if (this.isRight)
	{
		this.drawX += this.speed;
	}
	if (this.isLeft)
	{
		this.drawX -= this.speed;
	}
}



function checkKeyDown(e)
{
	
	var keyID = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyID);
	
	if (keyChar == "W")
	{
		player.isUp = true;
		e.preventDefault();
	}
	if (keyChar == "S")
	{
		player.isDown = true;
		e.preventDefault();
	}
	if (keyChar == "D")
	{
		player.isRight = true;
		e.preventDefault();
	}
	if (keyChar == "A")
	{
		player.isLeft = true;
		e.preventDefault();
	}
	
}


function checkKeyUp(e)
{
	
	var keyID = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyID);
	
	if (keyChar == "W")
	{
		player.isUp = false;
		e.preventDefault();
	}
	if (keyChar == "S")
	{
		player.isDown = false;
		e.preventDefault();
	}
	if (keyChar == "D")
	{
		player.isRight = false;
		e.preventDefault();
	}
	if (keyChar == "A")
	{
		player.isLeft = false;
		e.preventDefault();
	}
}

function drawRect()
{
	ctxMap.fillStyle = "#3D3D3D";
	ctxMap.fillRect(10, 10, 100, 100); //прямоугольник
}

function clearRect()
{
	ctxMap.clearRect(0, 0, 800, 500);
}

function clearCtxPlayer()
{
	ctxPl.clearRect(0, 0, gameWidth, gameHeight);
	
}

function clearCtxEnemy()
{
	ctxEnemy.clearRect(0, 0, gameWidth, gameHeight);
}



function updateStats()
{
	ctxStats.clearRect(0, 0, 300, gameHeight);
	ctxStats.fillText("H e a l t h " + health, 10, 400);
}

function clearCtxEnemy2()
{
	ctxEnemy2.clearRect(0, 0, gameWidth, gameHeight);
}

function drawBg()
{
	ctxMap.clearRect(0, 0, gameWidth, gameHeight);
	ctxMap.drawImage(background, 0, 0, 800, 480, mapX, 0, gameWidth, gameHeight); /*фон-картинка(координаты картинки+плоскости*/
	ctxMap.drawImage(background1, 0, 0, 800, 480, map1X, 0, gameWidth, gameHeight);
	ctxMap.drawImage(background2, 0, 0, 800, 480, map2X, 0, gameWidth, gameHeight);
	ctxMap.drawImage(background3, 0, 0, 800, 480, map3X, 0, gameWidth, gameHeight);
	ctxMap.drawImage(background4, 0, 0, 800, 480, map5X, 0, gameWidth, gameHeight);

	ctxMap.drawImage(background11, 0, 0, 800, 480, map11X, 0, gameWidth, gameHeight);
	ctxMap.drawImage(background12, 0, 0, 800, 480, map12X, 0, gameWidth, gameHeight);
}

function drawBg2()
{
	ctxMap.drawImage(background2, 0, 0, 800, 480, map2X, 0, gameWidth, gameHeight);
}

function drawSlova()
{
	ctxMap.drawImage(sl, 0, 0, 300, 214, map10X, 10, 300, 214);
}
