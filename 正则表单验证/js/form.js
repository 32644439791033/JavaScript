function check(){
	var username=document.myform.username.value;
	var reg=/^[a-zA-Z][0-9a-zA-Z_]{4,15}$/;
	if(reg.test(username)){
	}else{
	alert('用户名信息不正确!');
		return false;
	}
	var password=document.myform.password.value;
	var reg=/^[a-zA-Z0-9]{8,10}$/g;
	if(reg.test(password)){
	}else{
	alert('密码错误!');
		return false;
	}
	var passwords=document.myform.passwords.value;
	if(password==passwords){
	}else{
	alert('你输入的密码不一致!');
		return false;
	}
	var tel=document.myform.tel.value;
	var reg=/^(1[3456789][0-9][0-9]{8}|14[35][0-9]{8})$/g;
	if(reg.test(tel)){
	}else{
	alert('你输入的电话号码错误!');
		return false;
	}
	var email=document.myform.email.value;
	var reg=/[0-9a-zA-Z][\w-]*[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)*/g;
	if(reg.test(email)){
	}else{
	alert('你输入的email格式错误!');
		return false;
	}
	var birth=document.myform.birth.value;
	var reg=/^[12][80]\d{2}-(0[1-9]|[1][0-2])-(0[1-9]|[12][0-9]|3[0-1])$/;
	if(reg.test(birth)){
	}else{
	alert('你输入的年月日错误!');
		return false;
	}
	alert('你输入的是正确的!');
	return true;
}