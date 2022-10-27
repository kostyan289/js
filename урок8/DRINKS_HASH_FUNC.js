function HashStorageFunc(options) {
    this.options = options;
    this.HashStorage = {};

    this.addValue = function(key,value) {
        this.HashStorage[key] = value  
    }
    //getValue(key) — возвращает значение по указанному ключу либо undefined;
    // this.getValue = function(key,value) {
    //     return this.HashStorage.includes(key,value);
    // }

    //deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    // this.deleteValue = function(value) {
        // this.HashStorage = this.HashStorage.filter(item => item !== key)
        
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
console.log(arr.addValue("dog","gav"))
console.log(arr.addValue("cat","meow"))
console.log(arr.HashStorage)


// console.log(arr.getValue(user))//выводит 
// console.log(arr.getKeys(arr.HashStorage))//выводит ключи обьекта

