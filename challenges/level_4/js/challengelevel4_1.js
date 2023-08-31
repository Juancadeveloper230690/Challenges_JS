const btnChallengeOne = document.getElementById("btnchallenge1");
const btnChallengeTwo = document.getElementById("btnchallenge2");
const btnChallengeThree = document.getElementById("btnchallenge3");
const btnChallengeFour = document.getElementById("btnchallenge4");
const btnChallengeFive = document.getElementById("btnchallenge5");
const btnChallengeSix = document.getElementById("btnchallenge6");
const btnChallengeSeven = document.getElementById("btnchallenge7");
const btnChallengeEight = document.getElementById("btnchallenge8");

//Challenge1
function challengeOne() {
  const fruits = ["Manzana", "Banana", "Cereza", "Dátil"];
  console.log(fruits);
}

//Challenge2
function challengeTwo() {
  const fruits = ["Manzana", "Banana", "Cereza", "Dátil"];
  fruits.forEach((e) => {
    console.log(e);
  });
}

//Challenge3
function challengeThree() {
  // Pedimos el numero de operation entre 1 y 4  y lo convertimos a entero
  let operation = parseInt(
    prompt(
      "OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
    )
  );
  // Validamos que la operación no sea errada o mayor 4 o menor que 1
  // isNan() nos permite validar el el valor de la variable es un NaN osea que no ingresaron numeros
  while (isNaN(operation) || operation > 4 || operation < 1) {
    alert("Opcion invalida, favor ingresar entre 1 y 4, y que sean números");
    operation = parseInt(
      prompt(
        "OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
      )
    );
  }
  //if (isNaN(operation) || operation > 4 || operation < 1) {
  //return alert("Opcion invalida, favor ingresar entre 1 y 4"); // return nos devuelve el alert y no permite seguir ejecutando el código
  //}
  // Pedimos los numeros
  const num1 = parseFloat(prompt("Ingrese numero 1"));
  const num2 = parseFloat(prompt("Ingrese numero 2"));
  let result = 0;

  // Validamos que los numeros no sean errados
  if (isNaN(num1) || isNaN(num2)) {
    return alert("Favor ingresar solo numeros");
  }
  // Si todo lo anterior esta OK, hacemos las operationes matematicas
  switch (operation) {
    case 1:
      result = num1 + num2;
      alert("El resultado de la suma es: " + result);
      break;
    case 2:
      result = num1 - num2;
      alert(result);
      break;
    case 3:
      result = num1 * num2;
      alert("El resultado de la multiplicación es: " + result);
      break;
    case 4:
      if (num2 === 0) {
        alert("No es posible dividir por cero");
      } else {
        result = num1 / num2;
        alert("El resultado de la división es: " + result);
      }
      break;
  }
}

//Challenge4
function challengeFour() {
  const numbers = [45, 23, 67, 89, 12, 56];
  let bigNumber = 0;
  let foundIt = false;
  for (let i = 0; i <= numbers.length; i++) {
    bigNumber = numbers[i];
    if (bigNumber === 89) {
      foundIt = "true";
      return console.log(" Para este array, el número mayor es el 89");
    }
  }
}

//Challenge5
function challengeFive() {
  const numbersFive = [2, 4, 6, 8, 10];
  let plusNumbers = 0;
  numbersFive.forEach((e) => {
    console.log((plusNumbers += e));
  });
}

//Challenge6
function challengeSix() {
  const numbersSix = [3, 7, 2, 8];
  numbersSix.forEach((e) => {
    console.log(e * 2);
  });
}

//Challenge7
function challengeSeven() {
  const numbersSeven = [1, 4, 7, 3, 10, 12];
  let plusNumbers = 0;
  numbersSeven.forEach((e) => {
    if (e % 2 === 0) {
      console.log((plusNumbers += e));
    }
  });
}

//Challenge8--- no funciona correctamente
function challengeEight() {
const numbersEigth = [30, 45, 60, 72, 48, 10];
let i = 0;
let bigNumberEight = 0;
let foundItEight = false;
 while (i < numbersEigth.length) {
  bigNumberEight = numbersEigth[i];
  if (bigNumberEight > 50) {
    foundItEight = "true";
    alert(bigNumberEight);
  }
 }

}

btnChallengeOne.onclick = function () {
  challengeOne();
};

btnChallengeTwo.onclick = function () {
  challengeTwo();
};

btnChallengeThree.onclick = function () {
  challengeThree();
};

btnChallengeFour.onclick = function () {
  challengeFour();
};

btnChallengeFive.onclick = function () {
  challengeFive();
};

btnChallengeSix.onclick = function () {
  challengeSix();
};

btnChallengeSeven.onclick = function () {
  challengeSeven();
};

btnChallengeEight.onclick = function () {
  challengeEight();
};
