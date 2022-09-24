function randomInt(n) {
    return Math.trunc(n * Math.random());
}
const colors = ['красный', 'оранжевый', 'желтый', 'зеленый', 'голубой', 'синий', 'фиолетовый']

// function mood(numbersOfColors) {
//     let result = [];
//     for (let index = 0; index < numbersOfColors; index += 1 ){
//         const colorsIndex = randomInt(colors.length);
//         const targetColors = colors[colorIndex];
//         result.push(targetColors);
//     }   
//     if (result.length === [...new Set(result)].length) {
//         return result
//     }
//     else {
//         return  mood(numbersOfColors)
//     }
// }

// function mood(numbersOfColors) {
//     let result = [];
//     while (result.length !== numbersOfColors) {
//         let randomColor = color[randomInt(colors.lengts)];
//         if (!result.includes(randomColor)) {
//             result.push(randomColor); 
//         }
//     }
//     return result;
// }

function mood(numbersOfColors) {
    let result = {};
    while (Object.keys(result).length < numbersOfColors) {
        let randomColor = colors[randomInt(colors.length)];
        if (!result[randomColor]) {
            result[randomColor] = randomColor; 
        }
    }
    return Object.keys(result);
}

console.log(mood(3));
console.log(mood(3));
console.log(mood(3));


