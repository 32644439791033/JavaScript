function to(name,max,far,blood){
	this.name =name;
	this.max = max;
	this.far = far ;
	this.blood = blood ;
	this.skill = function(bb){
	document.write("大招是"+bb+"<br>")
 }
}
var lp=new to("廉颇","力量型","近战","500血量");
var yi=new to("后羿","射手型","远程","100血量");
document.write(lp.name+"是"+lp.max+"的"+lp.far+"英雄血量是"+lp.blood)
lp.skill("锤击地面");
document.write(yi.name+"是"+yi.max+"的"+yi.far+"英雄血量是"+yi.blood)
yi.skill("火焰鸟");