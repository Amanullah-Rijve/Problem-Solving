// ─── Problem 2 ───
// একটা array থেকে সবচেয়ে বড় সংখ্যা বের করো (Math.max ছাড়া, loop দিয়ে)
let arr2 = [5, 12, 8, 45, 3];
// Expected: 45

// deafult is the first element
let max=arr2[0]; 

for(const num of arr2){
    //  if number is bigger than initial element
   if(num > max){
        max=num;
   }
}
console.log(max);
