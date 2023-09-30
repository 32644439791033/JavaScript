/*
赋值运算  =
算术运算符  +、-、 * 、 / 、%、++、--、-(求反)
结合运算  *=  /=  +=  -=
比较运算符   ==、!=、>、>=、<、<=、=== 、!===
逻辑运算符   &&、||、！
字符串运算
*/
var a =10, b=5;  // = 赋值运算符  数值

document.write('a+b='+(a+b)+'<br>');   //  +  运算   注意利用()优先级 先计算a+b  在与前面的字符串相加
document.write('a-b='+(a-b)+'<br>');   //  -  运算   
document.write('a*b='+(a*b)+'<br>');   //  *  运算   
document.write('a/b='+(a/b)+'<br>');   //  /  运算   
document.write('a%b='+(a%b)+'<br>');   //  -  运算      
document.write('++a='+(++a)+'<br>');   //  ++  运算   先加1  在参与运行  输出的是11  a=11
document.write('a='+a+'<br>'); // a =11
document.write('a++='+(a++)+'<br>');  //  此处 a =11  执行完才能加1 在输入的时候还是11    输入出完成之后 才是12
document.write('a='+a+'<br>'); // a =12    上一行代码 已经执行完毕了  已经对a+1  输出12



var c =10, d=5;
document.write('c*=d='+(c*=d)+'<br>');   // 结合运算符    c*=d   实际上就是  c =  c*d 
c =10;
document.write('c/=d='+(c/=d)+'<br>');   // 结合运算符    c/=d   实际上就是  c =  c/d 
c =10;
document.write('c+=d='+(c+=d)+'<br>');   // 结合运算符    c+=d   实际上就是  c =  c+d   
c =10;
document.write('c-=d='+(c-=d)+'<br>');   // 结合运算符    c-=d   实际上就是  c =  c-d   


var e = 10,f = 5;      //比较运算符 都有一个结果  有个真假  布尔  true   false
document.write('e==f 输出'+(e==f)+'<br>');   //比较预算符    e明细不等于f  输出false
document.write('e!=f 输出'+(e!=f)+'<br>');   //比较预算符    e明细不等于f  输出true
document.write('e>f 输出'+(e>f)+'<br>');   //比较预算符    e明细大于f  输出true
document.write('e<f 输出'+(e<f)+'<br>');   //比较预算符    e明细大于f  输出false
document.write('e>=f 输出'+(e>=f)+'<br>');   //比较预算符    e明细大于f  输出true
document.write('e<=f 输出'+(e<=f)+'<br>');   //比较预算符    e明细大于f  输出false
document.write('e===f 输出'+(e===f)+'<br>');   //比较预算符    绝对等于  操作数的值相等  而且数据类型也要相同  输出false
document.write('e!==f 输出'+(e!==f)+'<br>');   //比较预算符    绝不相等  操作数的值不相等  而且数据类型也要不相同  输出true

var  g = false, h =true; 
document.write('g&&h 输出'+(g&&h)+'<br>');   // 逻辑与运算符  2个条件都必须为 true最后的结果 才是true 否则false     输出 false
document.write('g||h 输出'+(g||h)+'<br>');   // 逻辑或运算符  2个条件只需要1个条件为true 结果为true       输出 true
document.write('!g 输出'+(!g)+'<br>');   // 逻辑非运算符  取反运算   当前是false则输出true  如果是true则输出false      当前输出true

var j = 'hello', k = 'world';
document.write('j+k 输出'+j+' '+k+'<br>');   //字符串连接预算符 +   