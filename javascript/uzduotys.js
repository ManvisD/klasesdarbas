let a = 1;
console.log("Kintamojo a reikšmė: " + a);
a = 2;
console.log("Kintamojo a reikšmė: " + a);

let b = 'Manvydas Difartas';
let c = 'Mano vardas';
console.log(c + ' ' + b);

let gim = new Date(1990, 03, 29);
let year = 1990;
let month = 03;
let date = 29;
let sum = (gim.getFullYear() % 10) + (gim.getMonth() % 10) + (gim.getDate()% 10);
console.log("Jūsų gimimo data yra: " + year + "-" + month + "-" + date);
console.log("Paskutinių skaitmenų sudarytų skaičių suma yra: " + sum);

let d,e,f,g;

let s = 6;
let pi = 3.14;
let r = 3.14*6/2;
console.log("Apskritimo ilgis:" + ' ' + r);
