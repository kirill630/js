let ivan = ["печенька", 2, "тралала", 0, 1, true, undefined, 23];
console.log(ivan.length);
console.log(ivan[3]);
ivan[13] ="igor"
console.log(ivan);

let numbers = [];
function getNumber(max = 101, min = 0) {
   return Math.floor(Math.random() * (max - min) + min);
}

let i = 0;
while (i < 100) {
    numbers[i] = getNumber(101,1)
    i++;
}
console.log(numbers);
let arrSum = 0;
for (let i = 0, cnt = numbers.length; i < cnt; i++) {
    arrSum += numbers[i];
}
console.log(arrSum);

let fruits = [
    "банан",
    "манго",
    "яблоко",
    "МАНДАРИН",
    "ХУРМА",
];
fruits.push("груша");
fruits.push("картошка");
fruits.unshift("абрикос");
console.log(fruits);

