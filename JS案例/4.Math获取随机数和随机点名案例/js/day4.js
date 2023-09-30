document.write(Math.random());//返回0-1之间浮点数  可以取0  但是不能取1 

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min; 
}

var num = getRandomArbitrary(1,2); // 1<num <2
document.write(num);
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
var num = getRandom(0,100);
document.write(num);
//随机点名  '
var arr = ['张三','李四','王五','刘柳','胡加'];
//怎么获取数组里面的元素  就是通过下标   下标从0开始  arr[0];
document.write(arr[getRandom(0,4)]);//数组有5个数组元素  下标是 0 - 4 
//抽取6位随机数字 100000 最小的6位数  最大的6位数 999999
document.write(getRandom(100000,999999));