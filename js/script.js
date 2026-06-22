// Find the button on the page by its id
const calcButton = document.getElementById("calc-btn");

// Find the box where we will show the results
const resultsBox = document.getElementById("results");

// When the button is clicked, run the calculateTip function
calcButton.addEventListener("click", calculateTip);

function calculateTip() {
  // Read what the user typed in each input.
  // Input values are always text, so Number() turns them into numbers.
  const bill = Number(document.getElementById("bill").value);
  const tipPercent = Number(document.getElementById("tip").value);
  const people = Number(document.getElementById("people").value);

  // Simple check: if the numbers don't make sense, show a message and stop.
  if (bill <= 0 || people <= 0) {
    resultsBox.textContent = "Please enter a bill amount and number of people.";
    return;
  }

  // Do the math.
  const tipAmount = bill * (tipPercent / 100); // tip in dollars
  const total = bill + tipAmount;              // bill plus tip
  const perPerson = total / people;            // each person's share

  // Build the result text. toFixed(2) rounds to 2 decimal places (cents).
  resultsBox.innerHTML =
    "Tip: $" + tipAmount.toFixed(2) + "<br>" +
    "Total with tip: $" + total.toFixed(2) + "<br>" +
    "Each person pays: $" + perPerson.toFixed(2);
}
