var myPic = document.getElementById("pic");
// alert('This is working');
myPic.style.width = "500px";
myPic.style.marginLeft = "300px";
myPic.src = "desk.jpg";

var myP = document.getElementsByClassName("text");
myP[0].style.fontSize = "24px";
myP[0].style.color = "#0033cc";
// alert(myP[0].innerHTML);
myP[0].innerHTML += "Nunca habia sido tan facil encontrar trabajo.";


var myTitle = document.getElementsByTagName("h1")
myTitle[0].style.color = "#e600ac";

var myNum = 0;

function doIt() {
	myTitle[0].style.color = "teal";
	myPic.src = "filters.jpg";
	myP[0].innerHTML += " " + "[" + myNum + "]";
	myNum++;
}