//Date() 日期对象是一个构造函数  必须要使用new
//var arr = new Array(); //创建了一个数组
//var obj = new Object();//创建了一个对象

//var date = new Date();//创建了一个时间对象
//document.write(date);  //没有参数的话 能获取到 当前系统的时间

//参数常用写法   数字型 2020,2,28    或者是字符串型 '2020-02-28 11:30:30'
//var date = new Date(); // 返回是3月  不是2月
//document.write(date);
//
//我们写一个 2020年3月5号  星期四

//var date = new Date();  //对象名.方法名()
//document.write(date.getFullYear());//返回当前日期的 年份   2020  没有参数的
//document.write(date.getMonth()+1);//返回当前日期的月份减1    记得+1 
//document.write(date.getDate());//返回当前日期几号    5
//document.write(date.getDay());//返回当前日期星期几 当星期1到星期6 都是返回1-6  但是星期天的话 返回是 0
//我们写一个 2020年2月28号  星期五
var date = new Date();
var year = date.getFullYear();// 2020
var month = date.getMonth()+1;//3
var dates = date.getDate(); //5
var week = date.getDay();//0-6  week为0 就显示星期天  为1的时候显示一  if ifelse else 多重if语句 或者 switch  为方便我们这里用数组  利用数组下标来进行匹配
var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
//////////arr[0]  下标为0显示星期日   下标为1显示星期一   下标为6显示星期6
//////////arr[week] 就能灵活根据今天是星期几  来显示出对应的数组里的数组元素
document.write('今天是'+year+'年'+month+'月'+dates+'日'+arr[week]);






