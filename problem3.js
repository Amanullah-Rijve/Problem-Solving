// ─── Problem 3 ───
// একটা string এর মধ্যে কতগুলো vowel (a,e,i,o,u) আছে বের করো
let str1 = "backend developer";
// Expected: 5

// using regular expresion
const vowels = str1.match(/[aeiou]/gi);

console.log(vowels);
