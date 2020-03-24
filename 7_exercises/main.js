/***** Exercise 1 *****/
console.log("Exercise 1:");
let friends = ["Alice", "Bob", "Carol"];

console.log("hello " + friends[0]);
console.log("hello " + friends[1]);
console.log("hello " + friends[2]);

/***** Exercise 2 *****/
console.log("Exercise 2:");
friends = ["Alice", "Bob", "Carol"];

for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    console.log("hello " + friend);
}

/***** Exercise 3 *****/
console.log("Exercise 3:");
let numbers = [3, 2, 9, 5, 6];

// 1. last element
let lastIndex = numbers.length - 1;
let lastNumber = numbers[lastIndex];
console.log("Last element: " + lastNumber);

// 2. sum of all numbers
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    sum = sum + currentNumber;
}
console.log("Sum of numbers:" + sum);

// 3. largest number
let largestNumber = -1;
for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    if (largestNumber < currentNumber) {
        largestNumber = currentNumber;
    }
}
console.log("Largest number: " + largestNumber)

// 4. average (mean) of all numbers
sum = 0;
for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    sum = sum + currentNumber;
}
let mean = sum / numbers.length;
console.log("Mean of numbers: " + mean);