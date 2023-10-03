// let ticketAmount = 55;
// let price = 2;
// let totalPrice = ticketAmount * price;
// letKids = !true;  // 0, NaN, Null, undefined, "", !true, false

// if (ticketAmount >= 10 && ticketAmount < 20){
//     console.log(totalPrice * 0.9)
// } else if (ticketAmount >= 20 && ticketAmount < 50){
//     console.log(totalPrice * 0.9)
// } else if (ticketAmount >= 50 && ticketAmount < 100){
//     console.log(totalPrice * 0.8)
// } else if (ticketAmount >= 100){
//     console.log(totalPrice * 0.7)
// } else {
//     console.log(totalPrice)
// }



// for (let i = 2; i <= 10; i = i + 2) {
//     console.log(i)
// }

// let endNum = 20

// for (let i = 2; i <= endNum; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }   

// let MyArr =[3, 5, 10, 6, 8, 9, 4, 6, 22, -4, "4", "ree"]
// for (let i = 0; i < MyArr.length; i++) {
//     if (MyArr[i] % 2 === 0 && MyArr[i] >= 0 && MyArr[i] <= 10) {
//         console.log(i, " = ", MyArr[i])
//     }
// }


// var stroka = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
// var new_stroka = '';
// //new_stroka = stroka.replace(/br/g, "");
// new_stroka = stroka.replaceAll("br","");
// console.log(new_stroka);

// let sumMix = [9, 3, '7', '3']
// //let sumMix = ['5', '0', 9, 3, 2, 1, '9', 6, 7]
// // let sumMix = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']
// let sumArr = 0
//   for (let i = 0; i <= sumMix.length; i++) {
//     //console.log(sumMix[i] * 1)
//     console.log(typeof(sumMix[i] * 1))
//     console.log(sumArr)
//     sumArr = sumArr + (sumMix[i] * 1)
//   }
//   //return sumArr
//   console.log(sumArr)

// coding
// const text1 = 'Это надо зашифровать обязательно! И пусть разгадывают 241 день, я подожду. Сейчас 2023 год: 21 век. '
// const text2 = 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32. Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.'
// let newStr = ""
// let shift2
// let calculatedShift
// const shiftStep = 3 
// // shift will be changed every 50 symbols to prevent forced decoding

// for (let i = 0; i <=text2.length; i++) {
//     calculatedShift = (shiftStep - shiftStep % 50) / 50
//     // shift will be changed every 50 symbols to prevent forced decoding
//     shift2 =  (shiftStep + calculatedShift) % 255
//     // nr of symbols in table ASCII = 255
//     newStr = newStr + String.fromCharCode(text2.charCodeAt(i) + shift2)
//     }

// console.log(newStr + "\n")
// console.log("invers" + "\n")

// // decoding 
// let invStr = ""
// for (let i = 0; i <=newStr.length; i++) {
//     calculatedShift = (shiftStep - shiftStep % 50) / 50
//     // shift will be changed every 50 symbols to prevent forced decoding
//     shift2 =  (shiftStep + calculatedShift) % 255
//     // nr of symbols in table ASCII = 255
//     invStr = invStr + String.fromCharCode(newStr.charCodeAt(i) - shift2)
//     }

// console.log(invStr)

const length = 14
const minimum = 0
const maximum = 2
let rez = ""
let rez0 = ""
// compose a string from min to max
for (let i = minimum; i <= maximum; i++) {
    rez0 += String(i)
}
for (let i = maximum - 1; i >= minimum; i--) {
    rez0 += String(i)
}
// add string from above as much times as necessary
if (length <= rez0.length) {
    rez = rez0.slice(0, length)
} else {
    rez = rez0
    rez0 = rez0.slice(1, length-1)
    for (let t = (rez0.length % length - length); t <= (rez0.length % length - length); t++) {
        rez += rez0
    }
    rez += rez0.slice(0, rez0.length % length)
}
console.log(rez)
console.log(rez.length)
