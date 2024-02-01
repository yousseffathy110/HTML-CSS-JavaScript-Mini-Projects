// @ts-nocheck
const calctext = document.getElementById("calctext");
const calcresult = document.getElementById("calcresult");

function display(input) {
  calctext.value += input;
}

function clearDisplay() {
  calctext.value = "";
  calcresult.innerHTML = "";
}

function Calculate() {
  try {
    calcresult.innerHTML = eval(calctext.value);
  } catch (error) {
    calctext.value = "Unvalid operation";
  }
}
function reset() {
  calctext.value = calctext.value.slice(0, -1);
}
