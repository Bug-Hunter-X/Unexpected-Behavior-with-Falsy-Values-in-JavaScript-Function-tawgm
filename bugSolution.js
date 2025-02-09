function foo(a, b) {
  if (a === null || b === null || a === 0 || a === "" || a === false || Number.isNaN(a) || b === 0 || b === "" || b === false || Number.isNaN(b)) {
    return null; // Handle null and other falsy values
  } else {
    return a + b; // Perform the addition
  }
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5));   // Output: 10
console.log(foo(0,0)); // Output: null

//The unexpected behavior is solved by the updated foo function
console.log(foo(false, 5)); //Output: null
console.log(foo(0,5)); //Output: null
console.log(foo('',5)); //Output: null
console.log(foo(NaN,5));//Output: null