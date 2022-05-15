const fruits = {
  name: "grape",
  description: "Popoular and famouse fruit.",
  color: ["purple", "green"],
  isSmall: true,
  order: 1,
  owner: null,
};

console.log(fruits.description);
console.log(fruits.owner || "Jhon Doe");

const keys = Object.keys(fruits);
const values = Object.values(fruits);
const entries = Object.entries(fruits);

console.log(keys);
console.log(values);
console.log(entries);

Object.defineProperty(fruits, "total", {
  value: 1200,
  writable: false,
});
console.log(fruits.total);
fruits.total = 450000; // mode stric tidak bisa dirubah

fruits.price = 56000;

delete fruits.name;
console.log(fruits);
