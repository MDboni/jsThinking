// ============================================
// 1. SOME() - Industrial Level Examples
// ============================================

// USE CASE 1: Validate user permissions
const users = [
  { id: 1, name: "Jahid", role: "admin", isActive: true },
  { id: 2, name: "Boni", role: "user", isActive: false },
  { id: 3, name: "Amin", role: "user", isActive: true },
];

const a = users.some(user => user.name === "jayed" || user.isActive);
console.log(a);


// const hasAdmin = users.some(user => user.role === "admin" && user.isActive);
// console.log("Has active admin?", hasAdmin); // true

// // USE CASE 2: Check if any product price is out of stock
const products = [
  { id: 1, name: "Laptop", price: 1000, stock: 5 },
  { id: 2, name: "Phone", price: 500, stock: 0 },
  { id: 3, name: "Tablet", price: 300, stock: 3 },
];

const ab = products.some(product => product.stock === 0);
console.log(ab);

// const hasOutOfStock = products.some(product => product.stock === 0);
// console.log("Any product out of stock?", hasOutOfStock); // true

// // USE CASE 3: Validate email format before processing
// const emails = [
//   "user@gmail.com",
//   "invalid-email",
//   "admin@company.com",
// ];

// const hasInvalidEmail = emails.some(email => !email.includes("@"));
// console.log("Has invalid email?", hasInvalidEmail); // true

// console.log("\n");

// // ============================================
// // 2. INCLUDES() - Industrial Level Examples
// // ============================================

// // USE CASE 1: Permission & Access Control
const allowedRoles = ["admin", "moderator", "editor"];
const userRole = "admin";

const abc = allowedRoles.includes("as");
console.log(abc);

// if (allowedRoles.includes(userRole)) {
//   console.log("Access granted for:", userRole);
// }

// // USE CASE 2: Blocked keywords/spam detection
// const blockedWords = ["spam", "malicious", "virus", "hack"];
// const userComment = "This is a great product";

// const isSpam = blockedWords.some(word => userComment.toLowerCase().includes(word));
// console.log("Is spam?", isSpam); // false

// // USE CASE 3: CSV/Database column validation
const expectedColumns = ["id", "name", "email", "phone"];
const csvHeaders = ["id", "name", "email"];

// const allColumnsPresent = expectedColumns.every(col => csvHeaders.includes(col));
// console.log("All required columns present?", allColumnsPresent); // false

// console.log("\n");

// // ============================================
// // 3. ARRAY.FROM() - Industrial Level Examples
// // ============================================

// // USE CASE 1: Convert NodeList to Array (DOM manipulation)
const elements = document.querySelectorAll('.card');
const elementArray = Array.from(elements);
elementArray.forEach(el => el.classList.add('active'));

// // USE CASE 2: Generate range of numbers for pagination
// const pageNumbers = Array.from({ length: 5 }, (_, i) => i + 1);
// console.log("Page numbers:", pageNumbers); // [1, 2, 3, 4, 5]

// // USE CASE 3: Create array from string and manipulate
// const sentence = "JavaScript";
// const chars = Array.from(sentence);
// const charCount = {};

// chars.forEach(char => {
//   charCount[char] = (charCount[char] || 0) + 1;
// });
// console.log("Character count:", charCount);

// // USE CASE 4: Transform Set to Array with modification
// const uniqueIds = new Set([1, 2, 3, 4, 5]);
// const doubledIds = Array.from(uniqueIds, id => id * 2);
// console.log("Doubled IDs:", doubledIds); // [2, 4, 6, 8, 10]

// // USE CASE 5: Create 2D matrix/grid for game
// const gridSize = 3;
// const gameBoard = Array.from({ length: gridSize }, () =>
//   Array.from({ length: gridSize }, () => null)
// );
// console.log("Game board:", gameBoard);

// console.log("\n");

// // ============================================
// // BONUS: Real-world combined usage
// // ============================================

// const orders = [
//   { id: 101, customer: "Ali", items: ["Laptop", "Mouse"], status: "delivered" },
//   { id: 102, customer: "Fatima", items: ["Phone", "Charger"], status: "pending" },
//   { id: 103, customer: "Hassan", items: ["Tablet"], status: "cancelled" },
// ];

// const pendingOrders = orders.filter(order => order.status.includes("pending"));
// const hasMultipleItems = orders.some(order => order.items.length > 1);
// const allOrderIds = Array.from(orders, order => order.id);

// console.log("Pending orders:", pendingOrders);
// console.log("Has orders with multiple items?", hasMultipleItems);
// console.log("All order IDs:", allOrderIds);



const storeAdminType = ["inbound", "outbound"];

const allowedTypes = new Set(["admin", "inbound", "dqm"]);