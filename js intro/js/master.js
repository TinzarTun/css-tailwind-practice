var obj = document.getElementById("para");

function bgBlue() {
  obj.style.backgroundColor = "blue";
}

function bgRed() {
  obj.style.backgroundColor = "red";
}

function textWhite() {
  obj.style.color = "white";
}

function textBlack() {
  obj.style.color = "black";
}

function smallText() {
  obj.style.fontSize = "12px";
}

function largeText() {
  obj.style.fontSize = "20px";
}

function fontBold() {
  obj.style.fontWeight = "bold";
}

function fontNormal() {
  obj.style.fontWeight = "normal";
}

function textColor() {
  var colorText = prompt("Dynamic Text Color");
  obj.style.color = colorText;
}
