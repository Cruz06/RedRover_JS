var a = 175;
var b = 90;
var x;
let maxx = Math.max(a, b);
let minn = Math.min(a, b);
while (maxx != 0 && minn != 0) {
    console.log("max =" + String(maxx))
    console.log("min =" + String(minn))
    maxx = Math.max(maxx - minn, minn);
    minn = Math.min(maxx - minn, minn);
    
}
maxx = Math.max(maxx - minn, minn);
minn = Math.min(maxx - minn, minn);
console.log("max =" + String(maxx));
console.log("min =" + String(minn));


//const nod = (a, b) =>{
    var a = 175;
    var b = 90;
    while (a !== b) {
    if (a > b) {
        a = a - b;
    } else {
    b = b - a;
    }
}
console.log(a)
//return a;
//};
    