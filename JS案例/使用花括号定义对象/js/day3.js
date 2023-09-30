var obj = {
    name:'张三疯',
    age:120,
    sayHi:function(say){
        
      return say;
 
    }   
}
alert(obj.age);  //对象名.属性名   .我可以理解为 的
alert(obj['name']);  //对象名['属性名']
var re = obj.sayHi('hello world');
alert(re);



