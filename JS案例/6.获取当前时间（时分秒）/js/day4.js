var date = new Date();//先创建一个日期对象 对象名是date
////document.write(date.getHours()); //获取小时15
////document.write(date.getMinutes()); //获取分钟  59
//document.write(date.getSeconds());  //获取秒

//要求我们封装一个函数来返回时分秒  格式 08:18:08      条件表达式 ? 语句1 : 语句2


function getTime(){
    var time = new Date(); //创建一个了 时间对象   系统的当前
    var h = time.getHours(); //获取到了小时  16
     if(m <10 ){ m = '0' + m;}
      h = h < 10 ? '0'+h : h   ;
    var m = time.getMinutes(); //获取到了分钟  19
       if(m <10 ){ m = '0' + m;}
      m = m < 10 ? '0'+m : m   ;
    var s = time.getSeconds(); //秒钟
     if(s <10 ){ s = '0' + s;}
    
    
    //判断条件 ？ 语句1  ： 语句2 
    // s = s<10 ? '0'+s : s;
     
    // s =  s<10 ? '0'+s : s;
    
     //if(s<10){ s = '0' + s;}
      //s = s < 10 ? '0'+s : s   ;    //条件表单式 ？ 语句1 ： 语句2 ； 条件表单式成立执行语句1 否则执行语句2
    return h+':'+m+':'+s;    //08:18:08
}
var nowTime = getTime();
document.write('现在是：'+nowTime);