# JavaScript Falsy Value Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to how falsy values are handled within conditional statements.  The bug involves a function that incorrectly manages falsy values such as 0, "", false, and NaN, leading to unexpected outputs.

## Bug Description

The `foo` function is designed to return `null` if either input `a` or `b` is `null`. However, it fails to account for other falsy values.  This results in incorrect calculations when these falsy values are provided as arguments.

## Bug Solution

The solution involves using a stricter check to identify whether a value is strictly equal to null.  This prevents the unintended behavior caused by other falsy values.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js`.
3. Run the `bug.js` file. Observe the unexpected outputs.
4. Run the `bugSolution.js` file and compare the outputs to see the corrected behavior.
