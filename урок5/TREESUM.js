
let arrays = [[ 5, 7,     [ 4, [2], 8, [1,3], 2 ],     [ 9, [] ],     1, 8]];

function convertToSimpleArray(array){
let res=[];
for (let i=0; i<array.length; i++)
if (!Array.isArray(array[i]))
   res.push(array[i]);
else
   res=res.concat(convertToSimpleArray(array[i]));
return res.reduce((sum, item) => sum + item, 0)
}
//Лучше через flat

