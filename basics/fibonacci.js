const fibonacci = (n) => {
  if(n < 0) return "Invalid input";
  let result = [0, 1]; 
  if(n === 0) return [0];
  if (n === 1) return result;
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
};

console.log(fibonacci(7));
console.log("bigO: O(n)");

const fibonacciRecursive = (n) => {
  if(n < 0) return "Invalid input";
  if(n === 0) return [0];
  if(n === 1) return [0, 1];
  let result = fibonacciRecursive(n - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
}


console.log(fibonacci(7));
console.log("bigO: O(2^n)");