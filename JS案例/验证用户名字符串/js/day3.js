//利用字符串截取方法来验证用户名只含有数字 字母和下划线

function check(){
  var  username = document.myform.username.value;
//  var  username = 'Java11Scr_ipt$';
//  1.username.substr(0,1);  J  拿到了这个 j就对他进行判断  他是不是数字或者字母或者下划线  如果是  那就接着去第二个字符 a 在去判断  如果不是 则提示错误 就停止代码运行 
//   2.  username.substr(1,1)  a
//   3.  username.substr(2,1)   v
//   n.  username.substr(n-1,1) n是什么  n是字符串的长度
//    var ch这个变量 存放获取出来的单个字符
//    ch是不是去判断 他是 数字和字母或者是 下划线 如果是那么没问题不会报错  如果不是的则报错
//    if(ch>='0'&&ch<='9') 这个可以判断我们的字符串是数字
//    if(ch>='a' && ch<='z') 可以判断字符是小字母
//    if(ch>='A' && ch<='Z')可以判断字符是大写字母
//    if(ch =='_')
  var len = username.length;
    for(var i=0; i<len; i++){
      var ch = username.substr(i,1); //当i=0   0 1   J  当i=1  1 1  a 当i=13 $
        if(ch>='0'&&ch<='9' || ch>='a' && ch<='z' || ch>='A' && ch<='Z' ||ch =='_' ){
        }else{ 
            alert("出现非法字符");
            return false;
        }
    
    }

    
}



























