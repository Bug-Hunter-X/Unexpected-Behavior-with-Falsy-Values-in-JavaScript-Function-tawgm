function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  } else {
    return a + b; // Perform the addition
  }
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5));   // Output: 10
console.log(foo(0,0)); // Output: 0

// The unexpected behavior happens when we pass in values that are falsy but not null or undefined
console.log(foo(false, 5)); //Output: 5, expected output should be null as false is a falsy value
console.log(foo(0,5)); //Output: 5, expected output should be null as 0 is a falsy value
console.log(foo('',5)); //Output: 5, expected output should be null as '' is a falsy value
console.log(foo(NaN,5));//Output: NaN, expected output should be null as NaN is a falsy value