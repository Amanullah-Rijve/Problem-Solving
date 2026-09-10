let students = [
  { name: "Rakib", cgpa: 3.5 },
  { name: "Sadia", cgpa: 3.95 },
  { name: "Tanvir", cgpa: 3.2 }
];

// students array থেকে check করো
// কোনো student এর cgpa 3.9 এর বেশি আছে কিনা
// থাকলে "Topper exists" print করো, তার নামসহ
// না থাকলে "No topper" print করো

// Expected output: "Topper exists: Sadia"
let isTopper = false;
let toppername ='';

for(let student of students){
  if(student['cgpa']>3.9){
  isTopper = true;
    toppername = student['name']
  break;
}}

if(isTopper){
  console.log(`Topper exsist: ${toppername}`)
}else{
  console.log('tooper not found')
}
