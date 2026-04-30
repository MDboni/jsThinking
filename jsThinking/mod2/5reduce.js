
// const product = [
//     { id: 1, name: "Laptop", price: 1000, stock: 5 },
//     { id: 2, name: "Phone", price: 500, stock: 0 },
//     { id: 3, name: "Tablet", price: 300, stock: 3 },
// ]

// const total = product.reduce((acc, p) => {
//     console.log(p);
//     const a = acc + p.price;
//     return a;
// }, 0)

// console.log(total);


// ===== REDUCE EXPLANATION =====
// reduce() processes an array and returns a SINGLE value
// Syntax: array.reduce((accumulator, currentValue) => { ... }, initialValue)

// EXAMPLE 1: Sum all numbers
const numbers = [10, 20, 30, 40];
// const sum = numbers.reduce((acc, num) => {
//     console.log(`acc: ${acc}, num: ${num}`);
//     return acc + num;
// }, 0); // 0 is initial value
// console.log("Sum:", sum); // 100

// const sum = numbers.reduce((acc,i)=>{
//     console.log(`acc: ${acc}, num: ${i}`);
//     const a = acc + i;
//     return a;
//     console.log("This will never run",a);
// },0)

// // EXAMPLE 2: Sum prices from objects
// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Tablet", price: 300 }
// ];
// const totalPrice = products.reduce((acc, product) => {
//     return acc + product.price;
// }, 0);
// console.log("Total Price:", totalPrice); // 1800


// EXAMPLE 3: Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log("Fruit Count:", fruitCount); // { apple: 3, banana: 2, orange: 1 }


// EXAMPLE 4: Flatten nested array
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, arr) => {
    return acc.concat(arr);
}, []);
console.log("Flattened:", flattened); // [1, 2, 3, 4, 5, 6]


// EXAMPLE 5: Find max value
const nums = [15, 8, 32, 5, 42, 10];
const max = nums.reduce((acc, num) => {
    return num > acc ? num : acc;
}, nums[0]);
console.log("Max:", max); // 42