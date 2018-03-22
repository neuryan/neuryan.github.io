var myImage = document.querySelector('img');

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/winter1.png') {
		myImage.setAttribute('src', 'images/spring1.png');
	} else {
		myImage.setAttribute('src', 'images/winter1.png');
	}
}
