// products array থেকে গুনে বের করো
// কতগুলো product এর stock 10 এর কম
// শুধু সংখ্যা (count) print করবে

let products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 50 },
  { name: "Keyboard", stock: 8 },
  { name: "Monitor", stock: 3 },
  { name: "Charger", stock: 20 }
];

// Expected output: 3

totalCount = 0

for(let product of products){
  if(product.stock<10){
    totalCount++
  }
}
console.log("Total Count:", totalCount)
