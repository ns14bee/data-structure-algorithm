const arr = [-5,2,10,4,6];

const searchElement = (arr, target) => {
    for(let i = 0; i< arr.length; i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

console.log(searchElement(arr, 10))
console.log("bigO: O(n)");