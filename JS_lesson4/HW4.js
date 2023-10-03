// 2. Нарисуйте елочку

// height = 5
// for (var i = 0; i < height; i++) {
//     // 2n+1 stars per row i.e. 1, 3, 5, 7, ...
//     var stars = '*'.repeat(2 * i + 1);
//     var spacesBefore = ' '.repeat(height - i - 1);
//     console.log(spacesBefore + stars);
// }
 

// 3. Нарисуйте треугольник*

// тупое решение
// let nums_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// console.log(nums_list[0])
// console.log(nums_list[1], nums_list[5])
// console.log(nums_list[2], nums_list[6], nums_list[9])
// console.log(nums_list[3], nums_list[7], nums_list[10], nums_list[12])
// console.log(nums_list[4], nums_list[8], nums_list[11], nums_list[13], nums_list[14])

// другое решение - no
// let lastRow = 5 
// for (let i = 1; i <= lastRow; i++) {
//     let stroka = String(i)

//     for (let j = 2; j <= i; j++) {
//         stroka += " " + String() 
//     }
//     console.log(stroka)
// }

// 1. Нарисуйте ромб
let side = 10
for (var i = 1; i < side; i++) {
    //left upper corner
    var stroka = ""
    var spacesBefore = " ".repeat(side - i - 1)
    for (var j = 1; j <= i; j++) {
        stroka += String(j)
    }
    stroka = spacesBefore + stroka
    //rigth upper corner
    strSplit= stroka.slice(0, side - 2).split("")
    strRev = strSplit.reverse()
    strJoin = strRev.join("")
    stroka = stroka + strJoin
    
    console.log(stroka)

//

} 



