// TODO: this file! :)
// const inputs and outputs
// initialize numberBank, odd and even numbers

// using let instead of const since the variable are being changed

let numberBank = [];
let oddNumbers = [];
let evenNumbers = [];

// updateDisplay function placed afterwards
function updateDisplay() {
  numberBankInput.innerHTML = numberBank
    .map((num) => `<li>${num}</li>`)
    .join("");

  oddNumbersInput.innerHTML = oddNumbers
    .map((num) => `<li>${num}</li>`)
    .join("");

  evenNumbersInput.innerHTML = evenNumbers
    .map((num) => `<li>${num}</li>`)
    .join("");
}

const numberInput = document.getElementById("numberInput");
const numberBankInput = document.getElementById("numberBankInput");
const oddNumbersInput = document.getElementById("oddNumbersInput");
const evenNumbersInput = document.getElementById("evenNumbersInput");

function addNumber(event) {
  // to keep the number from disappearing in the add number box:
  event.preventDefault();
  const number = parseInt(numberInput.value);
  // number bank will not be changed if the user enters a non-numeric value
  if (!isNaN(number)) {
    numberBank.push(number);
    console.log(numberBank);
  } else {
    alert("Please enter a number!");
  }
  numberInput.value = "";
  updateDisplay();
}

function sortOne() {
  if (numberBank.length === 0) return;
  const number = numberBank.shift();

  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }
  updateDisplay();
}

function sortAll() {
  while (numberBank.length > 0) {
    sortOne();
  }
  updateDisplay();
}

// event listeners to push user input
document.querySelector("form").addEventListener("submit", addNumber);
document.getElementById("sortOne").addEventListener("click", sortOne);
document.getElementById("sortAll").addEventListener("click", sortAll);
