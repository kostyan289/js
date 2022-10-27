//Калькулятор
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const userString = prompt('Enter you expresion');
let result = null;

if (userString) {
    if (userString.includes('+')){
        const [a, b] = userString.split('+');
        result = add(parseInt(a), parseInt(b));
    } else if (userString.includes('-')){
        const [a, b] = userString.split('-');
        result = sub(parseInt(a), parseInt(b));
    } else if (userString.includes('*')){
        const [a, b] = userString.split('*');
        result = mul(parseInt(a), parseInt(b));
    } else if (userString.includes('/')){
        const [a, b] = userString.split('/');
        result = div(parseInt(a), parseInt(b));
    }    
}

if (result === null) {
    alert('unknow operation');
} else {
    alert(`result : ${result}`);
}





