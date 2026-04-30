// Examples demonstrating Array.prototype.reduce()

// 1) Sum numbers
const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('Sum:', sum); // 100

// 2) Sum prices from objects
const products = [
	{ name: 'Laptop', price: 1000 },
	{ name: 'Phone', price: 500 },
	{ name: 'Tablet', price: 300 }
];
const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
console.log('Total Price:', totalPrice); // 1800

// 3) Count occurrences (using nullish coalescing for clarity)
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// const fruitCount = fruits.reduce((acc, fruit) => {
// 	acc[fruit] = (acc[fruit] ?? 0) + 1;
// 	return acc;
// }, {});
// console.log('Fruit Count:', fruitCount); // { apple: 3, banana: 2, orange: 1 }
const frutCount = fruits.reduce((acc,fruite)=>{
    acc[fruite] = (acc[fruite] || 0) + 1;
    return acc;},
 {})
console.log(frutCount);


// 4) Flatten nested arrays
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log('Flattened:', flattened); // [1,2,3,4,5,6]

// 5) Find max value
const nums = [15, 8, 32, 5, 42, 10];
const max = nums.reduce((acc, n) => (n > acc ? n : acc), nums[0]);
console.log('Max:', max); // 42

// 6) Group by property (group names by age)
const people = [
	{ name: 'Alice', age: 25 },
	{ name: 'Bob', age: 30 },
	{ name: 'Eve', age: 25 }
];
const grouped = people.reduce((acc, p) => {
	acc[p.age] = acc[p.age] ?? [];
	acc[p.age].push(p.name);
	return acc;
}, {});
console.log('Grouped by age:', grouped); // { '25': ['Alice','Eve'], '30': ['Bob'] }

