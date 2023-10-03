// const number = 123;
// const arr = [1, 2, 3, "last element"];
// console.log(arr)

// // length
// console.log(arr.length);

// //index
// console.log(arr[0]);

// // lase element
// console.log(arr.length-1);
// console.log(arr.at(-1));
// console.log(arr.at(-3));

// const arrayFruit = ["apple", "plum", "kivi"];
// const arrayVeg = ["potato", "onion"];
// const bag = [...arrayFruit, ...arrayVeg];
// console.log(bag)

//=========== урок 5
// function имя(параметры) {
//    что делает функция?
//}

// function ShowConsole() {
//     console.log("функция отработала")
// }

// function ShowConsole() {
//     let name = "Marina"
//     console.log(`My name is: ${name}`)
// }
//ShowConsole()

// function ShowConsole(name) {
//    console.log(`My name is: ${name}`)
// }

// ShowConsole("Sasha")
// function ShowConsole(name = "Sasha") {
//     console.log(`My name is: ${name}`)
// }
// ShowConsole()

// ShowConsole(name = "Sasha", age)
// function ShowConsole(name = "Sasha") {
//     console.log(`My name is: ${name}, age: ${age}.`)
// }
// ShowConsole(undefined, 12)


//ShowConsole(age, name ="Sasha")

// function ShowConsole(age, name = "Sasha") {
//     console.log(`My name is: ${name}, age: ${age}`)
// }
// ShowConsole(10)

// function ShowConsole(age) {
//     if (age >= 18) {
//         console.log(`Adult`)
//      return
//     } else {
//         console.log('Not adult')
//     }
// }
// ShowConsole(20)
// ShowConsole(10)

// function ShowConsole(age, ...othersAge) { // rest parameters
//     let sumAge = 0
//     for (const item of othersAge) {
//         sumAge += item    
//     }
//     console.log(`Кол-во общих лет: ${sumAge}`)
//     if (age >= 18) {
//         console.log(`Adult`)
//      return
//     } else {
//         console.log('Not adult')
//     }

// }

// ShowConsole(2, 10, 34, 18, 23, 100)

// function sum(a, b){
//     return a + b
// } 
// const result = sum(20,4)

// showConsole(result)

//https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
// not working 
// let filterString = function(value) {
//     let str = ''
//     for (let i = 0; i < value.length; i++) {
//       if (!Number.isNaN(+value[i])) {
//         str += value[i]
//       }
//     }
//     return Number(str)
//   }

//   console.log(filterString("123"))
//   console.log(filterString("1d2g3h"))
//   console.log(filterString("3342sdf123"))
//   console.log(filterString(""))

//https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
//   function sumMul(n,m){
//     let sums = 0
//     if (m <= n) {
//       return "INVALID"
//     } else {
//       for (let i = 1; i * n < m; i++) {
//          sums += n * i
//       }
//     }
//     return sums  
//   }

//   console.log(sumMul(0, 0))
//   console.log(sumMul(2, 9))
//   console.log(sumMul(2, -7))

  //https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

//   function noBoringZeros(n) {
//     rez = ''
//     n = String(n)
//     // for (let i = n.lenght; i=0; i--) {
//     //     if (n[i] == 0) {
//     //         n.pop()
//     //     } else {
//     //         break
//     //     }
//     // }
//     // for (let i = 0; i < length; i++) {
//     //     if (n[i] == 0) {
//     //         continue
//     //     } else {

//     //     } 
//     // }
//     return Number.n
//   }

// console.log(noBoringZeros(1450))
// console.log(noBoringZeros(9000000))
// console.log(noBoringZeros(0105))
// console.log(noBoringZeros(-790000))
// console.log(noBoringZeros(0))

// https://www.codewars.com/kata/63f96036b15a210058300ca9/train/javascript

// function secondSymbol(s, symbol) {
//   let first = s.indexOf(symbol)
//   let secSymb
//   let newS
//   if (first === -1) {
//     return -1
//   } else {
//     newS = s.slice(first + 1)
//   } 
//   secSymb= newS.indexOf(symbol)
//   if (secSymb === -1) {
//     return -1
//   } else {
//       return secSymb + first + 1 
//   }
// } 

// console.log(secondSymbol('Hello world!!!','o'));
// console.log(secondSymbol('Hello world!!!','l'));
// console.log(secondSymbol('Hello world!!!','A'));
// console.log(secondSymbol('','q'));
// console.log(secondSymbol('Hello','!'));


// function testArray(a, b) {
  
//   let arr = (String(a) + String(b)).split("")
//   let arr2 = arr.reverse().join("")
//   return arr2.concat("Иванов")
// }

// console.log(testArray(4326, 297515))

// var a = "19 October 1909 10:27"
// var b = "28 March 1909 00:59"

// function testDateTime(a, b) {
//   var arr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//   var aa = new Date(Date.parse(a));
//   var bb = new Date(Date.parse(b));
//   var i = ( aa > bb ? aa.getDay() : bb.getDay());
//  return arr[i];
// }

//console.log(testDateTime(a, b))

// var str1 = "qwerty";
// var str2 = "123qwerty456";

// console.log(str2.search( /[7-9]/ ));
// console.log(str2.search( /\d/));
// console.log(str1.search( /[^qwerty]/ ));
// console.log(str1.search( /\W/ ));
// console.log(str1.search( /qwerty/ ));
// console.log(str2.search( /[^qwerty]/ ));
// console.log(str1.search( /\w/ ));
// console.log(str2.search( /qwerty/ ));

// let fruit = {}
// let veget = new Object()

// fruit["name"] = "John"
// fruit["surname"] = "Smith"
// console.log(fruit)

// fruit["name"] = "Frank"
// console.log(fruit)
// console.log(veget)

// function isEmpty(obj) {
//   let counter = 0
//   for (key in obj) {
//     counter++
//   }
//   return counter > 0

// }

// let schedule = {};
// console.log(isEmpty(schedule)) // true

// schedule["8:30"] = "get up"

// console.log(isEmpty(schedule )) // false


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  
  for (key in obj) {
    if (typeof obj[key] == Number) {
       menu[key] = obj[key] * 2 
    } 
  } 
  return menu 
};


console.log(multiplyNumeric(menu))