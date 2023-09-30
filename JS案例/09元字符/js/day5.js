//元字符（Metacharacter）是拥有特殊含义的字符：

//1   . 	查找单个字符，除了换行和行结束符。
var str="That's hot!";
var reg=/h.t/g;
//document.write(str.match(reg))  // hat hot
var str="That's h\nt!";   
var reg=/h.t/g;
document.write(str.match(reg))  // hat   如果把\n换成\t

//2.  \w  查找单词字符（单词字符包括：a-z、A-Z、0-9，以及下划线, 包含 _ (下划线) 字符。）  
 //  \W 查找非单词字符
var str="The height of the box is 100cm!";//T,h,e,h,e,i,g,h,t,o,f,t,h,e,b,o,x,i,s,1,0,0,c,m
var reg=/\w/g;    
document.write(str.match(reg))  

var str="The height of the box is 100cm!";
var reg=/\W/g;    
document.write(str.match(reg))    // , , , , , ,!   输出的是空格和！

//3 . \d查找数字    \D查找非数字
var str="The height of the box is 100cm!";
var reg=/\d/g;     //查找数字
document.write(str.match(reg))    // 1，0，0

var str="The height of the box is 100cm!";
var reg=/\D/g;    //非查找数字
document.write(str.match(reg))    // T,h,e, ,h,e,i,g,h,t, ,o,f, ,t,h,e, ,b,o,x, ,i,s, ,c,m,!

//4 .  \b 	匹配单词边界     \B匹配非单词边界。
var str="box this box"; 
var reg=/\bbox/g;
document.write(str.match(reg))  //box box    第一个box是起点左边有个边界  第二box左边是空格

var str="box thisbox"; 
var reg=/\bbox/g;
document.write(str.match(reg))  //box  第一个box是起点左边有个边界  

//量词 主要是用于控制我们的字符出现的个数
//1 +号   n+   加号前面跟着一个任意的字符  匹配包含至少一个 n 的任何字符串。
var str="Hellooo World! Hello boox!"; 
var reg=/o+/g; // o  oo  ooo   ooooooooo
document.write(str.match(reg)); //至少一个o

//2 *号  n*   星号前面跟着一个任意的字符  匹配包含0个或多个的任何字符串。
var str="Hellooo World! Hello boox!"; 
var reg=/o*/g;  
document.write(str.match(reg)); //全部匹配出来了  当没有o的也匹配出来 只是为空  ,,,,ooo,,,o,,,,,,,,,,o,,,oo,,,  出现的是ooo 而不是o,o,o为什么会这样子？  正则的匹配有贪婪摸索他会尽量去匹配多的

//3 ?号  n?  问号前面跟着一个任意的字符  匹配包含0个或1个的任何字符串
var str="bx,box, boox or booox?";
var reg=/bo?x/g;
document.write(str.match(reg)); 

//4  n{X} 匹配包含X个的任何字符串 n{X,}  匹配包含X个以上的任何字符串 n{X,Y} 匹配包含大于X小于Y个以上的任何字符串
var str="bx,box,boox,booox or boooox?";
var reg=/bo{2}x/g;
document.write(str.match(reg));  //boox

var str="bx,box,boox,booox or boooox?";
var reg=/bo{2,}x/g;
document.write(str.match(reg));  //boox,booox,boooox


var str="bx,box,boox,booox or boooox?";
var reg=/bo{1,3}x/g;
document.write(str.match(reg));  //box,boox,booox

//5  ?=n 量词匹配任何其后紧接指定字符串 n 的字符串。
var str="Is this all there is";
var reg=/is(?= all)/g;
document.write(str.match(reg));  //is all   all前面的这个is

