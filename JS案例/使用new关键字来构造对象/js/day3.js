//奔驰600   颜色黑色     pailiang 是 2.0
var car = new Object();//使用new关键字来构造了一个对象
car.name = '奔驰600';
car.color ='黑色';
car.pailiang = 2.5;
car.run = function(){
     alert ('汽车的最高时速是250公里'); 
}

//function canRun(){
//    alert ('汽车的最高时速是250公里');
//}
// car.run = canRun;
document.write('这是一辆'+car.name+',颜色是'+car.color+'排量是'+car['pailiang']);
car.run();
