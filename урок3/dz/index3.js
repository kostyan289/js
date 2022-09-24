//"use strict" почему с ним выбивает ошибку ? 
do{
var Str = prompt('Введите число n');
Numb = parseInt(Str);
}while (isNaN(Numb));

function fib(n){

        if(n===0){
            return 0
        }
        if(n===1){
            return 0
        }
        if(n===2){
            return 1
        }
        if(n > 30){
            return "Возможно произойдет зависание введите число n < 30"
        }
        else{  

            return ((fib(n-1) + fib(n-2) + fib(n-3) + 1)); 
        }
        
    }
    console.log('F(n) =',fib(Numb))
    alert(`F(${Str}) = ${fib(Numb)}`); 

