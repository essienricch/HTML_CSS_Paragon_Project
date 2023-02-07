console.log("Working");


//Declaring variable:


// var firstName = "Richard";
// var age = 5;
// const API_KEY = "12345JSONqwerty";
// let height = 34;
// let big_number = 291827463728394058473721727384;
// let a_very_big_number = BigInt(291827463728394058473721727384);

// console.log(typeof big_number);
// console.log(typeof firstName);

// console.log(`${firstName} $ IMEI: {big_number} `);
// console.log(firstName + " is " + "crutchy");
// console.log(firstName);
// console.log(age);
// console.log(API_KEY);
// alert(firstName + ", " + age);

//creating an object:

let user = {
  id: "",
  surname: "",
  firstName: "",
  phoneNumber: "",
};

// console.log(user.id);
// console.log(user["id"]);
//xuser[age];

let userId = prompt("What's your id number? ");
user.id = userId;
let surname = prompt("What is your Surname? ");
user.surname = surname
let firstName = prompt("What is your first name? ");
user.firstName = firstName;
let phoneNumber = prompt("What is your phoneNumber? ");
user.phoneNumber = phoneNumber;

console.log(user);
alert("my name is "+ surname + ", " + firstName + " and my phone number is " + phoneNumber)

//LOOPS:

numbers = [14,33,234,56,78,90,120,50,34];

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]); 
}


for (let i in numbers){
    console.log(i)
}

for(let i of numbers){
    console.log(i)
}

console.log(numbers[5])

console.log(numbers[4])
alert(numbers, phoneNumber)


// FUNCTIONS:

//function as expression:
function sum(firstNumber, secondNumber){
    return firstNumber + secondNumber
}

//call-back function:
let sub = function(firstNumber, secondNumber){
    return firstNumber - secondNumber
}


//Arrow function:
let add = (firstNumber, secondNumber) => firstNumber + secondNumber

let sumlet = (param1, param2) => {
    x = param1 + 1
    param2(param1, x)
}

// let sublet = (num1, num2) => {
//     return num1 - num2
// }

// function sublets(run1, run2){
//     return run1 + run2
// }

// console.log(
    
//     sumlet(5, (num1, num2) => {
//         return num1 - num2;
//     })
// )

console.log(sum(20,40))
console.log(sub(40,10))
console.log(add(56, 34))

//setTimeOut:






// nativeNames = ["smith", "kelvin","gentro"]
// nativeNames.forEach(nativeName) => {
//     console.log(nativeName)
// });

//ARRAY:
let numbers = new Array();
numbers.push(1)
numbers.push("Hello")
console.log(numbers)

let name = ["nenman", "martha", "yemi","ebuka","peter"]

Array.prototype.forEach((name) => console.log(name));


let newNames =  names.map((name) => "HELLO")


let userMap = new Map();
let user1 = {
    school: "semi-colon",
    cohort: "13",
};

let userObject = {
    name : "Kelvin",
    age: 18,
    gender: "male",
    height: "6'4",
    user1: "NATIVE",
};

console.log(userObject); 

userMap.set("one","uno");
userMap.set(userObject, user1);

console.log(document.body.children);

//DESTRUCTURING an ARRAY:

let names = ["Adewunmi", "Adeola", "Adeyemi"]

let [hello] = names;
console.log(world);

//Access 2nd Element:

let [, , world] = names
console.log(world);

