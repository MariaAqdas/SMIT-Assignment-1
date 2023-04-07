// Question 1
// Write a JavaScript program that accepts tw number in prompts and display the larger one in the console
let firstPrompt = prompt("Enter your first number");
let secondPrompt = prompt("Enter your last number");

if (firstPrompt > secondPrompt) {
  console.log(firstPrompt);
} else if (secondPrompt > firstPrompt) {
  console.log(secondPrompt);
} else 
  console.log("you writed equal numbers");

  //Question 2

let number = prompt("Enter a number:");

if (number > 0) {
  alert("The number have plus sign.");
} else if (number < 0) {
  alert("The number have minus sign");
} else {
  alert("you entered wrong number");
}





//Question 3

let firstNumber = prompt("Enter first number:");
let secondNumber = prompt("Enter second number:");
let thirdNumber = prompt("Enter third number:");
let forthNumber = prompt("Enter fourth number:");
let fifthNumber = prompt("Enter fifth number:");

let largest = firstNumber;

if (secondNumber > largest) {
  largest = secondNumber;
}
if (thirdNumber > largest) {
  largest = thirdNumber;
}
if (forthNumber > largest) {
  largest = forthNumber;
}
if (fifthNumber > largest) {
  largest = fifthNumber;
} else {
    console.log("you have typed same numbers")
}

console.log("The largest number is " + largest);


//Question 4

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }



//Question 5

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
      console.log("Fizz");
    }

    else if (i % 5 === 0) {
      console.log("Buzz");
    }

    else {
      console.log(i);
    }
  }




//Question 6


for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }


//Question 7

const marks = [];
for (let i = 1; i <= 1; i++) {
  marks.push(parseInt(prompt(`Enter the mark for student ${i}:`)));
}
const sum = marks.reduce((acc, curr) => acc + curr, 0);
const average = sum / marks.length;

let grade;
if (average < 30) {
  grade = "F";
} else if (average < 40) {
  grade = " E";
} else if (average < 50) {
  grade = "D";
} else if (average < 60) {
  grade = "C";
} else if (average < 70) {
  grade = "B";
} else if (average < 80) {
  grade = "A";
} else if (average < 90) {
  grade = "A+";
} else {
  grade = "A";
}

alert(`Average marks: ${average.toFixed(2)}\nGrade: ${grade}`);
