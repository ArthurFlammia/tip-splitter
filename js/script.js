// ===== STATE =====
// This array is the "memory" of the tool. Every saved split gets pushed in here.
// More than one part of the page reads from it: the history list and the session
// summary are both built from this same array.
let history = [];

// A counter so each saved split has a unique id. We use it to find and remove
// the right entry when the user deletes one.
let nextId = 1;

// ===== FIND ELEMENTS ON THE PAGE =====
const calcButton = document.getElementById("calc-button");
const resetButton = document.getElementById("reset-button");
const clearHistoryButton = document.getElementById("clear-history-button");
const resultsBox = document.getElementById("results");
const historyList = document.getElementById("history-list");
const summaryBox = document.getElementById("summary");

// ===== EVENT LISTENERS (the user interactions) =====
// 1. Click "Calculate" to work out a split and save it to history
calcButton.addEventListener("click", calculateTip);

// 2. Click "Reset" to clear the input boxes and the current result
resetButton.addEventListener("click", resetCalculator);

// 3. Click "Clear history" to empty the saved list and start the session over
clearHistoryButton.addEventListener("click", clearHistory);

// ===== CALCULATE ONE SPLIT AND SAVE IT =====
function calculateTip() {
  // Read what the user typed. Input values are text, so Number() turns them into numbers.
  const bill = Number(document.getElementById("bill-amount").value);
  const tipPercent = Number(document.getElementById("tip-percent").value);
  const people = Number(document.getElementById("num-people").value);

  // Simple check: the bill and number of people must be above zero.
  if (bill <= 0 || people <= 0) {
    resultsBox.textContent = "Please enter a bill amount and number of people.";
    return; // stop here so we don't do the math with bad numbers
  }

  // Do the math.
  const tip = bill * (tipPercent / 100); // the tip in dollars
  const total = bill + tip;              // bill plus tip
  const each = total / people;           // what each person owes

  // Show the result for this split right away.
  resultsBox.textContent =
    "Tip: $" + tip.toFixed(2) + "\n" +
    "Total with tip: $" + total.toFixed(2) + "\n" +
    "Each person pays: $" + each.toFixed(2);

  // ===== SAVE INTO STATE =====
  // Build an object describing this split and add it to the history array.
  // This is the step that makes the tool "remember" instead of forgetting
  // every result the moment the next click happens.
  history.push({
    id: nextId,
    bill: bill,
    people: people,
    total: total,
    each: each,
  });
  nextId = nextId + 1;

  // Redraw the parts of the page that depend on the history array.
  renderHistory();
  renderSummary();
}

// ===== DRAW THE HISTORY LIST =====
// Rebuilds the list from scratch every time so it always matches the array.
function renderHistory() {
  historyList.innerHTML = ""; // clear the old list first

  // If there's nothing saved yet, show a friendly empty message.
  if (history.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = "No splits saved yet.";
    historyList.appendChild(empty);
    return;
  }

  // Make one list row for each saved split.
  for (let i = 0; i < history.length; i++) {
    const entry = history[i];

    const li = document.createElement("li");

    // The text describing this split.
    const label = document.createElement("span");
    label.textContent =
      "$" + entry.bill.toFixed(2) + " split " + entry.people +
      " ways = $" + entry.each.toFixed(2) + " each";

    // A delete button for this specific row (the 3rd interaction type).
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove";
    // Pass this entry's id so we remove the right one.
    removeBtn.addEventListener("click", function () {
      removeEntry(entry.id);
    });

    li.appendChild(label);
    li.appendChild(removeBtn);
    historyList.appendChild(li);
  }
}

// ===== DERIVED OUTPUT: THE SESSION SUMMARY =====
// This number is COMPUTED from the history array, not typed by the user.
// It adds up every saved bill total to show how much the table has spent.
function renderSummary() {
  let count = history.length;
  let combined = 0;

  // Walk through the array and add up the totals.
  for (let i = 0; i < history.length; i++) {
    combined = combined + history[i].total;
  }

  if (count === 0) {
    summaryBox.textContent = "";
  } else {
    summaryBox.textContent =
      count + " split(s) saved · $" + combined.toFixed(2) + " total billed this session";
  }
}

// ===== REMOVE ONE SAVED SPLIT =====
function removeEntry(id) {
  // Keep every entry whose id does NOT match the one we're removing.
  history = history.filter(function (entry) {
    return entry.id !== id;
  });

  // Redraw both views so they reflect the smaller array.
  renderHistory();
  renderSummary();
}

// ===== RESET THE INPUT BOXES =====
function resetCalculator() {
  document.getElementById("bill-amount").value = "";
  document.getElementById("tip-percent").value = "";
  document.getElementById("num-people").value = "";
  resultsBox.textContent = "";
}

// ===== CLEAR THE WHOLE SAVED HISTORY =====
function clearHistory() {
  history = [];      // empty the array
  renderHistory();   // show the empty message
  renderSummary();   // blank out the summary
}

// Draw the empty state once when the page first loads.
renderHistory();
renderSummary();
