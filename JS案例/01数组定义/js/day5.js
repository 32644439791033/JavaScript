var arr = new Array(); //没有数组元素
//document.write(arr);
var arr1 =new Array(3); //定义了1一个含有三个元素的数组 只是数组元素是空白
//document.write(arr1.length);  //arr[1,2,3]
var arr2 = new Array(1,'hello', true);// 在数组中不需要知道 数组元素的数据类型 任何数据类型都可以 混合使用也可以

var arr3 = [2,31, 'world',false];
           
//利用下标访问数组元素     arr3[3]
document.write(arr3);  //
arr[0] = 'China';
arr[1] = 'USA';
arr[2] = 'Russia';
//
document.write(arr);