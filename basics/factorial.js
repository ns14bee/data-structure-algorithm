const factorial = (n) => {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result = result * i;
  }
  return result;
};
console.log(factorial(5));
console.log("bigO: O(n)");

const factorialRec = (n) => {
  if(n < 0) return 'invalid';
  if(n === 0) return 1;
  return n * factorialRec(n - 1);
}
console.log(factorialRec(4))
console.log("bigO: O(n)");