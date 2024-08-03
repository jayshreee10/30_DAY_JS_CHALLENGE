// Day 3: Control Structures
// Tasks/Activities:
// Activity 1:
// If-Else Statements
// • Task 1:
// Write a program to check if a number is positive, negative, or zero, and log the result to the console.
// • Task 2:
// Write a program to check if a person is eligible to vote (age 18) and log the result to the console.

function isPositive (num){
    if(num>0){
        console.log(num + "is positive")
    }
    if(num<0){
        console.log(num + "is negative")
    }
    if(num=0){
        console.log(num + "is zero")
    }
    else{
        console.log(num + "is not a number")
    }
    if(num>=18){
        console.log(num + "is eligible to vote")
    }
    else{
        console.log(num + "is not eligible to vote")
    }
}
isPositive(8)
isPositive(-9)
isPositive(0)
isPositive("a")

// Activity 2: Nested If-Else Statements
// • Task 3:
// Write a program to find the largest of three numbers using nested if-else statements.
function largest (num1,num2,num3){
if(num1>num2){
    if (num1>num3){
        console.log (num1 + "is the largest")
    }
}
if(num2>num1){
    if (num2>num3){
        console.log (num2 + "is the largest")
    }
}
else {
    console.log (num3 + "is the largest")
}
}
largest(1,0,-1)
largest(1,5,0)
largest(-1,-5,0)
// Activity 3:
// Switch Case
// • Task 4 :
// Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
// • Task 5: Write a program that uses a switch case to assign a grade CA', 'C, 'D, 'F) based on a score and log the grade to the console.
// Activity 4.
// • Conditional (Ternary) Operator
// • Task 6:
// Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
function oddEven(num){
    num % 2 ? console.log (num+"even "):console.log (num+" odd")
}
oddEven(6)
oddEven(9)
// Activity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the
// result to the console.

function leapyear (year){
    if (year%4 && year%400 ){
        if(year%100){
            console.log(year+"not a leap year")
        }
    }
    else {
        console.log(year+" a leap year")
    }
}
leapyear(2020)
leapyear(2019)
leapyear(2024)