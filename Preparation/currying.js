// function add(a) 
// { return function (b) 
//     { return a + b; } } 
//     const res =add(3)(4)
//     console.log(res)
function multiply(a, b) 
{ return a * b; } 
function currying(fn) 
{ return function (a) {
     return function (b) { 
        return fn(a, b); } } }
var curriedMultiply = currying(multiply); // Returns 12 curriedMultiply(4)(3); // Also returns 12
const m=multiply(4, 3); 
const n=curriedMultiply(4)(3); 
console.log(n)
console.log(m)