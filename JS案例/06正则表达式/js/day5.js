//什么是正则表达式呢   符合某种规则的表单式  说白了  就是一个规则  例如 我们的用户名 必须是6位到12的数字字母组成
function check(){
  username =    document.myform.username.value;
// if(username.length <5 ||username.length>12){
//     
//     alert('您输入的用户名格式不正确');
// }
//    for(var i=0 ; i<username.length; i++ ){
//        var ch = username.substr(i,1);
//        if(ch>'0' && ch<'9' || ch>'a' && ch<'z'|| ch>'A' && ch<'Z'){
//             continue;
//        }else{
//            alert('您输入的用户名格式不正确');
//            return false;
//        }
//    }
//      alert('输入正确');
//        return true;
    
   var reg = /^[a-zA-Z0-9]{6,12}$/;    正则表达式 perl
    
    if(reg.test(username)){
		alert('输入正确');
        return true;
        
    }else{
        
     alert('您输入的用户名格式不正确'); 
        return false;
    }
    
}
//定义正则表达式的语法
var patt=new RegExp(pattern,mod);  //js方式
var patt=/pattern/mod;   //perl方式
//pattern（ 正则表达式的规则） 描述了表达式的模式  操作的规则
//mod(修饰符模式) 用于指定全局匹配、区分大小写的匹配和多行匹配

//我们先来学习一个字符串的方法 match
//match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。把结果存放到数组里面去

var str="Hello World! hello China Hello Hello";
document.write(str.match("world") + "<br />")

var reg = /world/;
document.write(str.match(reg) + "<br />")

var reg = /WoRld/i; //不区分大小写
document.write(str.match(reg) + "<br />")

var reg = /Hello/gi; //全局匹配 查找出所有的
document.write(str.match(reg) + "<br />")

//接着我们要学习 正则里面的 几个概念 转义字符 []方括号  元字符  量词  RegExp对象方法   支持正则表达式的 String 对象的方法
