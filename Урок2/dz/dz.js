let fail1 = "Вы ввели неправильно Имя"
let fail  = "Вы ввели неправильно Фамилию"
let fail2 = "Вы ввели неправильно Отчество"

        do{
        var Fam = prompt('Введите ваше Фамилию:');
        if (Fam.length <= 2) {
                alert(fail)}
        } while (Fam.length < 3) ;

        do{
        var Name = prompt('Введите ваше Имя:');
        if (Name.length <= 2){
                alert(fail1)}
        } while (Name.length < 3) ;

        do{
        var Patronymic = prompt('Введите ваше Отчество:');
          if (Patronymic.length <= 2){
                alert(fail2)}     
        } while (Patronymic.length < 3) ;   
        
        var Pol = confirm('Ваш пол Мужской?'); 
        do {
                do{
                        var AgeStr = prompt('Ваш возраст в годах:');
                        Age = parseInt(AgeStr);
                        if (Age < 18 || Age > 100){
                                alert("Вы ввели неправильно возвраст")}     
                        } while (Age < 18 || Age > 100) ;
        }while (isNaN(Age))

        let retried = "Нет";
        if (Pol && Age > 65){
                retried = "Да"
        }
        if (!Pol && Age > 58){
                retried = "Да"
        }

           alert(`
           Ваше ФИО:${Fam}  ${Name} ${Patronymic} 
           Ваш Возраст в годах:  ${Age} 
           Ваш Возраст в Днях: ${Age * 365} 
           через 5 лет вам будет: ${(Age + 5) * 365}  
           Ваш пол: ${Pol === true? 'мужской':'женский'} 
           Вы на пенсии: ${ retried } 
           `); 