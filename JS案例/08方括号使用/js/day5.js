//[]方括号  方括号用于查找某个范围内的字符：
//1.[abc] 查找方括号之间的任何一个字符
var str="abox bbox cbox abbox";
var reg=/[abc]box/g;// 方括号里面3个 abc     a可以abox  b也可以bbox   c不可以cbox
document.write(str.match(reg));   //abox bbox

//2.[^ab]查找任何不在方括号之间的字符    ^取反的意思  cdefghjklk@rkjwer;jij

var str="abox bbox cbox dbox hdhdhbox";  
var reg=/[^ab]box/; 
document.write(str.match(reg));  //cbox

//3.[0-9][a-z][A-Z][A-z]   一个范围 
var str="The height of the box is 100cm";
var reg=/[^0-9]/g; // [1,0,0]
//document.write(str.match(reg));  //1，0，0  match就把找到结果方到数组中去
var reg=/[a-z]/g; //arr= [h,e,h,e,i,g,h,t,o,f,t,h,e,b,o,x,i,s,c,m]
//document.write(str.match(reg));//h,e,h,e,i,g,h,t,o,f,t,h,e,b,o,x,i,s,c,m
var reg=/[^A-Z]/g; //arr= [T]
//document.write(str.match(reg));//T
var reg=/[A-z]/g;  //找所有的字母 包括大写和小写
document.write(str.match(reg));//T,h,e,h,e,i,g,h,t,o,f,t,h,e,b,o,x,i,s,c,m










//4个标准
// 1.能不能写出来这个方法  包括语法要正确  match(参数)参数就是个正则表达式
//3.  要弄清楚他们的参数和返回值   找到字符方到数组  讲获得数组返回   
//2 .   弄清楚这个方法用途
//4 . 写个案例