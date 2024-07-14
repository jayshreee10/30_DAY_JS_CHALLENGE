
//Activity 1: Arithmetic Operations
// • Task 1: Write a program to add two numbers and log the result to the console.

let a=3,b=5
const sum = a+b ;
console.log(sum)

// • Task 2:
// Write a program to subtract two numbers and log the result to the console.
function subtract (x,y){
return x-y
}
const result = subtract(7,5)
console.log(result)

// • Task 3:
// Write a program to multiply two numbers and log the result to the console.

const mulResult = (a,b) => {return a*b}
console.log (mulResult(4,5)) 
// • Task 4: Write a program to divide two numbers and log the result to the console.
const divResult = (a,b) => {return a/b}
console.log (divResult(4,2)) 

// • Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
// Activity 2: Assignment Operators
const rmdResult = (a,b) => {return a%b}
console.log (rmdResult(5,2)) 
// • Task 6:
// Use the += operator to add a number to a variable and log the result to the console.

let newNumber = 0;
   console.log(newNumber += 1)  

// • Task 7:
// Use the operator to subtract a number from a variable and log the result to the console.
let newNumber2 = 8;
   console.log(newNumber2 -= 1)  

// Activity 3: Comparison Operators
// • Task 8:
// Write a program to compare two numbers using > and < and log the result to the console.
let ab = 10 , cd= 10 ;
if (ab>cd ) {
    console.log("ab>cd")
}
else if (cd>ab){
    console.log("ab<cd")
}
else {console.log("ab=cd")}

// • Task 9:
// Write a program to compare two numbers using >= and and <= log the result to the console.
// • Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
// • Task 12: Write a program that uses the II operator to combine two conditions and log the result to the console.

let num1 = 20 ;
let num2 = 60 ;
let num3 = 70 ;
let num4 = 10 ;
let num5 = 40 ;

let result1 = num1*num2 ,result2 = num5*num4
let result3 = result1 +  result2
if(result1 >= result2 && result3 > num3 ){
    console.log("okay")
}
else if(result1 <= result2 && result3 >= num3) {
    console.log("okay but 50%")
}
else if (result1 == result2 && result3 >= num3){
    console.log("same same but different")
}
else if (result1 >= result2 && result3 == num3  ){
    console.log("try next time")
}
// • Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let var1 = "hii";var2 = "hiii", var3 = true , var4 = 34 
if (var1 == var2  ){
    console.log("same same but different")
}
else if (var1 === var2){
    console.log("same same ")
}
else if(var3 == var2 || var4==var1){
    console.log("Different")
}
else { console.log("bye") }
// Activity 4: Logical Operators

// • Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

// Activity 5: Ternary Operator
// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.