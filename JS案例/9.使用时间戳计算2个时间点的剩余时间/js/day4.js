//document.write(+new Date());//输出我们当前的时间戳 也就是这个时间离1970年1月1号 0点0分0秒 所经过的毫秒数
//document.write(+new Date('2020-02-29 17:30:00'));//获取我们指定时间的时间戳 这个值是固定的
//① 核心算法:输入的时间减去现在的时间就是剩余的时间,即倒计时,但是不能拿着时分秒相减,比如05分减去25分,结果会是负数的。
//②用时间戳来做。用户输入时间总的毫秒数减去现在时间的总的毫秒数,得到的就是剩余时间的毫秒数。
//③把剩余时间总的毫秒数转换为天、时、分、秒(时间戳转换为时分秒)
//
//转换公式如下:
//d = parseInt(总秒数/ 60/60/24) // 计算天数
//h = parseInt(总秒数/ 60/60 %24) //计算小时
//m= parseInt(总秒数/60 %60); // 计算分数
//s = parseInt(总秒数%60);//计算当前秒数
function countDown(time){
    var nowTime = +new Date()//获取了系统当前时间的时间戳
    var inputTime = +new Date(time);//获取用户输入的时间 的 时间戳
    var times = (inputTime - nowTime)/1000;  //获取到了 2个时间的 时间差 (单位 ： 由毫秒的变成了秒)
    var d = parseInt(times/60/60/24); // 计算天数
        d = d < 10 ? '0'+d : d ;
    var h = parseInt(times/60/60%24); //计算小时
        h = h < 10 ? '0'+h : h ;
    var m = parseInt(times/60%60); // 计算分数
        m = m < 10 ? '0'+m : m ;
    var s = parseInt(times%60);//计算当前秒数
        s = s < 10 ? '0'+s : s ;
    return '距离'+time+'还有：'+d+'天'+h+'小时'+m+'分钟'+s+'秒';
    
}
document.write(countDown('2020-05-01 8:00:00'));