//switch(表达式){
//        
//    case 条件1 :语句1;
//    break;

//    case 条件2 :语句2; 
//    break;

//    case 条件3 :语句3; 
//    break;
//    case 条件4 :语句4; 
//    break;
//    case 条件5 :语句5; 
//    break;
//        。。。
//        default: 语句;               
//}
//大一上 计算机基础  html+css   java
//大一下 JavaScript 新媒体  bootstrap
//大二上 电商网站设计  淘宝运营  淘宝美工
//大二下 SEO  SEM  Jquery
var grade =parseInt(prompt('请输入编号'));
switch(grade){
    case 1 : alert('大一上的课程计算机基础  html+css   java');
    break;
    case 2 : alert('大一下的课程JavaScript 新媒体  bootstrap');
    break;
    case 3 : alert('大二上的课程电商网站设计  淘宝运营  淘宝美工');
    break;
    case 4 : alert('大二下的课程SEO  SEM  Jquery');
    break;  
    default:
        alert('您填写的编号错误');
       
}