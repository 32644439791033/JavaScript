//在浏览器上面弹出一个输入框  提示语是 请输入圆的半径  求这个圆的面积
// s = 3.14 *r *r  math对象里有一个属性就是我们圆周率的值  PI
// Math.PI就是我们的圆周率 π
var r = parseFloat(prompt('请输入圆的半径'));
var s = Math.PI * r * r;
document.write('圆周率是'+Math.PI+'<br>');
document.write('圆面积是'+s+'<br>');
