// Get UI Var
const baseCurrency = document.querySelector("#baseCurrency"),
  quoteCurrency = document.querySelector("#quoteCurrency"),
  calculateButton = document.getElementById("submit"),
  inputValue = document.getElementById("inputValue"),
  result = document.getElementById("result"),
  reset = document.getElementById("reset");

//   Listen for input
reset.addEventListener("mousedown", resetButton);
calculateButton.addEventListener("click", currencyConverter);

function currencyConverter(e) {
  // get result output Ui
  resultOutput = document.querySelector("#result");
  // validate input
  inputCheck();
  //
  e.preventDefault();
}

// currency pair function
function currencyPair() {
  dollarNaira();
  euroNaira();
  poundsNaira();
  cadsNaira();
  duroDollar();
  dollarPound();
  dollarCad();
  euroPound();
  euroCad();
  cadPound();
}

// input check function
function inputCheck() {
  // get element
  calculatorBody = document.querySelector(".calculator-body");
  heading = document.querySelector("#heading");

  // Validate input
  if (
    baseCurrency.value === "none" ||
    quoteCurrency.value === "none" ||
    baseCurrency.value === quoteCurrency.value
  ) {
    //   create error tag
    const divElement = document.createElement("div");
    const buttonTag = document.createElement("button");

    //   class for created elements
    buttonTag.className = "close";
    divElement.className = "alert alert-danger alert-dismissible fade show";

    //   attribute for created elements
    buttonTag.setAttribute("type", "button");
    buttonTag.setAttribute("data-dismiss", "alert");
    buttonTag.setAttribute("aria-label", "close");
    divElement.setAttribute("role", "alert");
    divElement.textContent = "please choose a valid currency pair";

    //   add innerHtml to buttonTag
    buttonTag.innerHTML = "<span aria-hidden='true'>&times;</span>";
    // append button tag to divElement
    divElement.appendChild(buttonTag);
    //   insert created element into the DOM
    calculatorBody.insertBefore(divElement, heading);
  } else {
    // currency pairs function
    currencyPair();
  }
  setTimeout(clearError, 3000);
}
// clear error
function clearError() {
  document.querySelector(".alert").remove();
}
// reset button function
function resetButton(e) {
  if (e.target.id === "reset") {
    window.location.reload();
  }
  e.preventDefault();
}

// usd|ngn function
function dollarNaira() {
  let rate;
  // checks ngn as base and usd as quote
  if ((baseCurrency.value === "ngn") & (quoteCurrency.value === "usd")) {
    rate = 0.0026;
    resultOutput.value = rate * inputValue.value;
  }
  if ((baseCurrency.value === "usd") & (quoteCurrency.value === "ngn")) {
    rate = 384.61;
    resultOutput.value = rate * inputValue.value;
  }
}

// ngn|eur function
function euroNaira() {
  let rate;
  // checks ngn as base and usd as quote
  if ((baseCurrency.value === "ngn") & (quoteCurrency.value === "eur")) {
    rate = 0.0021;
    resultOutput.value = rate * inputValue.value;
  }
  if ((baseCurrency.value === "eur") & (quoteCurrency.value === "ngn")) {
    rate = 471.19;
    resultOutput.value = rate * inputValue.value;
  }
}
// ngn|gbp function
function poundsNaira() {
  let rate;
  // checks ngn as base and usd as quote
  if ((baseCurrency.value === "ngn") & (quoteCurrency.value === "gbp")) {
    rate = 0.002;
    resultOutput.value = rate * inputValue.value;
  }
  if ((baseCurrency.value === "gbp") & (quoteCurrency.value === "ngn")) {
    rate = 500;
    resultOutput.value = rate * inputValue.value;
  }
}

// ngn|cad function
function cadsNaira() {
  let rate;
  // checks ngn as base and usd as quote
  if ((baseCurrency.value === "ngn") & (quoteCurrency.value === "cad")) {
    rate = 0.0034;
    resultOutput.value = rate * inputValue.value;
  }
  if ((baseCurrency.value === "cad") & (quoteCurrency.value === "ngn")) {
    rate = 294.11;
    resultOutput.value = rate * inputValue.value;
  }
}

// usd|eur function
function duroDollar() {
  let rate;
  // checks ngn as base and usd as quote
  if ((baseCurrency.value === "usd") & (quoteCurrency.value === "eur")) {
    rate = 0.82;
    resultOutput.value = rate * inputValue.value;
  }
  if ((baseCurrency.value === "eur") & (quoteCurrency.value === "usd")) {
    rate = 1.25;
    resultOutput.value = rate * inputValue.value;
  }
}

// usd|gbp function
function dollarPound() {
  let rate;
  // checks ngn as base and usd as quote
  if ((baseCurrency.value === "usd") & (quoteCurrency.value === "gbp")) {
    rate = 0.74;
    resultOutput.value = rate * inputValue.value;
  }
  if ((baseCurrency.value === "gbp") & (quoteCurrency.value === "usd")) {
    rate = 1.35;
    resultOutput.value = rate * inputValue.value;
  }
}

// usd|cad function
function dollarCad() {
  let rate;
  // checks ngn as base and usd as quote
  if ((baseCurrency.value === "usd") & (quoteCurrency.value === "cad")) {
    rate = 1.29;
    resultOutput.value = rate * inputValue.value;
  }
  if ((baseCurrency.value === "cad") & (quoteCurrency.value === "usd")) {
    rate = 0.77;
    resultOutput.value = rate * inputValue.value;
  }
}

// eur|gbp function
function euroPound() {
  let rate;
  // checks ngn as base and usd as quote
  if ((baseCurrency.value === "eur") & (quoteCurrency.value === "gbp")) {
    rate = 0.91;
    resultOutput.value = rate * inputValue.value;
  }
  if ((baseCurrency.value === "cad") & (quoteCurrency.value === "usd")) {
    rate = 1.06;
    resultOutput.value = rate * inputValue.value;
  }
}

// eur|cad function
function euroCad() {
  let rate;
  // checks ngn as base and usd as quote
  if ((baseCurrency.value === "eur") & (quoteCurrency.value === "cad")) {
    rate = 1.57;
    resultOutput.value = rate * inputValue.value;
  }
  if ((baseCurrency.value === "cad") & (quoteCurrency.value === "eur")) {
    rate = 0.63;
    resultOutput.value = rate * inputValue.value;
  }
}

// gbp|cad function
function cadPound() {
  let rate;
  // checks ngn as base and usd as quote
  if ((baseCurrency.value === "gbp") & (quoteCurrency.value === "cad")) {
    rate = 1.73;
    resultOutput.value = rate * inputValue.value;
  }
  if ((baseCurrency.value === "cad") & (quoteCurrency.value === "gbp")) {
    rate = 0.57;
    resultOutput.value = rate * inputValue.value;
  }
}
