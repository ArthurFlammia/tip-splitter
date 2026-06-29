# Tip Splitter

A simple web tool that splits a restaurant bill with tip across a group, saves
every split, and shows a running total for the whole session. Runs entirely in
the browser — no server, no API, no frameworks.

**Live site:** https://arthurflammia.github.io/tip-splitter/

## What it does
- Takes a bill amount, a tip percentage, and the number of people
- Shows the tip, the total with tip, and how much each person owes
- Saves each split to a running list so they aren't forgotten
- Shows a session total: how many splits have been saved and the combined amount
  billed
- Lets you remove a single saved split, or clear the whole list, without
  refreshing the page

## How to use it
1. Open the live site.
2. Enter the bill amount, the tip percent, and how many people are splitting.
3. Click **Calculate**. The tip, total, and per-person amount appear, and the
   split is added to the **Saved splits** list.
4. Calculate as many splits as you want — the session total updates each time.
5. Click **Remove** on any saved split to delete just that one, or **Clear
   history** to empty the list.
6. Click **Reset** to clear the input boxes for a fresh entry.

## How it works
The tool keeps a list (array) of saved splits in JavaScript. When you calculate a
split, an object holding that split's numbers is added to the list. The saved
list on the page and the session total are both rebuilt from that array whenever
it changes, so they always stay in sync. Removing or clearing entries updates the
array and redraws both.

## What I learned
- How to hold state in a JavaScript array and keep the page in sync with it
- How to build list items on the page with the DOM and rebuild them when the data
  changes
- How to attach a button to each list item and remove the right item by its id
- How to compute derived output (the session total) from stored data rather than
  just echoing back what the user typed
- How to validate input so the tool doesn't divide by zero or run on empty fields

## Tech
Plain HTML, CSS, and vanilla JavaScript. Deployed on GitHub Pages.
