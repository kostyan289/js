
class HashStorageFunc {
    HashStorage = [];
    constructor(options) {
        this.options = options;
    }

    // —  последовательно спрашивает название книги, автора, кол-во страниц; к веддёным данным добавляет новое поле id = номеру книги; сохраняет информацию о книге в хранилище. Обновляет графический элемент на html-странице, добавляя туда новые данные о книге.
    Add() {
        const name = prompt("Введите название книги");
        const name1 = prompt("Введите автора этой книги");
        const name2 = prompt("Введите колличство страниц");
        const storage = {id : [name,name1,name2]};
        console.log(storage)
        // this.Hashstorage.push(storage);
        // console.log(HashStorage)
    }

    // — спрашивает id книги и удаляет её из хранилища (если она там есть) с выдачей соответствующего сообщения в информационное окно. Обновляет html-элемент, убирая данные о книге со страницы
    Del(key) {
        if(this.HashStorage.hasOwnProperty(key)){
            return delete this.HashStorage[key];
        }  
        return false;
    }
    
    // — спрашивает id книги и если она есть в хранилище - просит ввести обновить данные об названии книги, авторе или кол-ве страниц. Так же обновляет html по завершению работы
    Update(key) {
        return this.HashStorage[key];
    }


}
const arr = new HashStorageFunc();
arr.Add()
arr.Add()


