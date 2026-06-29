# MP2 Proposal — Tip Splitter

## The annoyance
Whenever I go out to eat with friends, figuring out the tip and splitting the
bill turns into everyone pulling out their phone calculator and getting slightly
different numbers. It's slow and someone always ends up underpaying. And when we
run more than one tab in a night, nobody remembers what we already spent.

## Who it's for
Me and my friends, whenever we split a check at a restaurant.

## What the tool does
A small web page where I type in:
- the total bill amount
- the tip percentage I want to leave
- how many people are splitting

It instantly shows the tip amount, the new total with tip, and how much each
person owes. It also **saves every split** I calculate to a running list, and
shows a **session total** — how many splits I've done and the combined amount
billed so far. I can remove any saved split or clear the whole list without
refreshing. No app to download, no API, no server — just one page that does the
math and remembers it.

## The state it tracks
A list (array) of every saved split. Each saved split remembers the bill, the
number of people, the total with tip, and the per-person amount. Both the saved
list and the session total are built from this same list.

## Core features
1. Calculate the tip, total, and per-person amount from what I type in
2. Save each calculated split to a running list
3. Show a session total that adds up every saved split
4. Remove a single saved split
5. Reset the inputs, and clear the whole history, without refreshing

## What I don't know yet
- How to store a growing list of items in JavaScript and keep the page in sync
  with it
- How to build and rebuild the list on the page when the data changes
- How to delete one specific item from the list

## Tech
Plain HTML, CSS, and JavaScript. No frameworks, no API.
