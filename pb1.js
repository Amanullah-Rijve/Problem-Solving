
// Problem
// students array থেকে গুনে বের করো
// কতজন student এর cgpa 3.5 এর বেশি
// শুধু সংখ্যা (count) print করবে

let students = [
  { name: "Rakib", cgpa: 3.6 },
  { name: "Sadia", cgpa: 3.9 },
  { name: "Tanvir", cgpa: 3.2 },
  { name: "Nadia", cgpa: 3.7 }
];

// Expected output: 3

let totalCount = 0

for(let student of students){
  if(student.cgpa >=3.5){
    totalCount++
  }
}
 console.log(totalCount)


// Output: 3 
