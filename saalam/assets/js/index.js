// let a=1
// for (let i = 0; i < 1000; i++) {
//     if (i % a===0) {
//         console.log(i);
//     }
    
// }

// let numbers = [3,5,2,8,1]
// for (let i = 0; i < numbers.length; i++) {
//    if(numbers[i] % 2 ==1 ){
//     console.log(numbers[i]);
//    }
    
// }







// let numbers=[3,5,2,8,1]
// for (let i = 0; i< numbers.length; i++) {
//         if(numbers[i] % 2==0)
//         console.log(numbers[i] / 2);
//     }



// var students = [
//     { id: 1, name: "Ali", surname: "Alisoy", age: 20, grade: 95 },
//     { id: 2, name: "Vusala", surname: "Nabiyeva", age: 34, grade: 77 },
//     { id: 3, name: "Aliya", surname: "Gurbanzade", age: 14, grade: 98 },
//     { id: 4, name: "Sabir", surname: "Nuruyev", age: 15, grade: 54 },
//     { id: 5, name: "Mehman", surname: "Heydarov", age: 22, grade: 100 },
//     { id: 6, name: "Sevana", surname: "Mammadli", age: 41, grade: 35 },
//     { id: 7, name: "Ilham", surname: "Babayev", age: 24, grade: 95 },
//     { id: 8, name: "Namiq", surname: "Gulahmedov", age: 20, grade: 95 },
//     { id: 9, name: "Aygun", surname: "Kazimova", age: 24, grade: 100 },
//   ];
  
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].age <20) {
//         console.log(students[i].name, students[i].surname);
        
//     }
    
    
//   }



const arr = [2, 4, 5, 9, 1];
let small = 0; 

for (let i = 1; i < arr.length; i++) {
  if (arr[i] <= small) {
    small = arr[i]; 
  }
}

console.log(small);









