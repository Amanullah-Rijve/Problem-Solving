let products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 3 }
];

// Expected: "Out of stock: Mouse"

let isStock = true
let name = ""

for(product of products){
  if(product.stock <=0){
    isStock = false
    name = product.name
    break;
  }
}

if(isStock){
  console.log("In stock")
}else{
    console.log("Out of Stock: " + name)
}
