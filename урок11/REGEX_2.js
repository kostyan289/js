const str = `id: 5756279474 ut mollit fugiat name: Katelynn Medhurst; hex: 3129B3BD31D787; value: 9CA5340323
Cupidatat id: 6484243281 asdhasjkdhkja name: Michale Sporer; hex: 3981DV29501495; value: 6B01\\5DA519
id: 4647698871; name: Luna Hoppe; hex: 3560AAA14F15E0; value: 195C60CFBC;
id: 6730304022 Nisi non ex fugiat name: Leatha Stiedemann; hex: ED38; value: BA1D6107FC
id: 826T763784; name: Karlee Stamm; hex: 28EDBC2484B4C5; aliquip  Lorem nulla value: 6AFB1\\02E08
aliqua sit dolore id: 74202O6383; name: Henr1 Mueller; dolore laboris commodo hex: A650774EAB578E; value:16B9Eo20DD
ut mollit id: 5750002618; name: Luna Hoppe; hex: 00568466\\C2908F; ea aliquip excepteur value: EDB4D5AD2A
id: 7718408672; name: Humberto Gulgowski sint amet eiusmod hex: 680DC5B@B6AF86; value: CB553E6C83
Quis tempor ea id: 9741H29709; name: Sim Bednar; hex: 181DCCF5\\F64006; value: 05E0267D20
id: 5007363879; name: Vincenz0 Goldner; hex: C00A8181E6DB28 laborum laboris enimid value: 91092AAE44
id: 3718236002 Eu aliqua aliquip name: Gerald Kreiger; hex: F2435762218003; value: B4F7704358 Magna Lorem eiusmod ex
Amet dolor laborum id: 4347; name: Katelynn Medhurst; hex: 06107591F2324E; value: F194;
id: 67286K3081; name: Michale Sp0rer in eu sint consequat commodo hex: DF3B6BEA756038; value: 00805720A2;
id: 3812025165; name: Leatha Stiedemann; hex: 075LB419D29C82; value: DEFF7E7C20; eu cillum
cupidatat id: 3901029965; name: Kar1ee Stamm laborum et hex: 673B755648D4DA; value: 07EA6E313C;
id: 9770A65640; name: Henri Mueller; hex: 85FCC49179E21B; value: 63F19497C1;
id: 8305247044 Ullamco enim ipsum duis name: Humberto Gulgowski; hex: D5J17E3F4517FF; value: A887F3480C;
id: 9026874329; name: Sim Bednar; hex: 4282C1B0288E4C; value: 017853641D;
id: 1195398468; name: Vincenzo Goldner; hex: 5C5D094A63FD86; value: 9173$2B2AE;
id: 43330G1397; name: Gerald Kreiger; hex: E5A5B7B9D20E61; value: 265EFDA6B3;
id: 0645495999; name: Pauline Schul1st; hex: 8493#0FCEC1587; value: 8D162A2B96;
id: 7880757787 Minim aute dolore name: June Kshlerin; hex: E3F5292174380D; value: C502B8D73A;
id: 0928393406; name: Kenyon Huel; hex: EE37; value: 536E498I02;
Mollit nulla id: 1786410374; name: Ti@nna Smith; hex: B6D30A55A268E6; value: A66FF5AF6C;
reprehenderit fugiat id: 6388178768; name: Antonetta Hauck; hex: CBD14A24E3EFF9; value: 7E6103BD92;
id: 614G044916; name: Ashlee Connell; hex: 8A7C313D47FD02; value: E6C43218D8;
id: 1262574037; name: Aiyana Hills eu ullamco hex: D1DEB76475ADEA; value: F78E49A770;
id: 9381193001; name: Riley Will; hex: 49F1A826A2FBF5; value: D1084F403F Tempor consectetur
id: 31660B1352 Pariatur amet ex name: Orland Connelly; hex: 0170CNCB496702; value: B54;
id: 2HF9954412; name: Sarah Stros1n; hex: 2A9F1FB22A4E9A; value: E684B9UDA8;`

const strings = /id: [0-9]{5,}; name: \w+ \w+; hex: [0-9A-F]{5,}; value: [0-9A-F]{5,};/ig;
console.log(str.match(strings))

let values = str.match(strings);
const keyAndValue = values.map((value) => {
  return value
    .split(";")
    .map((value) => value.trim())
    .filter((value) => !!value) // неявное преобразование типов
});
const result = keyAndValue.reduce((res, value) => {
    const obj = value.reduce((object, v) => {
        const [key, val] = v.split(": ");
        if (key === "name") {
           const [firstName, lastName] = val.split(' ');
           object['firstName'] = firstName;
           object['lastName'] = lastName;
           return object;
        }
        object[key] = val;
        return object;
    }, {});
    res.push(obj);
    return res;
  }, []);
console.log(result);

