function HashStorageFunc(options) {
    this.options = options;
    this.HashStorage = {};

    //addValue(key,value) — сохраняет указанное значение под указанным ключом; если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано;
    this.addValue = function(key,value) {
        this.HashStorage[key] = value ;
    }
    //getValue(key) — возвращает значение по указанному ключу либо undefined;
    this.getValue = function(key) {
        return this.HashStorage[key];
    }

    //deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    this.deleteValue = function(key) {
        if(this.HashStorage.hasOwnProperty(key)){
            return delete this.HashStorage[key];
        }  
        return false;
    }
    //getKeys() — возвращает массив, состоящий из одних ключей.
    this.getKeys = function() {
        return Object.keys(this.HashStorage)
    }
}

const arr = new HashStorageFunc();
const drinkStorage = new HashStorageFunc();

drinkStorage.addValue('напиток:', 'Маргарита');
drinkStorage.addValue('алкогольный:','да');
console.log(drinkStorage.HashStorage);

arr.addValue("dog","gav");
arr.addValue("cat","meow");
arr.addValue("bird","Fly");
console.log(arr.getValue("cat"));
console.log(arr.deleteValue("bird"));
console.log(arr.getKeys(arr.HashStorage));
