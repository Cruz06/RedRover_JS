// Objects
// ======== Compare arrais=============
//=======incorrect ==, ===
// let arr = [1, 2];
// let arr1 = [1, 2];

// console.log(arr == arr1);
// console.log(arr.length == arr1.length);
// console.log(arr < arr1);
// console.log(arr > arr1);

// const a = [1, 2, 3]
// const b = [1, 2, 3]

// const a1 = [1, 2, 7]
// const b1 = [1, 2, 6]

// // ======correct var1
// let newstr1 = JSON.stringify(a1);
// console.log(JSON.stringify(a1), typeof newstr1, newstr1.length);
// console.log(JSON.stringify(a1) === JSON.stringify(b1), typeof newstr1, newstr1.length);

// // ========correct var2
// let newstr2 = a.toString();
// console.log(a.toString(), typeof newstr2, newstr2.length);
// console.log(b.toString() == String(b));

// // ========correct var3
// let newstr3 = String(a);
// console.log(String(a), typeof newstr3, newstr3.length);
// console.log(String(a) == String(b));

// если в массиве есть пустые элементы, он их не считает при сравнении и длине
// запятые может считать в отдельных методах. надо проверять

// ===== with loop===

//========== Objects===============
// All Javascripts values, except primites, are Objects
// (some are ... if was declared with new keyword)

// ========= examples:
// {key : values, } 

// const person = {
//     name : "Ivan",
//     surname : "Petrov",
//     age : 33,
//     job : "QA engineer",
//     isAdmin : false

// }

// let person4= [["name", "Olya"], ["age", 22]]
// person4[0][1]
// person4.age
// // можно комбинировать варианты
// const person2 = {}
// console.log(person2['personalInfo']['fullName']['lastName'])
// console.log(person2['personalInfo']['fullName'].lastName)
// console.log(person2.personalInfo.fullName.lastName)
// // dot notation

// const arr = [1]
// console.log(typeof arr)

// // ========= Объявление объекта ============
// //let obj = new Object();
// //let user = {};

// let obj = {
//     name : "Bob",
//     age : 21,
//     isAdult : true,
//     salary : undefined,
//     4: null,
//     address : [],
//     myObj : {},         // запятая после последнего не обязательна, но хороша
// };

// // =========
// // ключ может состоять из нескольких слов, но тогда - каычки

// let user = new Object()
// let user1 = {
//     name : "John",
//     age : 20,
//     "high school" : true,
// }

// console.log("original user", user1)

// // value of age & name was changed
// user1.age = 25
// user1.name = "Bill"
// console.log("modified user", user1)
// // console.log(user1[null]) 
// // console.log(user1[0])

// // ========= добавить свойство======
// user1.address = {                // несколько сразу
//     city : 'SF',
//     state : 'CA',
//     country : 'USA',

// }

// user1['hello'] = 'Hi'
// console.log("added new key - address and hello,  user", user1)
// console.log(user1.state)            // wrong
// console.log(user1.address.state)    // correct

// //===== delete
// delete user1.address.country;
// console.log("deleted country,  user", user1)

//========= обращение к свойству==========

// для обращения к свойству используется запись "через точку": person.name 
// или через [] : person['name'], person['age']

// ========= выведение значения =========
// const person3 = {
//     age: 30,
//     "likes cats": true,
//     name: "Joey",
// };

// =========выведение значения====
// console.log(person3.name);
// console.log(person3["age"])

//======== добавление свойства ==========

// const obj = {}
// console.log(obj)

// obj.name = "Jess"
// obj["age"] = 55
// console.log(obj)

// obj['likes read'] = true    // через скобки
// obj.age = 20
// console.log(obj)

// let carModel = "car"    // через переменную should be string
// let model = 'Honda'
// obj[carModel] = model   // здесь ключ переменная
// console.log(obj)

// obj['carModel'] = 'Toyota'  // здесь ключ строка
// console.log(obj)


// ========== изменение свойств (property)==========
// obj.name = 'Bill'
// obj['likes read'] = false
// obj[carModel] = 5

// console.log(obj)

//=== создание объекта с использованием переменной===

// let item = 'book'   // чтобы можно было использовать, объявлять вне объекта, глобально
// let age = 17
// const user = {
//     [item] : item,    // здесь ключ через переменнуюб м.б. я не знаю заранее что будет
//     age : age,
// };
// console.log(user);
// // как потом к нему обратиться? ведь не знаем имени
// user[item] = 'doll'     // только через скобки: переменная в скобках должна быть
// console.log(user)

//======= обращение к свойствам объекта=======

// let arr = [1, 3, 5, 7]
// const customers = [
//     {
//         id: '01',
//         personalInfo: {
//             name: {first: "John", last: "Dow"}, }, },
//     {
//         id: '02',
//         personalInfo: {        
//             name: {
//                 first: "Jane",
//                 last: "Dow",
//             },
//             dob: '01/01/1990',
//             "contactInfo": {
//                 phone: '+1234567788',
//                 email: [3, 7, [4, 8]],
//                 address: null,
//             },
//         },
//         purcashes: [{two: 2}, 6, 3],
//     }];
//  // многоуровневый объект 

// // 1. Свойства 1-го уровня array elements
// console.log(customers.length);
// console.log(customers[0]);
// console.log(customers[1]);
// console.log(customers[2]);

// // 2. Свойтсва 2-го уровня - from array to object
// console.log(customers[0].id);
// console.log(customers[0]['id']);

// // 3. Свойства 3-го уровня 
// console.log(customers[1].personalInfo.name);
// console.log(customers[1].personalInfo['dob']);
// console.log(customers[1]['personalInfo']['dob']);

// // 4. Свойства 4-го уровня 
// console.log(customers[1].personalInfo.name.first);
// console.log(customers[1].personalInfo.contactInfo.email);
// console.log(customers[1]['personalInfo']['contactInfo']['email'][1]);

//========== проверка существования свойств ===============
//========= проверка с undefined
// отличие языка в том, что можно обратиться к любому элементу объекта, даже к несуществующему
// ошибки не будет !!!! вернет undefined

// let user = { newKey: 'My Key',};
// console.log(user)
// console.log(user.newKey)
// console.log(user.age)
// console.log(user.name === undefined); //true означает "не существует"

// console.log(user.name !== undefined); // проверка

// ============= через оператор  in check the key =========

// let obj = {
//     firstName: "Sofia",
//     lastName: "I.",
//     age: 35,
//     language: "Java",
//     newKey: undefined,
//     9: false,
//     job: {
//         name1: "Olga",
//         newObj: {age1: 23}
//     },
// };

// console.log("firstName" in obj);
// console.log("first" in obj);
// console.log(undefined in obj);
// console.log('age1' in obj.job.newObj); // can't check by value

// console.log(obj.newKey === undefined);  // содержит undefined

//========== examples====

// let userInfo = {
//     name: 'Anna',
//     age: 30,
//     address: {
//         city: 'Boston',
//         street: 'Rose Dr.',
//     }
// }

// // // operator in
// if ('name' in userInfo) {       // check if key 'name' is in object
//     console.log(userInfo.name)
// }

// console.log(userInfo.address.street)
// // опциональная цепочка
// console.log(userInfo?.address?.street)

// ========== обращение, добавленное на примере
// let obj = {
//     name : "John",
//     age : 30,
//     isAdmin : true,
// };

// for (let key in obj) {
//     // by keys - по ключам
//     console.log(key)    // name, age, isAdmin


// // значения ключей
// console.log(obj[key]); // John, 30, true / arr[i]
// console.log(key + ": " + obj[key]);
// }

// // count salaries
// let salaries = {
//     John : 100,
//     Ann : 160,
//     Pete : 130,

// }

// let sum = 0
// for (let key in salaries) {
//     sum += salaries[key]
// }
// console.log(sum)    // 390

// let obj = {
//     width : 200,
//     height: 300,
//     title : "My menu",
// };

// function multiplyNumeric(obj) {
//     let res = 0;
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             res += obj[key] * 2;
//         }
//     }
//     return res;
// }
// console.log(multiplyNumeric(obj));
// let obj = {
//         firstName: "Sofia",
//         lastName: "I.",
//         age: 35,
//         language: "Java",
//         newKey: undefined,
//         9: false,
//         job: {
//             name1: "Olga",
//             newObj: {age1: 23}
//         },
//     };

// ======== перебор значений в цикле
// for (let i in Object.values(obj.job)) {
//     console.log(i)
// }

// =======методы объектов

//Objects.keys(obj)       // возвращает массив ключей
//Objects.values(obj)     // возвращает массив знаечний
//Objects.entries(obj)    // // возвращает массив пар [ключ, значение]

// Объект может содержать методы

// this - ключевое слово, зависит от контекста вызова. Связано с объектом
// может ссылаться на любое свойство объекта. Подстраивается под актуальный объект 
// let obj = {
//     firstName: "Sofia",
//     lastName: "I.",
//     age: 35,
//     language: "Java",
//     sayHello : function() {
//         console.log(`Hello, ${this.firstName}`)
//     },
//     newKey: undefined,
//     9: false,
//     job: {
//         name1: "Olga",
//         newObj: {age1: 23}
//     },
// };

// obj.sayHello();

// ============ копировать объект ====
// const newObj = obj;

// console.log(newObj)
// newObj.name = "Sasha"
// console.log(newObj)
// console.log(obj)

function sayHi() {
    console.log(this.name);
}

const newUser = {
    name: "Petr",
    age: 25,
}

newUser.welcome = sayHi
newUser.welcome()

console.log(this)   // в консоли получаем глобал, в браузере - объект Windiw
// т.е. обращение к верхнему уровню видимости переменных 
