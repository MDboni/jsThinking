
// const obj = {
//     zhangsan: { name: 'zhangsan', age: 20 },
//     "a b": { name: 'lisi', age: 30 }
// };

// console.log(obj.zhangsan); // { name: 'zhangsan', age: 20 }
// // console.log(obj["a b"]); // { name: 'lisi', age: 30 }

// const obj = {};

// obj.zhangsan = { name: 'zhangsan', age: 20 };
// obj["a b"] = { name: 'lisi', age: 30 };

// console.log(obj); // { name: 'zhangsan', age: 20 }


// forEach holo javascript ayer arrya method akbar korey chalye 

// const numbers = [10, 20, 30];

// numbers.forEach((number) => {
//   console.log(number);
// });


// const name = ["boni","amin","jayed"]

// name.forEach((n, i)=>{
//     console.log(i,n);
// })


//////////////////////////////////

// const newMap = new Map();

// newMap.set({ name: 'zhangsan', age: 20 });
// newMap.set({ name: 'lisi', age: 30 });

// newMap.forEach((value, key) => {
//     console.log(key, value);
// })

// const admins = [
//   { user_id: 10, name: "Jahid" },
//   { user_id: 20, name: "Boni" },
// ];

// const adminMap = new Map();

// admins.forEach((admin) => {
//   adminMap.set(admin.user_id, admin.name);
// });

// console.log(adminMap); // Map(2) { 10 => undefined, 20 => undefined }


const admins=[
    {user_id:10,name:"Jahid"},
    {user_id:20,name:"Boni"},
    {user_id:30,name:"Jayed"}
]

const a=admins.find(item =>item.user_id === 20) // {user_id:20,name:"Boni"}

console.log(a);

const newMap = new Map();

admins.forEach((admin) => {
    newMap.set(admin.user_id, admin.name);
})

console.log(newMap.get(20)); // Map(3) { 10 => 'Jahid', 20 => 'Boni', 30 => 'Jayed' }
