// ─── Problem 4 ───
// একটা array থেকে duplicate/repeated value গুলো বাদ দিয়ে
// unique array বানাও (Set ছাড়া, push/includes দিয়ে)
let arr3 = [1, 2, 2, 3, 4, 4, 5];
// Expected: [1, 2, 3, 4, 5]

//  modren and new way

// 1. Pass the array into new Set() to remove duplicates
// 2. Wrap it in brackets with ... to turn it back into an array
const uniqueArry = [...new Set(arr3)];
console.log(uniqueArry);

//  old way using .form
const uniqueArr = Array.from(new Set(arr3));
console.log(uniqueArr);
