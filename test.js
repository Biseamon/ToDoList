let myNestedArray = [
  // Only change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread", "array", 
       ["deep"]
    ],
  ["mutate", 1327.98, "splice", "slice", "push", 
    [
      ["deeper"]
    ]
  ],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", 
   [
    [
      ["deepest"]
    ]
   ]
  ]
  
  // Only change code above this line
];

console.log(myNestedArray[3][1]);
console.log(myNestedArray[3][5][0]);
console.log(myNestedArray[4][6][0][0]);


let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line
if(
obj.hasOwnProperty("Alan") &&
obj.hasOwnProperty('Jeff') &&
obj.hasOwnProperty('Sarah') &&
obj.hasOwnProperty('Ryan')
){
return true;
}else{
  return false;
}
  // Only change code above this line
}

console.log(isEveryoneHere(users));

function reverseString(str) {

  var reversedStr = "";

  for(i = str.length - 1; i >= 0; i--){
      reversedStr += str[i];
  }

return reversedStr;
}

console.log(reverseString("hello"));


function factorialize(num){

  if(num === 0 ){
    return 1;
  }
  return num * factorialize(num - 1);
}

console.log(factorialize(5));

function findLongestWord(str){

  var words = str.split(" ");
  let longestWord = "";
 
  for(var i = 0; i < words.length; i++){

    if(words[i].length > longestWord){
      longestWord = words[i].length;
    }
  }
  
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

function largestFour(arr){

  let largestArray = [];
  for(var i = 0; i < arr.length; i++){
    var largestNumber = arr[i][0];
    for(var j = 1; j < arr[i].length; j++){
        if(arr[i][j] > largestNumber)
        largestNumber = arr[i][j];
    }
    largestArray[i] = largestNumber;
  }
  return largestArray;
}

console.log(largestFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


function confirmEnding(str, target){

  return str.slice(str.length - target.length) === target;

}

console.log(confirmEnding("Bastianar", "nar"));

function repeatString(str, num){

  if(num < 0){
    return false;
  }

  let arr = "";

  for(var i = 0; i < num; i++){
    arr += str;
  }

  return arr;

}

console.log(repeatString("abc", 5));

function truncateStr(str, num){

let cutWord = "...";
let newWrod = "";
if (str.length > num){
  
 newWrod =  str.slice(0, num);
  newWrod += cutWord;

}else{
  console.log("try again!")
}

  return newWrod;
}

console.log(truncateStr("A-tisket a-tasket A green and yellow basket", 8));

function findElement(arr, func){

  let firstNum = 0;

    for(var i = 0; i < arr.length; i++){
      firstNum = arr[i];
      if(func(firstNum)){
        return firstNum;
      }  
  } 
  return firstNum;
}

console.log(findElement([1,2,3,4], num => num % 2 === 0));


function booWho(bool){

  if(typeof bool === "string"){
    return true;
  }
  return false;
}

var loo = "true";
console.log(booWho(loo));



function titleCase(str){

  var convert = str.toLowerCase().split(" ");
  var result = convert.map(function(val){
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });

  return result.join(" ");

}

console.log(titleCase("I'm a little tea pot"));


function frankenSplice(arr, arr2, n){

   /*  let array = arr.slice(0, arr.length);
    arr2.splice(n, 0, ...array);
 */

  let array = arr2.slice();
  array.splice(n, 0, ...arr);

  return array;
}

console.log(frankenSplice([1,2,3], [4, 5, 6], 1));


function bouncer(arr){

  let falsy = [];

 /*  for(var i = 0; i < arr.length; i++){
      if(typeof arr[i] == false){
        falsy += arr[i];
      }
  } */

  for(var i = 0; i < arr.length; i++){
    if(arr[i]) {
      falsy.push(arr[i]);
    }
  }

  return falsy;  
}

console.log(bouncer([7, "ate", "", NaN, 9]));


function getIndexToIns(arr, num){

  let value = 0;

  for(var i = 0; i < arr.length; i++){

    if(arr[i] < num){
      value++;

      //value += arr.indexOf(arr[i]);
      //arr.splice(value, 0, num);
      //console.log(arr);
    }
  }

  return value;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));


function mutation(arr){

 var test = arr[1].toLowerCase();
 var target = arr[0].toLowerCase();

for(var i = 0; i < test.length; i++){
  if(target.indexOf(test[i]) < 0) return false;
}

return true;
}

console.log(mutation(["hello", "hey"]));



function chunkArrayInGroups(arr, size){

  /* let first = arr.splice(0, size);
  let second = arr;
  let array = [first, second]; */

  let array = [];

  for(var i = 0; i < arr.length; i += size){
    array.push(arr.slice(i, i + size));
  }

  return array;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))


