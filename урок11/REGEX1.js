const str = "The metal stitching process was developed in the late 1930s (20221001) as an option for repairing cast iron components and equipment on the Texas oil fields +478-244-7173. The process was developed to provide a permanent, stress-free repair and utilized when the use of heat or open flame was limited or not allowed (700) 836-5488, 2022-10-01. At 01102022 Four men have been credited with the development of this new metal locking technique: Lawrence B. Scott, Fred Lewis, Earl Reynolds and Hal W. Harman (896) 740-1447. However, it was Hal Harman who initially invented the metal stitching technique, and he filed for a patent to the technique in the 7th of August, 1937. (604-420-4361). In 1938 L.B. Scott was officially (510) 312-6087 credited with the invention of the Metalock 100.000 variation of metal stitching, whilst he was still working for Harman 816-645-7144. Scott was given patent rights to the repair technique and materials used +824-569-0441.";

const reg = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/ig;

let result = Array.from(str.matchAll(reg));
let result1 = str.match(reg)
console.log(result);
console.log(result1);




