var str = 'hello world';  //字符串的 截取
substr(num1,[num2]) 如果指定了num1和num2 则 返回  从num1下标的位置开始截取的num2个值
document.write(str.substr(2,5));//llo w
document.write(str.substr(5));//
substring(start,end)// 从start位置开始截取到 end的这个位置  但是end是取不到
document.write(str.substring(2,8));//llo wo
slice(start,end)// 从start位置开始截取到 end的这个位置  但是end是取不到
document.write(str.slice(2,-2));//llo wor 当我们的end值为负数的时候 则end的位置字符串的末尾开始算  

























