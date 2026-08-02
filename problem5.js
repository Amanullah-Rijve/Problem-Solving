// ─── Problem 5 ───
// products array থেকে যাদের stock 0, শুধু তাদের name বের করো
let products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 0 },
  { name: "Monitor", stock: 3 }
];
// Expected: ["Mouse", "Keyboard"]

const product = products.filter(p => p.stock ===0).map(p => p.name)
console.log(product);
