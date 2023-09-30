//什么叫多维数组  1维数组：他的数组元素是数字 字符串 布尔型的一些值 arr=[1,'a',false]
//              2维数组：他的数组元素还是数组  arr = [[1,1],[2,2],[3,3]]
var citys = new Array();
citys[0] = ['长沙0','湘潭1','株洲2'];
citys[1] = ['武汉','天门','黄石'];
citys[2] = ['郑州','驻马店','信阳'];
//document.write(citys[0][1]);
for(var i in citys){
    
    document.write('数组citys的第'+(parseInt(i)+1)+'个元素的城市有：');
    
    for(var k in citys[i]){
        
        document.write(citys[i][k]+'&nbsp;&nbsp;')
    }
   
    document.write('<hr>');

}
