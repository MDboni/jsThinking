
// const a = [1, 2, 3, 4, 5];
// const c = ["a", "B", "c", "d", "e"];

// const b = a.sort((x, y) => y - x);
// const d = c.sort(compare = (x, y) => x.localeCompare(y));

// console.log(b);
// console.log(d);

// const a = [1, 2, 3, 4, 5,[6,7,8],[9,10]];

// const b = a.flat()

// console.log(b); 


const cards = [
    ['id', 'title', 'category', 'price', 'rating', 'image'],
    ["a","title","boni"],
    ["id", "title", "category", "price", "rating", "image"],
]

const result =  [...new Set(cards.flat())];

console.log(result);
