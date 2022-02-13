function updateNumber(product, isIncreasing, price) {
  const inputNumber = document.getElementById(product + '-input');
  let inputValue = inputNumber.value;
  if (isIncreasing) {
    inputNumber.value = parseInt(inputValue) + 1;
  } else if (inputValue > 0) {
    inputNumber.value = parseInt(inputValue) - 1;
  }
  const productPrice = document.getElementById(product + '-price');
  productPrice.innerText = parseInt(inputNumber.value) * price;

  const subTotal = document.getElementById('sub-total');
  const tax = document.getElementById('tax-total');
  const grandTotal = document.getElementById('grand-total');
  subTotal.innerText = calculateTotal();
  tax.innerText = calculateTotal() / 5;
  grandTotal.innerText = parseFloat(subTotal.innerText) + parseFloat(tax.innerText);
}

function getInput(product) {
  const productInput = document.getElementById(product + '-input');
  const productValue = parseFloat(productInput.value);
  return productValue;
}

function calculateTotal() {

  let caseTotal = getInput('case') * 59;
  let phoneTotal = getInput('phone') * 1219;
  let total = caseTotal + phoneTotal;
  return total;
}

// Case Increament 
const casePlus = document.getElementById('case-plus');
casePlus.addEventListener('click', function () {
  updateNumber('case', true, 59)
})

// Case Decrement 
const caseMinus = document.getElementById('case-minus');
caseMinus.addEventListener('click', function () {
  updateNumber('case', false, 59)
})

// Phone Increament 
const phonePlus = document.getElementById('phone-plus');
phonePlus.addEventListener('click', function () {
  updateNumber('phone', true, 1219)
})

// Phone Decrement 
const phoneMinus = document.getElementById('phone-minus');
phoneMinus.addEventListener('click', function () {
  updateNumber('phone', false, 1219)
})