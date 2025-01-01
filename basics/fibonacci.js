const fibonacci = (n) => {
  let result = [0, 1];
  if (n === 1) return [0];
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
};

console.log(fibonacci(7));
console.log("bigO: O(n)");
