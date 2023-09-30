//28849376@qq.com  //我现在要验证这个字符串里面是不是有@  如果有则输入的邮箱正确 否则就提示输入错误
//var email = '28849376@qq.com'; //
//var num = email.indexOf('@'); //在我们的 28849376@qq.com 这个字符串里查找 @  如果找到了就返回这个@所在的位置 8   如果没有找到 就 返回 -1
//alert(num);
//我们要求对用户输入的信息进行判断  username  用户名的长度必须大于3个字符
//输入的密码 password 的长度必须大于等于6个字符
//输入邮箱地址  email   我们就判断输入的信息里面是否有@
function check(){
   var username = document.myform.username.value ;
    if(username.length<3){  
        alert('您输入的用户名的长度必须大于3个字符');
        return false;
    }
    var password = document.myform.password.value;
    if(password.length<6){
        alert('您输入的密码的长度必须大于6个字符');
        return false;
    }
    var email = document.myform.email.value;
    if (email.indexOf('@') == -1){
        alert('你输入的email格式不正确!');
        return false;
    }
    
    alert('您输入的信息都是正确的');
}




















