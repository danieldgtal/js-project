// Listen for submit
// document
//   .getElementById("loan-form")
//   .addEventListener("submit", calculateResults);

//delay calculate Results function so to run loading gif
document.getElementById("loan-form").addEventListener("submit", function (e) {
  // Hide results
  document.getElementById("results").style.display = "none";
  // Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2500);

  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  console.log("Calculating...");
  // UI Vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    // show results
    document.getElementById("results").style.display = "block";
    //   hide loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");

    document.getElementById("loading").style.display = "none";
  }
}

function showError(error) {
  // show results
  document.getElementById("results").style.display = "block";
  //   hide loader
  document.getElementById("loading").style.display = "none";

  // Create a div
  const errorDiv = document.createElement("div");
  // Create a button
  const errorButton = document.createElement("button");
  errorButton.setAttribute("type", "button");
  errorButton.setAttribute("data-dismiss", "alert");
  errorButton.setAttribute("aria-label", "close");
  errorButton.className = "close";
  errorButton.innerHTML = "<span aria-hidden='true'>&times;</span>";

  // Create a span
  const span = document.createElement("span");
  span.setAttribute("aria-hidden", "true");
  span.textContent = "&times;";

  // Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // add class
  errorDiv.className = "alert alert-danger alert-dismissible fade show";
  errorDiv.setAttribute("role", "alert");

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  errorDiv.appendChild(errorButton);
  console.log(errorDiv);

  // insert error above heading
  card.insertBefore(errorDiv, heading);
  console.log(errorDiv);
  // clear error after 3seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  document.querySelector(".alert").remove();
}
