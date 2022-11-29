class HashStorageFunc {
    HashStorage = {};
    constructor(options) {
        this.options = options;
    }

    //addValue(key,value) — сохраняет указанное значение под указанным ключом; если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано;
    AddValue (key,value) {
        this.HashStorage[key] = value ;
    }
    //getValue(key) — возвращает значение по указанному ключу либо undefined;
    GetValue(key) {
        return this.HashStorage[key];
    }
   //deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
   DeleteValue(key) {
    if(this.HashStorage.hasOwnProperty(key)){
        return delete this.HashStorage[key];
    }  
    return false;
    }
    //getKeys() — возвращает массив, состоящий из одних ключей.
    GetKeys() {
        return Object.keys(this.HashStorage)
    }
}

const arr = new HashStorageFunc();
const drinkStorage = new HashStorageFunc();

drinkStorage.AddValue('напиток:', 'Маргарита');
drinkStorage.AddValue('алкогольный:','да');
console.log(drinkStorage.HashStorage);

arr.AddValue("dog","gav");
arr.AddValue("cat","meow");
arr.AddValue("bird","Fly");
console.log(arr.GetValue("cat"));
console.log(arr.DeleteValue("bird"));
console.log(arr.GetKeys(arr.HashStorage));

