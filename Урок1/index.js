alert('Hello!');
console.log('Hello');
console.log('Hello console.log');
var a = 'var a';
console.log(a);
a = 'apple';
console.log(a);
var btrue = true;
var bfalse = false;
var user =  { name: 'Jhon'};
var arr = [1, 2];
console.log(btrue,bfalse,user,arr);
for(let index = 25;; index +=1 ){ 
    console.log(index)
    if(index % 17 ===0) {
        console.log('Нашли число' + index);
        break
    }
}