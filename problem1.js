// ─── Problem 1 ───
// একটা array এর সব সংখ্যার যোগফল বের করো
let arr1 = [10, 20, 30, 40];
// Expected: 100

let sum = 0;

for(const num of arr1){
    sum +=num;
}
console.log(sum);
