// var wrap=document.getElementById("wrap")
// var wrapwidth=wrap.clientWidth;
// var wrapheight=wrap.clientheight;

// function getRandom(min, max) {
//  // min = Math.ceil(min);
//  // max = Math.floor(max);
//  return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for(var i=0;i<wrap.children.length;i++){
// 	wrap.children[i].x=1
// 	wrap.children[i].y=1
// 	wrap.children[i].flagX=getRandom(0,1)?true:false;
// 	wrap.children[i].flagY=getRandom(0,1)?true:false;
// 	wrap.children[i].style.width=getRandom(10,80)+'px';
// 	wrap.children[i].style.height=wrap.children[i].offsetWidth+'px';
// 	wrap.children[i].style.top=getRandom(0,wrapheight-wrap.children[i].offsetWidth)+'px';
// 	wrap.children[i].style.left=getRandom(0,wrapheight-wrap.children[i].offsetWidth)+'px';
// 	wrap.children[i].style.left='rgb(${random(0,255)},${random(0,255)},${random(0,255)})';
// }
// function moveX(){
// 	for(var i=0;i<wrap.children.length;i++){
// 		if(wrap.children[i].flagX){
// 			wrap.children[i].style.left=wrap.children[i].offsetLeft.x+'px';
// 			if(wrap.children[i].offsetLeft>=wrap.wrapwidth-wrap.children[i].offsetWidth){
// 				wrap.children[i].flagX=false;
// 			}
// 		}else{
// 			wrap.children[i].style.left=wrap.children[i].offsetLeft.x+'px';
// 			if(wrap.children[i].offsetLeft<=0)
// 			wrap.children[i].flagX=true;
// 		}
// 	}
// }
// function moveY(){
// 	for(var i=0;i<wrap.children.length;i++){
// 		if(wrap.children[i].flagX){
// 			wrap.children[i].style.top=wrap.children[i].offsetLeft.y+'px';
// 			if(wrap.children[i].offsetTop>=wrap.wrapheight-wrap.children[i].offsetHeight){
// 				wrap.children[i].flagY=false;
// 			}
// 		}else{
// 			wrap.children[i].style.top=wrap.children[i].offsetLeft.y+'px';
// 			if(wrap.children[i].offsetTop<=0)
// 			wrap.children[i].flagY=true;
// 		}
// 	}
// }
// setInterval(function(){
// 	moveX();
// 	moveY();
// },10);