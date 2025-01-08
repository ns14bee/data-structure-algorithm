const isPowrOfTwo = (n) => {  
  if(n<1){
    return false;
}
return (n & (n-1)) === 0;
}

console.log(isPowrOfTwo(16))
console.log("bigO: O(1)");


const isPowerOfN = (n, p) => {
  if(n===1){
      return true;
  }
  const sqrt = Math.sqrt(n);
  if(sqrt === p){
     return  true;
  }
  if(sqrt % 1 === 0 && sqrt > p){
      return isPowerOfN(sqrt, p)
  }else{
      return false;
  }
}

console.log(isPowerOfN(1, 3))
console.log("bigO: O(sqrt(n))");