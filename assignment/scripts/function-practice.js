console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'

hello()
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'


function helloName( name ) {
  return name;
}
// Remember to call the function to test
console.log("Hello!", helloName("holly"));
console.log("Hello", helloName("Lisa")); 


// 3. Function to add two numbers together & return the result

//need to add secondNumber
// return
// console log test 
// create variable = to total 


function addNumbers( firstNumber, secondNumber ) {
  let total = firstNumber + secondNumber;
  return total; 
}
console.log("the total is", addNumbers(5,3));





// 4. Function to multiply three numbers & return the result

// add numb variabke
//conosle log
//return needed 



function multiplyThree( num1, num2, num3 ){
  let answer = num1 * num2 * num3;
  return answer;
}
console.log("the answer is", multiplyThree(2,3,3)); // expceted 18
console.log("Here is the answer", multiplyThree (5,2,10));// answer should be 100

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise


//added true/false return 
// testing console

function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }else{
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
// personal test
console.log("isPositive - should say true", isPositive(5));
console.log("isPositive - should say false", isPositive(-5));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

// array needed
// return needed
// need varible that is the last item
let array = [10, 5, 3, 13];


function getLast(){
  let lastItem = array.slice(-1);
  return lastItem;
}
console.log("testing the function", getLast());//should be 13



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

console.log("question 7");


function find(value, newArrayInput) {
  for(let i = 0; i < newArrayInput.length; i++) {
    if( i = value ) {// dont use .includes/.indexOf/.find
      return true;
    }
    else {
      return false;
    }
  }
  
}
console.log("testing the function", find(0, [1,2,3]));  // false
console.log("testing the function", find(1, [1,2,3])); // true



// old code:
/*function find(value, newArrayInput ){
  for(let i =0; i < newArrayInput.length; i++){
    console.log("testing for loop",);
    return;
  }

}
 
console.log(find (1, newArrayInput));
*/


//function find( value, array ){
 //  
//}





// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!/ 
