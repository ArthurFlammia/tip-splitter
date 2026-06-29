<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tip Splitter</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="container">
    <h1>Tip Splitter</h1>
    <p class="tagline">Split a bill, save each one, and see what the whole table spent.</p>

    <!-- ===== INPUTS ===== -->
    <div class="field">
      <label for="bill-amount">Bill amount ($)</label>
      <input type="number" id="bill-amount" placeholder="e.g. 80">
    </div>

    <div class="field">
      <label for="tip-percent">Tip percent (%)</label>
      <input type="number" id="tip-percent" placeholder="e.g. 18">
    </div>

    <div class="field">
      <label for="num-people">Number of people</label>
      <input type="number" id="num-people" placeholder="e.g. 4">
    </div>

    <!-- ===== BUTTONS ===== -->
    <div class="buttons">
      <button id="calc-button">Calculate</button>
      <button id="reset-button" class="secondary">Reset</button>
    </div>

    <!-- ===== CURRENT RESULT ===== -->
    <div id="results" class="results"></div>

    <!-- ===== SAVED HISTORY (built from the state array) ===== -->
    <div class="history-section">
      <div class="history-header">
        <h2>Saved splits</h2>
        <button id="clear-history-button" class="secondary small">Clear history</button>
      </div>
      <p id="summary" class="summary"></p>
      <ul id="history-list"></ul>
    </div>
  </div>

  <script src="js/script.js"></script>
</body>
</html>
