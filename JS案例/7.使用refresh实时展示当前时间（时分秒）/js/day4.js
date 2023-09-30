var date = new Date();
document.write(date.getHours()); //获取小时13
document.write(date.getMinutes()); //获取分钟  8
document.write(date.getSeconds());  //获取秒
//要求我们封装一个函数来返回时分秒  格式 08:08:08
function getTime(){
    var time = new Date(); 
    var h = time.getHours();
        h = h < 10 ? '0'+h : h   ;
    var m = time.getMinutes();
        m = m < 10 ? '0'+m : m   ;
    var s = time.getSeconds();
        s = s < 10 ? '0'+s : s   ;    //条件表单式 ？ 语句1 ： 语句2 ； 条件表单式成立执行语句1 否则执行语句2
    return h+':'+m+':'+s;  
}
var nowTime = getTime();
document.write('现在是：'+nowTime);