//     function generateIncreasingCounter(number=0){
//         let count = number 
//         return function(n=1){
//             count += n
//             return count
//         }
//      }
//     function generateDecreasingCounter(number=0){
//          let count = number 
//          return function(n=1){
//             count -= n
//             return count
//           }
//       }
// const increase = generateIncreasingCounter(100);
// console.log(increase()); // 101
// console.log(increase()); // 102                
// console.log(increase(5)); // 107
// console.log(increase(10)); // 117
// console.log("------------------")
// const decrease = generateDecreasingCounter(100);
// console.log(decrease()); // 99
// console.log(decrease()); // 98
// console.log(decrease(5)); // 93
// console.log(decrease(10)); // 83


function generateCounter(type, number){
    let count = number 
    switch(type){
        case "increase" :
             return function(n=1){
             count += n
             return count
            }
        case "decrease":
            return function(n=1){
            count -= n
            return count
           }
    }
} 

const increase = generateCounter("increase",100);
console.log(increase()); // 101
console.log(increase()); // 102                
console.log("------------------")
const decrease = generateCounter("decrease",100);
console.log(decrease()); // 99
console.log(decrease()); // 98
