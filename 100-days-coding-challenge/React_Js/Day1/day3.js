console.log('day 3 javascrip')

/* 
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns an integer.
*/

// functions which have passed as examples 

function plusOne(n){
    return n+1;
  
}
const plusOneResult = plusOne(8)
console.log(plusOneResult)

function lessOne(n){
    return n - 1;
}

const lessOneResult = lessOne(9);
console.log(lessOneResult);

function constant (){
    return 'this is constant function '
}

const constantResult = constant()
console.log(constantResult)

// function takes array as parameter 
// this is how the map method works behind the sence 

// const arr = [1,2,3,4,5]

const plusOneArr = (arr,i) => {
    const result = []
    for(let i=0; i<arr.length; i++){
        result.push(arr[i] + 1)
    }
    // console.log(result);
    return result;
}
// plusOneArr(arr);

const lessOneArr = (arr) => {
    const result = []
    for(let i=0; i<arr.length; i++){
        result.push(arr[i] - 1)
    }
    // console.log(result);
    return result;
}

// lessOneArr(arr);

// its time to function as a parameter 

// const  hello = () => {console.log('hello ')}

const genericFunction = (fun) => {
   return  fun([2,3,4,5,6] );
    
}

const plusOneCall = genericFunction(plusOneArr)
console.log(plusOneCall)

