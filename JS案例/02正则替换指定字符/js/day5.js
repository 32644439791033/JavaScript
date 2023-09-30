//暴力文字  或者 骂人的语句  xxx  我们需要对用户输入的信息进行过滤 过滤掉之前的一些不和谐的文字
function replace(){
    var str = document.myform.userInput.value;
    var reg = /淘宝|天猫|京东/g ;
    var re = str.replace(reg,'XX');  //在str（用户输入的信息）中找查 京东 或者 天猫 或者 淘宝  找到之后呢 用xx吧淘宝替换掉    替换之后的之后的字符串 赋值到  re里面去
    document.myform.userReplace.value = re;
 
}












