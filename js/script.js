// Find the buttons and the results box on the page by their ids
const calcButton = document.getElementById("calc-button");
const resetButton = document.getElementById("reset-button");
const resultsBox = document.getElementById("results");

// When Calculate is clicked, run the calculateTip function
calcButton.addEventListener("click", calculateTip);

// When Reset is clicked, run the resetCalculator function
resetButton.addEventListener("click", resetCalculator);

function calculateTip() {
  // Read what the user typed. Input values are text, so Number() turns them into numbers
  const bill = Number(document.getElementById("bill-amount").value);
  const tipPercent = Number(document.getElementById("tip-percent").value);
  const people = Number(document.getElementById("num-people").value);

  // Simple check: the bill and number of people must be above zero
  if (bill <= 0 || people <= 0) {
    resultsBox.textContent = "Please enter a bill amount and number of people.";
    return; // stop here so we don't do the math with bad numbers
  }

  // Do the math
  const tip = bill * (tipPercent / 100); // the tip in dollars
  const total = bill + tip;              // bill plus tip
  const each = total / people;           // what each person owes

  // Show three lines of results. toFixed(2) formats to 2 decimal places like 10.00
  // The \n characters become line breaks because the CSS uses white-space: pre-line
  resultsBox.textContent =
    "Tip: $" + tip.toFixed(2) + "\n" +
    "Total with tip: $" + total.toFixed(2) + "\n" +
    "Each person pays: $" + each.toFixed(2);
}

function resetCalculator() {
  // Clear each input by setting its value back to empty
  document.getElementById("bill-amount").value = "";
  document.getElementById("tip-percent").value = "";
  document.getElementById("num-people").value = "";

  // Clear the results box so old numbers disappear
  resultsBox.textContent = "";
}
