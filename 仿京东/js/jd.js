setInterval(function(){
	var startime = +new Date();
	var endtime = +new Date('2022-05-01 08:01:01');
	var times = (endtime-startime)/1000
	var d=Math.floor(times/60/60/24)
	d=d<10?"0"+d:d;
	var h=Math.floor(times/60/60%24)
	h=h<10?"0"+h:h;
	var m=Math.floor(times/60%60)
	m=m<10?"0"+m:m;
	var s=Math.floor(times%60)
	s=s<10?"0"+s:s;
	document.querySelector('body').innerHTML = `距离2022-05-01 08:01:01还有 : ${d}天${h}小时${m}分钟${s}秒`
},0)