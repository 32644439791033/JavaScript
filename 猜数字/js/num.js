let i = 0
function getRandom(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
var num = getRandom(0,100);
console.log(num)
for(;;){
	var num1=prompt("请输入数字")-0;
	if(num1>num){
		alert('猜大了')
		i++
	}else if(num1<num){
		alert('猜小了')
		i++
	}else if(isNaN(num1 == true)){
		alert('请输入正确的数字')
		i++
	}else if(num1==num) {
		i++
		alert("恭喜你猜对了!"+"一起猜了"+i+"次")
		break
	}
}