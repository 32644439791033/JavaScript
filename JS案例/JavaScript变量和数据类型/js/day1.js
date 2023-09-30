var name;




var name; //定义一个变量  并没有定义变量类型


name = '张三'; // 把张三这个字符串类型的值 赋值给 name   name变量的数据类型就变成了字符串类型
//var name = '张三';  一行实现定义变量 同时进行赋值
alert(typeof(name)); //弹出name变量的 数据类型     使用   typeof()可以获取变量的数据类型
var gongzi = 20000;  //数值
var price =2.5;       //数值
var isTrue = false;    //布尔  true  false
var obj = null;        //空数据类型    null值 就是没有任何值   什么也不表示
document.write("name数据类型是"+typeof(name)+"<br>");
document.write("gongzi数据类型是"+typeof(gongzi)+"<br>");
document.write("isTrue数据类型是"+typeof(isTrue)+"<br>");
document.write("obj数据类型是"+typeof(obj)+"<br>");  // null类型使用 typeof获取到的不是null类型而是object类型  这个比较特殊
var a,b,c=10;
var n,m,p=100;
alert(a); //a变量只是声明 并没有赋值  我们使用的话 就会出现  undefined类型  表示一个未声明的变量或者已声明没有赋值的变量

var k = 10;
var i = 0.5;
alert(k+i); //输出的是10.5  整数+小数 结果是小数

var o =10 ;
var p = 'ok'; 
alert(o+p); //输出的是10ok  整数+字符串 结果是字符串   10ok

var num = "90";
alert(num+10); //
alert(parseInt(num)+10); //结果是 100  使用parseInt强制类型转换  把字符串的90 变成数值型   数值才能相加计算  
        
var h = parseInt(prompt("请输入一个数字"));  //将用户输入的值 强制转换成数值类型