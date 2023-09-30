//name    sex   age  jiguan   skill
//var ldh = {
//    name:'刘德华',
//    sex:'男',
//    age:'56',
//    jiguan:'香港',
//    skill: function(){
//         document.write('他擅长唱歌和电影<br>');
//    }
//   
//}
//document.write(ldh.name+'&nbsp;&nbsp;'+ldh.sex+'&nbsp;&nbsp;'+ldh.age+'<br>');
//ldh.skill();
//构造函数  是一种特殊的函数 主要用于对象的初始化， 对象里面的成员赋初始值 
//利用构造函数来创建对象
//我们需要创建4大天王的对象  相同的属性 有 姓名  年龄  性别  方法：唱歌
//构造函数的语法
// function 构造函数名(){
//     this.属性 =值;
//     this.方法 = function(){}
// }
//new 构造函数名();
function Star(name,age,sex){
    this.name = name;
    this.age =age;
    this.sex =sex;
    this.skill =function(song){
       
        document.write('唱过的歌曲有'+song+'<br>');
    
    }

}
var ldh = new Star('刘德华',55,'男');   //我们创建一个对象  对象的名字是ldh
var zxy = new Star('张学友',58,'男');
    
document.write(ldh.name+'的年龄是'+ldh.age+'性别是'+ldh.sex+'<br>');
ldh.skill('冰雨，忘情水');

document.write(zxy.name+'的年龄是'+zxy.age+'性别是'+zxy.sex+'<br>');
zxy.skill('吻别,带你兜兜风');

//1. 构造函数的名字的首字母要大写
//2. 构造函数是不需要return 就可以返回结果
//3. 构造函数调用的时候  都使用new
//4. 我们只要new Star() 调用函数  他就会创建一个对象
//5. 我们的属性和方法前面都必须加上this

