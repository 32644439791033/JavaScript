// 3个取整的方法
//1 Math.floor()  往下取整  最小的取值  （去掉小数部分）
document.write(Math.floor(1.1)+'<br>'); // 1     2>1.1>1
document.write(Math.floor(1.9)+'<br>'); // 1     2>1.9>1
//2 Math.ceil()   往上取整  最大的取值  （去掉小数部分 然后+1）
document.write(Math.ceil(1.1)+'<br>');//2  2>1.1>1
document.write(Math.ceil(1.9)+'<br>');//2  2>1.9>1
//Math.round();  //四舍五入的  但是 0.5特殊  他会往大的值取
document.write(Math.round(1.9)+'<br>'); //2
document.write(Math.round(1.1)+'<br>'); //1
document.write(Math.round(1.5)+'<br>'); //2
document.write(Math.round(-1.1)+'<br>'); // -1
document.write(Math.round(-1.5)+'<br>'); // -1      -1>-1.5>-2
document.write(Math.max(145,200,1,20)+'<br>');//200  返回几个数字中的最大值
document.write(Math.min(145,200,1,20)+'<br>');//1  返回几个数字中的最小值
