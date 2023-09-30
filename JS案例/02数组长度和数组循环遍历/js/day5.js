var arr = new Array(); 
arr[0] = 'China';
arr[1] = 'USA';
arr[2] = 'Russia';
document.write(arr.length); //length属性可以获取数组的长度
 //java里面使用for
for(var i=0 ; i< arr.length ; i++){   //利用数组下标进行循环
    document.write('数组的第'+(i+1)+'元素是'+arr[i]+'<br>');
}
//for-in循环
for(var k in arr){  //变量k 如果不赋值 他的类型就是 string
      document.write('数组的第'+(parseInt(k)+1)+'元素是'+arr[k]+'<br>');
}
