const Str = prompt('Введите слово или предложение');
alert(`количество русских гласных букв в вашем предложении = ${vowel_count(Str)}`)

function vowel_count(str1) {
    const vowel_list = 'ауоиэыяюеёАУОИЭЫЯЮЕЁ';
    let vcount = 0;

    for(let x = 0; x < str1.length ; x++) {
      if (vowel_list.indexOf(str1[x]) !== -1) {
        vcount += 1;
      }
    }
    return vcount;
  }
