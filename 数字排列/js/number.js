var arr=new Array();
var num;
var arr1=new Array();
for(i=0;i<10;i++){
num=parseInt(prompt("请输入第"+(i+1)+"个数字"));
arr[i]=num
if(num){
 }else{
 	alert("你输入的不是数字请重新输入")
 }
}
for(n=0;n<10;n++){
arr1=bubbleSort(arr)
document.write('第'+(n+1)+'个数是'+arr[n]+'<br>');
}
function bubbleSort(arr1){
var h, s;
for (h = arr1.length - 1; h >= 0; h--){
for (s = 0; s <= h; s++){
if (arr1[s+1] < arr1[s]){
var temp = arr1[s];
arr1[s] = arr1[s+1];
arr1[s+1] = temp;
}
}
}
return arr1;
}