// VARIABLE DECLARATION

// Task 1: Declare a variable using var , assign it a number, and log the value to the console.

var num = 20;
console.log (num);

//• Task 2: Declare a variable using let , assign it a string, and log the value to the console.

let namee = "Jayshree" // can not use name variable
console.log (namee)

//Activity 2: Constant Declaration
 

// Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.

const value = false 
console.log (value)

// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

const pName = "guru"
const isAlive = true
const age = 89
const pData = {fullName : "Guru Randhawa",homeTown:"Gujarat",gender:"male",catagory:"general"}
const pJobs = ["dancer","comedian","actor","influencer"]

console.log(typeof(pName))
console.log(typeof(isAlive))
console.log(typeof(age))
console.log(typeof(pData))
console.log(typeof(pJobs)) // Type of array is an Object

//Activity 4: Reassigning Variables

//Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.

let pIncome = 35000;
console.log(pIncome)
pIncome = 40000;
console.log(pIncome)

//Activity 5: Understanding const
//• Task 6: Try reassigning a variable declared with const and observe the error.

const pLoan = 300000;
// console.log(pLoan)
pLoan = 200000
console.log(pLoan) // TypeError: Assignment to constant variable.