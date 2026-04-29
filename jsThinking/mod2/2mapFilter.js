
const cards = [
  {
    id: 1,
    title: "Budget Pen Set",
    category: "Stationery",
    price: 12,
    rating: 4.0,
    image: "https://picsum.photos/seed/pen/400/300",
  },
  {
    id: 2,
    title: "Coffee Mug",
    category: "Kitchen",
    price: 18,
    rating: 4.1,
    image: "https://picsum.photos/seed/mug/400/300",
  },
  {
    id: 3,
    title: "Water Bottle",
    category: "Fitness",
    price: 25,
    rating: 4.0,
    image: "https://picsum.photos/seed/bottle/400/300",
  },
  {
    id: 4,
    title: "Desk Lamp",
    category: "Home Decor",
    price: 34,
    rating: 4.3,
    image: "https://picsum.photos/seed/lamp/400/300",
  },
  {
    id: 5,
    title: "Running Shoes",
    category: "Fashion",
    price: 75,
    rating: 4.2,
    image: "https://picsum.photos/seed/shoes/400/300",
  },
  {
    id: 6,
    title: "Smart Watch",
    category: "Gadget",
    price: 89,
    rating: 4.8,
    image: "https://picsum.photos/seed/watch/400/300",
  },
  {
    id: 7,
    title: "Wireless Headphone",
    category: "Audio",
    price: 150,
    rating: 4.7,
    image: "https://picsum.photos/seed/headphone/400/300",
  },
  {
    id: 8,
    title: "Mechanical Keyboard",
    category: "Gadget",
    price: 199,
    rating: 4.6,
    image: "https://picsum.photos/seed/keyboard/400/300",
  },
  {
    id: 9,
    title: "Monitor 27 inch",
    category: "Electronics",
    price: 299,
    rating: 4.5,
    image: "https://picsum.photos/seed/monitor/400/300",
  },
  {
    id: 10,
    title: "Gaming Laptop",
    category: "Computers",
    price: 499,
    rating: 4.9,
    image: "https://picsum.photos/seed/laptop/400/300",
  },
];


const result  = cards
    .filter((card) => card.price > 50)
    .sort((a,b) => b.price - a.price)
    .slice(1, 2)
    .map((card) => card.title);

console.log(result);