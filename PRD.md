# Tip Splitter — Product Requirements Document (PRD)

## 1. Overview
Tip Splitter is a small, front-end-only web tool that calculates how to split a
restaurant bill with tip across a group, and keeps a running record of every
split made during the session. It runs entirely in the browser on GitHub Pages —
no server, no API, no frameworks.

## 2. Problem
When a group eats out, someone has to do the mental math: add the tip, divide by
the number of people, and remember the result. Across a night with multiple
rounds or multiple tables, those numbers get lost. Existing tip calculators
forget each result the moment you start the next one. Tip Splitter fixes that by
remembering every split and showing the running total for the whole session.

## 3. Target user
Anyone splitting a bill with friends — built first for myself and my friends on a
night out, where we often run more than one tab and want to know what the group
spent in total by the end.

## 4. State the tool tracks
The core of the tool is a single piece of state held in JavaScript:

- `history` — an array of saved split objects. Each object stores:
  - `id` — a unique number used to find and remove that entry
  - `bill` — the bill amount entered
  - `people` — how many people split it
  - `total` — bill plus tip
  - `each` — what each person owes

Two separate parts of the page read from this same array: the saved-splits list
and the session summary. Both are rebuilt from the array whenever it changes.

## 5. Core features
1. **Calculate a split** — user enters a bill amount, tip percent, and number of
   people; the tool shows the tip, the total with tip, and the per-person amount.
2. **Save to history** — every successful calculation is added to the `history`
   array and appears in the saved-splits list.
3. **Session summary (derived output)** — a line computed from the array showing
   how many splits have been saved and the combined total billed this session.
   This number is calculated from state, not typed by the user.
4. **Remove a split** — each saved entry has its own Remove button that deletes
   just that entry and recalculates the summary.
5. **Reset and Clear history** — Reset clears the input boxes and the current
   result; Clear history empties the whole saved list and starts the session over.
   Neither requires refreshing the page.

## 6. User interactions (3+ types required)
- Number input fields (bill, tip percent, people)
- Calculate button click
- Reset button click
- Remove-entry button click (one per saved row)
- Clear-history button click

## 7. Input handling
- If the bill or the number of people is zero or below, the tool shows a message
  and stops before doing any math, so it never divides by zero or shows nonsense.
- The result and history are updated through the DOM (text and list elements),
  never through `alert()` boxes.

## 8. Out of scope
- No saving between sessions (no localStorage) — closing the tab clears history.
- No server, database, login, or external API.
- No currency conversion or per-person custom amounts; everyone splits evenly.

## 9. Success criteria
- A classmate can open the live site and use it without help.
- The tool remembers multiple splits and shows a correct running total.
- Removing or clearing entries updates the summary correctly every time.
- The site is deployed and reachable at the live GitHub Pages URL.

## 10. Tech
- Plain HTML, CSS, and vanilla JavaScript. No frameworks or libraries.
- Deployed on GitHub Pages from the `main` branch.
- Live URL: https://arthurflammia.github.io/tip-splitter/
