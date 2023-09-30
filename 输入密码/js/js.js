// 警示框
// alert('bb');alert('giegie')
// 输入框
// prompt('giegie')
// document.write(prompt('bb'))
// 判断及格*
// var score =parseInt(prompt('请输入成绩'));
// if(score>=60){
// 	alert("及格")
// }else{
// 	alert("不及格")
// }
// 判断年龄*
// var age =parseInt(prompt('请输入年龄'));
// if(age>=18){
// 	alert("可以进网吧")
// }else{
// 	alert("未满18岁	")
// }
// 判断成绩*
// var score =parseInt(prompt('请学生输入成绩'));
// if(score>=90){
// 		alert("优秀")
// }else if(score>=80){
// 	alert("良好")
// }else if(score>=60){
// 	alert("及格")
// }
// 1-100输出*
// for( var i=100;i>=1;i--){
// 	document.write(i)
// 	document.write("<br>")
// }
//五排星星*
// for( var i=1;i<=5;i++){
// document.write('第'+i+'排五颗星')
// for(var j=1;j<=i;j++){
	// document.write('*')
// }
// document.write("<br>")
// }
// bb*
// var message=prompt('你喜欢我吗')
// while(message !='喜欢'){
// 	message=prompt('你喜欢我吗');
// }
// alert('我也喜欢你')

// var j=1;
// do{
// 	document.write(j+"<br>")
// 	j++
// }while(j<=10)
// 2468*
// var j=1;
// do{
// 	if(j%2==0){
// 		document.write(j+"<br>");
// 	}
// 	j++;
// }while(j<=100);
// 1-10*
// var i=0;
// while(i<10){
// 	i++;
// 	if(i==7){continue;}
// 	document.write(i+"<br>");
// 	// continue终止这一次循环 继续下一次循环
// 	// break;终止所有循环
// }
// 2550
// var i=1;
// var sum=0;
// while(i<=100){
// 	i++;
// 	if(1%2==0){continue}
// 	sum+=i;
// 	i++;
// }document.write(sum);
// 99
// for( var i=1;i<=9;i++){
// for(var j=1;j<=i;j++){
// 	document.write(j+"*"+i+"="+i*j);
// }
// document.write("<br>")
// }
// 3885
// function add(k,j){
// 	var sum = 0;
// 	for (var i=k;i<=j;i++){
// 		sum=sum+i;
// 	}
// 	alert(sum)
	
// }
// add(50,100)
// 求和计算器*
// function sum(){
// 	var num1=parseFloat(document.myform.first.value);
// 	var num2=parseFloat(document.myform.second.value);
// 	if(isNaN(num1)==true){
// 		alert(document.myform.first.value+"不能转换为一个数字!")
// 		return;
// 	}
// 	if(isNaN(num2)==true){
// 		alert(document.myform.second.value+"不能转换为一个数字!")
// 		return;
// 	}
// 	document.myform.result.value=num1+num2;
// }
// 花括号
// var chenjinshen={
// 	name:'陈劲生',
// 	age:'18',
// 	height:'188',
// 	sex:'男',
// 	eat:function(){
// 		document.write(nijia);
// 	},
// 	game:function(){
// 	document.write(nijia);
// 	}
// 构造函数
// function mingxing(){
// 	this.name ="刘德华";
// 	this.age ="66";
// 	this.skill ="function(){
// 		document.write(shamgbb)
// 	}
// }

// function Mingxing(name,age){
// 	this.name =name;
// 	this.age =age;
// 	this.skill ="function(shangchang){
// 		document.write(shamgbb)
// 	}
// }
// var ldh=new mingxing("刘德华",60)
// document.write(ldh.skill("唱歌"))
// }
// var car ={
// 	name :"奔驰",
// 	color:"黑色",
// 	run:function(){
// 	}
// }
// var car =new object();
// 	car.name :'奔驰';
// 	car.color:'黑色';
// 	car.pailiang:2.0;
// 	car.run=canrun;
// 		function canrun(){
// 			alert(123)
// 		}
// 	car.run()

// var arr1=['red','green','blue'];
// arrl[3]='pink';
// console.log(arr1);
// arr1[4]='hotpink';
// console.log(arr1);

// 12（字符串）
// var str0="hello  world";
// alert(str0. length);
// 4个字符串的长度分别是：12,15,15,6
// var str0 = "Hello World!";// var str1 = "   Hello World!"; //前面有3个空格// var str2 = "Hello World!   "; //后面有3个空格// var str4 = "你好，世界!";   //，是全角的 ！是半角的// document.write("4个字符串的长度分别是："+str0.length+","+str1.length+","+str2.length+","+str4.length);// 同charAt
// var str='同一个世界，同一个梦想！';
// // document.write(str.charAt(0))
// 3indexOf
// var num= str.indexOf("世")
// document.write(num)
// 截取substr
// var str="hello world";
//document.write(str.substr(2,5))//llo w
//document.write(str.substring(2,5))//llo end取不到
//document.write(str.slice(2,-2))//后两位取不到

// function check(){
// 	var usename=document.myform.usename.value;
// 	if(usename.length>3 ){
// 		alert("请输入正确用户名");
// 		return false;
// 	}
// 	var password=document.myform.password.value();
// 	if(password.length>6){
// 		alert("密码不能少于6位")
// 		return false;
// 	}
// 	var email=document.myform.email.value();
// 	if(email.indexOf("@")){
// 		alert("邮箱地址必须包含@符号");
// 		return false;
// 	}
// 	return true;
// }

// var i;
// for(i=0;i<usename.length;i++){
// 	var zf=use
// }
// 1,2,3,a,true数组
// var arr=[1,2,3,'a',true,11,37]
// var arr1=new Array();
// document.write(arr);
//alert(arr[0])//0123
// for(var i=0;i<arr.length;i++){
// 	document.write("我们的第"+(i+1)+"个数组元素是"+arr[i]+"<br>")
// }  
// 数组元素的个数就是数组的长度5
// alert(arr.length)
//0123
//arr=[["岳麓区","芙蓉区","望城区"],["雨湖区","岳塘区"],["天元区","芦淞区"]]
//alert(arr[0])//岳麓区,芙蓉区,望城区
//alert(arr[1])//雨湖区,岳塘区
//alert(arr[1][1])//岳塘区
// var arr=[["岳麓区","芙蓉区","望城区"],["雨湖区","岳塘区"],["天元区","芦淞区"]];
// for(var i=0;i<arr.length;i++){
//document.write(arr[i]+"<br>")//岳麓区,芙蓉区,望城区 雨湖区,岳塘区 天元区,芦淞区
// var str="第"+(i+1)+"组城市有";
// for(var j=1;j<arr[1].length;j++){
// 		arr[2][0]
// 	document.write(j+arr[0][1]+"<br>")
// 	}
// }
// 冒泡排序
// function sortNumber(a,b){
// 	return a-b;
// }
// var arr=[13,2,23,70]
// document.write(arr.sort(sortNumber)+"<br>");
//push unshift
// var arr=[5,4,3,2,1];
// for (var i=0;i<=arr.length-1;i++){
// 	for (var j=0;j<=arr.length-i-1;j++){
// 		if(arr[j] > arr[j+1]){
// 			var temp = arr[j];
// 			var [j] = arr[j+1];
// 			var [j+1] = temp;
// 		}
// 	}
// }
// console.log(arr);				
// function getMax(num1.num2){
// 	if(num1>num2){
// 		return num1;
// 	}else{
// 		return num2;
// 	}
// }
// console.log(getMax(1,3));
// console.log(getMax(11,3));
// 替换
// function replace(){
// 	var str="大傻逼";
// 	var reg=/傻逼|sb/gi
// 	var re=str.replace(reg,"**");
// 	document.myform.userReplace.value=re;
// }
// Math
// 绝对值*隐式转换  会把字符串型的-1 转换成数字型的
// document.write(Math.abs(1)+'<br>')//1   
// document.write(Math.abs(-1)+'<br>')//1   
// document.write(Math.abs('-1')+'<br>')//1   
// document.write(Math.abs('JavaScript')+'<br>')// NaN
// 3个取整的方法*取大取小四舍五入
//1 Math.floor()  往下取整  最小的取值  （去掉小数部分）
// document.write(Math.floor(1.1)+'<br>'); // 1     2>1.1>1
// document.write(Math.floor(1.9)+'<br>'); // 1     2>1.9>1
// //2 Math.ceil()   往上取整  最大的取值  （去掉小数部分 然后+1）
// document.write(Math.ceil(1.1)+'<br>');//2  2>1.1>1
// document.write(Math.ceil(1.9)+'<br>');//2  2>1.9>1
// //Math.round();  //四舍五入的  但是 0.5特殊  他会往大的值取
// document.write(Math.round(1.9)+'<br>'); //2
// document.write(Math.round(1.1)+'<br>'); //1
// document.write(Math.round(1.5)+'<br>'); //2
// document.write(Math.round(-1.1)+'<br>'); // -1
// document.write(Math.round(-1.5)+'<br>'); // -1      -1>-1.5>-2
// document.write(Math.max(145,200,1,20)+'<br>');//200  返回几个数字中的最大值
// document.write(Math.min(145,200,1,20)+'<br>');//1  返回几个数字中的最小值
// 随机数
// document.write(Math.random());//返回0-1之间浮点数  可以取0  但是不能取1 
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min; 
// }
// var num = getRandomArbitrary(1,2); // 1<num <2
// document.write(num);
// function getRandom(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
// }
// var num = getRandom(0,100);
// document.write(num);
// //随机点名  '
// var arr = ['张三','李四','王五','刘柳','胡加'];
// document.write(arr[getRandom(0,4)]);//数组有5个数组元素  下标是 0 - 4 
// //抽取6位随机数字 100000 最小的6位数  最大的6位数 999999
// document.write(getRandom(100000,999999));
// Date
// 今天是年月日星期几*
//Date() 日期对象是一个构造函数  必须要使用new
//var arr = new Array(); //创建了一个数组
//var obj = new Object();//创建了一个对象
//var date = new Date();//创建了一个时间对象
//document.write(date);  //没有参数的话 能获取到 当前系统的时间
//参数常用写法   数字型 2020,2,28    或者是字符串型 '2020-02-28 11:30:30'
//var date = new Date(); // 返回是3月  不是2月
//document.write(date);
//var date = new Date();  //对象名.方法名()
//document.write(date.getFullYear());//返回当前日期的 年份   2020  没有参数的
//document.write(date.getMonth()+1);//返回当前日期的月份减1    记得+1 
//document.write(date.getDate());//返回当前日期几号    5
//document.write(date.getDay());//返回当前日期星期几 当星期1到星期6 都是返回1-6  但是星期天的话 返回是 0
// var date = new Date();
// var year = date.getFullYear();// 2020
// var month = date.getMonth()+1;//3
// var dates = date.getDate(); //5
// var week = date.getDay();//0-6  week为0 就显示星期天  为1的时候显示一  if ifelse else 多重if语句 或者 switch  为方便我们这里用数组  利用数组下标来进行匹配
// var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
// document.write('今天是'+year+'年'+month+'月'+dates+'日'+arr[week]);
// 现在是：时分秒*
// var date = new Date();//先创建一个日期对象 对象名是date
// function getTime(){
//     var time = new Date(); //创建一个了 时间对象   系统的当前
//     var h = time.getHours(); //获取到了小时  16
//      if(m <10 ){ m = '0' + m;}
//       h = h < 10 ? '0'+h : h   ;
//     var m = time.getMinutes(); //获取到了分钟  19
//        if(m <10 ){ m = '0' + m;}
//       m = m < 10 ? '0'+m : m   ;
//     var s = time.getSeconds(); //秒钟
//      if(s <10 ){ s = '0' + s;}
//     return h+':'+m+':'+s;    //08:18:08
// }
// var nowTime = getTime();
// document.write('现在是：'+nowTime);
// 时间戳*倒计时
//document.write(+new Date());//输出我们当前的时间戳 也就是这个时间离1970年1月1号 0点0分0秒 所经过的毫秒数
//document.write(+new Date('2020-02-29 17:30:00'));//获取我们指定时间的时间戳 这个值是固定的
//① 核心算法:输入的时间减去现在的时间就是剩余的时间,即倒计时,但是不能拿着时分秒相减,比如05分减去25分,结果会是负数的。
//②用时间戳来做。用户输入时间总的毫秒数减去现在时间的总的毫秒数,得到的就是剩余时间的毫秒数。
//③把剩余时间总的毫秒数转换为天、时、分、秒(时间戳转换为时分秒)
//转换公式如下:
//d = parseInt(总秒数/ 60/60/24) // 计算天数
//h = parseInt(总秒数/ 60/60 %24) //计算小时
//m= parseInt(总秒数/60 %60); // 计算分数
//s = parseInt(总秒数%60);//计算当前秒数
// function countDown(time){
//     var nowTime = +new Date()//获取了系统当前时间的时间戳
//     var inputTime = +new Date(time);//获取用户输入的时间 的 时间戳
//     var times = (inputTime - nowTime)/1000;  //获取到了 2个时间的 时间差 (单位 ： 由毫秒的变成了秒)
//     var d = parseInt(times/60/60/24); // 计算天数
// 	d = d < 10 ? '0'+d : d ;
//     var h = parseInt(times/60/60%24); //计算小时
// 	h = h < 10 ? '0'+h : h ;
//     var m = parseInt(times/60%60); // 计算分数
// 	m = m < 10 ? '0'+m : m ;
//     var s = parseInt(times%60);//计算当前秒数
// 	s = s < 10 ? '0'+s : s ;
//     return '距离'+time+'还有：'+d+'天'+h+'小时'+m+'分钟'+s+'秒';
// }
// document.write(countDown('2022-05-01 8:00:00'));
// 倒计时*自动更新
//我们创建一个叫  times的输入框 现在对这个输入进行赋值 10:30:10    过一秒那么重新赋值 10：30：11  每隔一秒就重新赋值一次
// function getTime(){
//     var time = new Date(); 
//     var h = time.getHours();
//         h = h < 10 ? '0'+h : h   ;
//     var m = time.getMinutes();
//         m = m < 10 ? '0'+m : m   ;
//     var s = time.getSeconds();
//         s = s < 10 ? '0'+s : s   ;    //条件表单式 ？ 语句1 ： 语句2 ； 条件表单式成立执行语句1 否则执行语句2
//     document.myform.times.value = '现在是：'+ h+':'+m+':'+s;
//     setTimeout('getTime()',1000);//setTimeout 这个方法 2个参数 1个函数名 第2 间隔时间  间隔多少毫秒执行函数  第一个参数实际上不是调用函数   字符串类型的参数 内容是 函数名();   
// }
//我们的js需要调用html里面标签信息的时候  那么我们的js就必须写在标签的后面
//我们习惯了 是把js嵌入代码写在了我们的head标签里面  那么head标签里面是没有 我们from表单相关标签  
//那么我们怎么办？  函数的话是不会自动执行的  需要执行 就需要调用
//我们把调用函数的代码 放到我们的 html里面 让html标签（我们需要用到的标签 ）全部读完之后 在调用函数
//现在我们把调用函数的代码写到 body标签里面 让整个body读完之后 才去调用函数  这样问题是不是解决了？
//我们在body标签里面写了一个onLoad事件属性 就是当我们的body标签里面的所有的内容和标签读完以后执行等于号后面的js代码

// if(isNaN(num1)==true)







