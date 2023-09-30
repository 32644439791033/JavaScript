//数组排序 1翻转  reverse
arr =[];
arr[0] = 'China';
arr[1] = 'USA';
arr[2] = 'Russia';
arr.reverse();
document.write(arr);

//数组排序 2 冒泡排序  sort()

var arr = [13,4,27,7,1]; 
arr.sort(function(a,b){
    // return a-b;  //升序
    return b-a;  //降序
});
document.write(arr);

// 1 你能把这个方法写出来 包括完成的语法 方法名
// 2 你要知道这个方法有什么用？
// 3 你要了解方法的参数和返回值
// 4 你要能使用这个方法做出一个简单的案例

