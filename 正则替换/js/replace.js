function replace(){
	var str=document.myform.userInput.value;
	var reg=/我简隋英哪样不是大傻逼|sb/gi;
	var re=str.replace(reg,"我简隋英哪样不是出类拔萃");
	document.myform.userReplace.value = re;
}