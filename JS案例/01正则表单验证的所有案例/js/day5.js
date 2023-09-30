//什么是正则表单式  符合某种规则的表单式  说白了  就是一个规则  例如 我们的用户名必须是6位到12位的小写字母

//定义我们的正则表达式语法
//var reg = new RegExp(parttern,mod); //JS写法
//var reg = /parttern/mod; //perl写法  parttern描述了表单式的验证规则   mod就是我们的匹配模式（全局模式  区分大小写模式   多行匹配）
//再来学习一个字符串的方法 match
//match() 可以在字符里面查找指定的值，或者也可以找到一个或多个正则表达式的匹配 ，把结果方到数组中去
//var str = 'Hello world ! hello China! Hello Hunan';
////document.write(str.match('world'));
////var reg =/Hello/g;  //全局匹配  匹配全部的符号要求的字符
//var reg =/Hello/ig;  //i 不区分大小写匹配   2个模式可以混合使用的
//var re = str.match(reg);
//document.write(re);
//接下来我们来学习正则表达式里面的几个概念 转义字符  []方括号 元字符  RegExp的几个对象   支持正则表达式的字符串对象
//转义字符    就是把一个字符本身含义转换成其他含义    \n  换行   \t
//alert('a\\nb');

//[]方括号   用于查找某个范围内的字符：
//1 [abc]  查找方括号里面任意一个的字符
//var str = 'abox bbox cbox abbox';
//var reg = /[ab]box/g;
//document.write(str.match(reg));
////2 [^ab]  查找不在方括号里面任意一个的字符 
//var str = 'abox bbox cbox';
//var reg = /[^ab]box/g;  //^去反的意思
//document.write(str.match(reg));
//3.[a-z][A-Z][0-9][A-z]  一个范围
//var str = 'The height of the box is 100cm';
//var reg =/[0-9]/g;  匹配的是数字 1,0,0   3个数组元素  1，0，0
//var reg =/[a-z]/g; //h，e，h，e，i，g，，htoftheboxiscm  匹配小写字母
//var reg =/[A-Z]/g; //T  匹配大写字母
//var reg =/[A-z]/g; //T  匹配所有字母
//document.write(str.match(reg)); //
//元字符    是拥有特殊含义的字符

// .  匹配单个字符，除了换行和行结束符
//var str = "Th%t's h@t h\nt!";
//var reg = /ht/g;
//document.write(str.match(reg));

//  \w 查找我们的单词字符 （单词字符包含 :a-z  A-Z 0-9以及下划线_）
// \W 查找非单词字符  除了 a-z  A-Z 0-9以及下划线_ 以外
//var str = '$_The height of the box is 100cm';
//var reg =/\W/g;
//document.write(str.match(reg)); //

//  \d匹配数组    \D匹配非数字
//var str = 'The height of the box is 100cm';
//var reg =/\D/g;
//document.write(str.match(reg)); //

//  \b 匹配单词边界   \B匹配非单词边界
//var str = 'boxthisbox';
//var reg = /\bbox/g ;
//document.write(str.match(reg));
//
//var str = 'box thisbox';
//var reg = /\Bbox/g ;
//document.write(str.match(reg));
//量词 主要是用于控制字符出现的个数
//1 +   n+ 加号前面跟着一个任意字符  匹配包含至少一个n的任何字符串
//var str = 'helloooo  world!  hello boox';
//var reg = /o+/g; //至少1个o   o   oo  ooo  oooo  ooooooooo
//document.write(str.match(reg));

//*    n*  星号前面跟着一个任意字符  匹配包含0个或者多个的任何字符串
//
//var str = 'helloooo  world!  hello boox';
//var reg = /o*/g; // 都能匹配上 当没有o的也能匹配出来 只是为空
////,,,,oooo,,,,o,,,,,,,,,,,o,,,oo,,
////,,,,o,o,o,o  正则表单式有贪婪模式    他会尽量一次性去匹配更多的
//
//
//document.write(str.match(reg));

//?    n？  问号前面跟着一个任意字符  匹配包含0次或者1次的任何字符串
//var str = 'bx box  boox boox';
//var reg = /bo?x/g;  
//document.write(str.match(reg));

// n{x} 匹配包含x个的任意字符   n{2,}匹配2次以上  n{x,y}匹配x到y次以上
//var str = 'bx box  boox booox boooox booooox';
//var reg = /bo{0,3}x/g;  
//document.write(str.match(reg));

//？=n 量词匹配任何后面的指定的字符串n的字符串
//var str = 'Is this all there is ';
//var reg = /is(?= )/g;
//document.write(str.match(reg));
//
//之前我们学了 字符串的方法 match   在讲一个 replace（）
//var str = 'bx box  boox booox boooox booooox';
////var n = str.replace('o','a'); //用a 去替换 o
//var reg = /o/g;
//var n = str.replace(reg,'a'); //用a 去替换 o
//document.write(n);

//RegExp对象的方法
//test() 方法是用于检测一个字符串是否匹配摸个模式 。如果匹配返还true 不匹配返回 false
//正则表达式对象名.test(tring); 语法  
//var str = 'bx box  boox booox boooox booooox';
//var reg = /boxa/gi ;
//var re = reg.test(str);
//document.write(re);

function check(){
    var  username =  document.myform.username.value;
    var reg = /^[0-9a-zA-Z][\w-]*[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)*$/;  // 正则表达式
    if(reg.test(username)){
        document.write('您输入的是'+username+'<br>')
        document.write('您输入的正确!')
        return true;  
   
    }else{
        document.write('您输入的不符合规则!');
        return false;
    }
}
//只能输入数字 /[0-9]+/  或者 /\d+/  +前面的字符出现1次或者多次   1次是个位数0123456789   2次 2位数的数字  3次是 3位的数字   
// ^ 以什么开头  $以什么结束   /^[0-9]+$/

//腾讯QQ号   /^[1-9][0-9]{4,15}$/          （QQ号都是从4位的10000开始 到16位）  但是第一位不能为0    28849376

//检查是输入的是不是中文字符 [\u4e00-\u9fa5]   /[\u4e00-\u9fa5]+/
//验证中文的姓名 2-4中文字符的/^[\u4e00-\u9fa5]{2,4}$/
           
//年份   1900-2099年   /^([12][90][0-9]{2})$/
//月份   01-12   个位01-09  十位 10 11 12   0可以有可以没有  /^(0?[1-9]|1[0-2])$/
//日期   01 - 31  01- 09  1-9个位   10-19  20-29  30  31   /^(0?[1-9]|[12][0-9]|30|31)$/

//身份证  15位数字或者18位的数字  不是从0开始 第一个字符不是0的数字 [1-9][0-9]{14}15位的   [1-9][0-9]{17}  18位的数字身份证

//身份证  430304199912123651 或者 43030419991212365X 或者 43030419991212365x
//  4     30304        1999              12                   12                  365   1|X|x
// [1-9]\d{5}([12][90][0-9]{2})(0?[1-9]|1[0-2])(0?[1-9]|[12][0-9]|30|31)\d{3}[Xx\d]

//手机验证  181  7329661    /^(13[0-9]|14[57]|15[012356789]|17[07]|18[0-9])\d{8}$/
//

//验证我们的账号  （字母开头 5-16位  允许字母或者下划线）
// /^[a-zA-Z][a-zA-Z_]{4,15}$/
 
//密码（以字母开头 长度6-18个字符 只能包含数字 字母 下划线）
//  /^[a-zA-Z][a-zA-Z0-9_]{5,17}$/  /^[a-zA-Z]\w{5,17}$/

//强度密码（必须包含大小写字母和数字的组合不能使用特殊的符号长度在8-10位）
//is(?= ) 查找后面是空白is   (?=.*[A-Z])匹配大写字母 (?=.*[a-z])匹配小写字母 (?=.*\d)匹配数字

///^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,10}$/

//Email验证
//8849376@qq.com   justTest001@sina.com.cn  aaa-12aas-@163.com  just-Te_st001@sina.com.cn 
// 数字 字母 下划线 中划线               @   字母数字       .     字母         .字母
// [0-9a-zA-Z][\w-]*[0-9a-zA-Z]+      @  [0-9a-zA-Z]+  \.  [a-zA-Z]+   (\.[a-zA-Z])*
// /^[0-9a-zA-Z][\w-]*[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)*$/











