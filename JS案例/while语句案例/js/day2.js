//while(条件表达式){
//    循环体
//}
//var i=1;
//while(i<=10){
//    document.write(i+'<br>');
//    i++;   
//} 


//弹出一个提示框  你喜欢我吗？   如果输入喜欢   提示结束   否则一直询问
var message = prompt('你喜欢我吗');
while(message != '喜欢'){
 message =  prompt('你喜欢我吗'); 
}
 alert('我也喜欢你');