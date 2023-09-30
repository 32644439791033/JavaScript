function getTime(type){
    var time = new Date(); 
    var h = time.getHours();
        h = h < 10 ? '0'+h : h   ;
    var m = time.getMinutes();
        m = m < 10 ? '0'+m : m   ;
    var s = time.getSeconds();
        s = s < 10 ? '0'+s : s   ;    //条件表单式 ？ 语句1 ： 语句2 ； 条件表单式成立执行语句1 否则执行语句2
    document.write(type+'<br>');
    var canshu = '这里setTimeout调用';
    setTimeout('getTime("'+canshu+'")',5000);//setTimeout 这个方法 2个参数 1个函数名() 第2 间隔时间  间隔多少毫秒执行函数  第一个参数实际上不是调用函数   字符串类型的参数 内容是 函数名(); 
    //'getTime('+canshu+')'     getTime("'+canshu+'") = getTime("这里setTimeout调用")
 
}
//document.write("'");  //我们如果需要打印单引号 则必须写在 双引号里面
//document.write('"');   //我们如果需要打印双引号 则必须写在 单引号里面
