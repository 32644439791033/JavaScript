//join 他是将我们数组中的数组元素转换成字符串 我们可以指定一个分隔符

arr =[];
arr[0] = 'China';
arr[1] = 'USA';
arr[2] = 'Russia';
//document.write(arr);
//document.write(typeof(arr));

document.write(arr.join('*'));  //China*USA*Russia   字符串类型的
var re =arr.join('-');
document.write(typeof(re));

//split他可以把我们的字符串转换成 数组 （字符串里面的分隔符也可以指定）
var str = 'China USA Russia'; //分隔符是空格
var arr = str.split(' ');//使用了空格做分隔符
//document.write(arr);
document.write(Array.isArray(arr)); //Array.isArray(数组名) 对数组进行判断是否 是数组 是的话返回true  否则 false
//push 数组的末尾添加1个或多个数组元素    并返回 新的数组长度
arr =[];
arr[0] = 'China';
arr[1] = 'USA';
arr[2] = 'Russia';
arr[3] = 'England';
arr[4] = 'Japan';
var re = arr.push('England','Japan');
//document.write(arr);
document.write(re);
 //pop 删除数组中的最后一个数组元素 返回 删除的这个元素
arr =[];
arr[0] = 'China';
arr[1] = 'USA';
arr[2] = 'Russia';
var re = arr.pop();
//document.write(re);
document.write(arr);
