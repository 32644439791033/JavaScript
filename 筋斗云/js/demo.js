window.onload = function () {
	var cloud = document.querySelector('.cloud')
	var c_nav = document.querySelector('.c_nav')
	var lis = document.querySelectorAll('.c_nav li')
	var current = 0
	for (var i = 0; i < lis.length; i++) {
		lis[i].onmouseover = function () {
			animate(cloud, this.offsetLeft)
		}
		lis[i].onmouseout = function () {
			animate(cloud, current)
		}
		lis[i].onclick = function () {
			current = this.offsetLeft
		}
	}
}