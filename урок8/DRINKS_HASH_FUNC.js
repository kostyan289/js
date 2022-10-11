function HashStorageFunc(options) {
    this.options = options;
    this.HashStorage = [];

    this.has = function(key,value) {
        return this.HashStorage.includes(key,value);
    }
    //addValue(key,value) — сохраняет указанное значение под указанным ключом; если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано;
    this.addValue = function(key,value) {
        if(!this.has(key,value)) {
            this.HashStorage.push(value)
        }
    }
    //getValue(key) — возвращает значение по указанному ключу либо undefined;
    this.getValue = function(HashStorage) {
        var aValue = HashStorage.getItem("dog");
        console.log(aValue)
    }

    //deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    // this.deleteValue = function(value) {
        this.HashStorage = this.HashStorage.filter(item => item !== key)
        
    // }
    this.getKeys = function(user) {
        let keys = Object.keys(user)
        console.log(keys)
    }
}
const user = {
dog: "gav",
cat: "meow",
bird: "fly",
age: 34,
}

const arr = new HashStorageFunc();
arr.addValue("dog","gav-gav")
arr.addValue("dog","gav-gav-gav")
console.log(arr.HashStorage)
console.log(arr.getValue(user))//выводит 
console.log(arr.getKeys(user))//выводит ключи обьекта

