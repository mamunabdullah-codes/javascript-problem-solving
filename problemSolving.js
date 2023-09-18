let num1 = 192;
let num2 = 84;
let num3 = 223;

// 1. find the maximum between two numbers (num1 and num2)
if (num1 < num2) {
  console.log("Ans-1: Max between two numbers is ", num2);
} else {
  console.log("Ans-1: Max between two numbers is ", num1);
}

// 2. find a maximum between three numbers
if (num1 > num2 && num1 > num3) {
  console.log("Ans-2: Max between three numbers is ", num1);
} else if (num2 > num3) {
  console.log("Ans-2: Max between three numbers is ", num2);
} else {
  console.log("Ans-2: Max between three numbers is ", num3);
}

// 3. Check whether a number is negative, positive or zero.

let checkNumber = -1;
if (checkNumber === 0) {
  console.log("Ans-3: The Number is: Zero");
} else if (checkNumber > 0) {
  console.log("Ans-3: The Number is: Positive");
} else {
  console.log("Ans-3: The Number is: Negative");
}

// 4. Check whether a number is divisible by 10 or not.

let divisibleNumber = 30;

if (divisibleNumber % 10 === 0) {
  console.log("Ans-4: The Number is Divisible by 10");
} else {
  console.log("Ans-4: The Number is not Divisible by 10");
}

// 5. Check whether a number is even or odd.
let givenNumber = 25;
if (givenNumber % 2 === 0) {
  console.log("Ans-5: The Number is Even");
} else {
  console.log("Ans-5: The Number is Odd");
}

// 6. check whether a character is in the alphabet or not.
let word = "Pineapple".toLowerCase();
let searchAlphabet = "A";
let lowerSearchAlphabet = searchAlphabet.toLowerCase();

if (word.indexOf(lowerSearchAlphabet) !== -1) {
  console.log("Ans 6: The searched Alphabet : ", searchAlphabet, "is found");
} else {
  console.log(
    "Ans 6: The searched Alphabet : ",
    searchAlphabet,
    "is not found"
  );
}

// 7. check whether the temperature is hot, cold or normal.

//(Weather >=30  is hot, Weather <= 25 is cold , any other value is normal)

let temperature = 28;
if (temperature >= 30) {
  console.log("Ans 7: The Weather is hot");
} else if (temperature <= 25) {
  console.log("Ans 7: The Weather is cold");
} else {
  console.log("Ans 7: The Weather is normal");
}

// 8. find the total marks, average of 3 subjects and average grade.

// If Percentage >= 90% then print “Grade A”
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

let mathMarks = 30;
let englishMark = 45;
let physicsMark = 40;

let totalMarks = mathMarks + englishMark + physicsMark;
console.log("Ans 8: Total marks: ", totalMarks);

let averageMarks = Math.round(totalMarks / 3);
console.log("Ans 8: Average Marks: ", averageMarks);

// Grading
if (averageMarks >= 90) {
  console.log("The Grade is : A");
} else if (averageMarks >= 80) {
  console.log("The Grade is : B");
} else if (averageMarks >= 70) {
  console.log("The Grade is : C");
} else if (averageMarks >= 60) {
  console.log("The Grade is : D");
} else if (averageMarks >= 40) {
  console.log("The Grade is : E");
} else if (averageMarks < 40) {
  console.log("The Grade is : F");
}

// 9.	Find the random number between 1 to 10
let randomNumber = Math.random();
console.log("Random Number is : ", Math.floor(randomNumber * 10) + 1); //

// 10. for loop where it prints out the even number only between number 10 to 50.

for (let count = 10; count <= 50; count++) {
  if (count % 2 === 0) {
    console.log("Even Number: ", count);
  }
}

// String Only

// 11. Using string.indexOf search for a word if it is present in a sentence variable or not.

let sentence = "A Quick Brown Fox Jumped Over The Lazy Dog".toLowerCase();
// let toLowerSentence = sentence.toLowerCase();  (Another Way)
let searchWord = "LazY";
let lowerSearchWord = searchWord.toLowerCase();

if (sentence.indexOf(lowerSearchWord) !== -1) {
  console.log("Ans 11: The searched word : ", searchWord, "is found");
} else {
  console.log("Ans 11: The searched word : ", searchWord, "is not found");
}

// 12. Using string.includes method search for a word if it is present in a sentence variable or not.

if (sentence.includes(lowerSearchWord)) {
  console.log("Ans 12: The searched word", searchWord, "is found");
} else {
  console.log("Ans 12: The searched word", searchWord, "is not found");
}

// 13. Slice a sentence of 50 words and show only the first 40 index of the sentence using string.slice method and …. At the console.log

let theSentence =
  "In a delicious pizza, the slice method allows you to choose precisely how big or small a piece you want, just like JavaScript's slice method lets you extract specific portions of an array, ensuring you get exactly what you need.";

let sliceSentence = theSentence.slice(0, 40);
console.log("Ans 13. The sliced part of the sentence is:", sliceSentence);
