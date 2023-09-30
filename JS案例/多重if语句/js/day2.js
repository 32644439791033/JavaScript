//if(条件表达式1){
//    执行语句1
//    
//}else if(条件表达式2){
//    执行语句2
//    
//}else if(条件表达式3){
//    执行语句3
//    
//}。。。。
//else{
//   执行语句N 
//}
var score = parseInt(prompt('请输入学生成绩')); //当我们的成绩大于90 弹出优秀 大于80 良好  70中等  60及格 不及格
if(score >= 90){
    alert('成绩优秀');
}else if(score>=80){
    alert('成绩良好');
}else if(score>=70){
    alert('成绩中等');
}else if(score>=60){
    alert('成绩及格');
}else{
    alert('不及格');
}









