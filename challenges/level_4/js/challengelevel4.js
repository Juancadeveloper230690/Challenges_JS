//botones
const bntA1 = document.getElementById("btnA1");
const bntB2 = document.getElementById("btnB2");
const bntC3 = document.getElementById("btnC3");
const bntD4 = document.getElementById("btnD4");
const bntE5 = document.getElementById("btnE5");
const bntF6 = document.getElementById("btnF6");
const bntG7 = document.getElementById("btnG7");
const bntH8 = document.getElementById("btnH8");
const bntI9 = document.getElementById("btnI9");
const bnt0J = document.getElementById("btnA1");

//letras y números html
let lettersHtml = document.getElementById("letters");
let numbersHtml = document.getElementById("numbers");
//Letras y números almacenados
let lettersGroup = "";
let numbersGroup = "";

//Funciones
function setA1() {
  if (lettersGroup === "") {
    lettersHtml.innerHTML = "A";
    lettersHtml = "A";
  }
}
function setB2() {
  if (lettersGroup === "A") {
    lettersHtml.innerHTML = "AB";
    lettersGroup = lettersGroup + "B";
  } else {
    alert("Letra equivocada");
  }
}
function setC3() {
  if (lettersGroup === "B") {
    lettersHtml.innerHTML = "ABC";
    lettersGroup = lettersGroup + "C";
  } else {
    alert("Letra equivocada");
  }
}
function setB2(params) {}
function setB2(params) {}
function setB2(params) {}
function setB2(params) {}
function setB2(params) {}
function setB2(params) {}
function setB2(params) {}
//eventos click
bntA1.onclick = function () {
    setA1
};
bntB2.onclick = function () {
    setB2
};
bntC3.onclick = function () {
    setC3
};
bntD4.onclick = function () {};
bntE5.onclick = function () {};
bntF6.onclick = function () {};
bntG7.onclick = function () {};
bntH8.onclick = function () {};
bntI9.onclick = function () {};
bnt0J.onclick = function () {};
