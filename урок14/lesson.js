//callback-функция (err, data) => {}
setTimeout(() => {
console.log("inside setTaimaut")
}, 1000);

setTimeout(() => {
console.log("inside setTaimaut")
}, 5000)

//settimeout 0 - выполнение функции будет происходить в конце .

setTimeout1(() => {
    console.log("inside setTaimaut" ,{result})
    const result = Math.random()
   
    setTimeout2(() => {
    console.log("inside setTaimaut", {result, result1})
    const result1 = Math.random()
   
    setTimeout3(() => {
        console.log("inside setTaimaut", {result, result1, result2})
        const result2 = Math.random()

        }, 8000);
    }, 5000);
}, 1000);

function someCaic(arg1, calback) {
    try {
        setTimeout(() => {
            console.log("inside setTaimaut")
            calback(null, [arg1]);
            }, 1000);
    } catch (err){
        calback(err)
    }  
}

function someFunc(arg2, calback) {
    try {
        someCalc(arg2, (err, data) => callback(err, [arg2, ...data]));
    } catch (err){
        calback(err)
    }  
}

someFunc('calcStart', (err, data) => console.log({err, data}));

//Promises

Promise.resolve().then(() => console.log('inside promises'));

Promise
// .resolve()
.reject('Some reason')
.then(() => {
    console.log('inside promises')
    return Math.random()
})
.then((random) =>{
    console.log('inside promises', random)
    throw new Error('error');
    return [random, Math.random()] 
})
.then((randoms) =>{
    console.log('inside promises', randoms)
    return Math.random()
})
.catch((err) => {
    console.log('err',err)
});

const prom2 = new Promise((resolve, reject) => resolve()).then(() => {
    console.log('inside promis');
});
console.log(prom2)









