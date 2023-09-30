function check(){
   var username = document.myform.username.value ;
    if(username.length<3){
        alert('您输入的用户名格式不正确');
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