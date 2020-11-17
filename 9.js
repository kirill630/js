/*let apples =5;
let peoples = 15;
while (apples < peoples){
    console.log("купим еще 1");
    apples = apples + 1;

}
console.log("все получили по 1")
*/
let age, present = 0, piggy = 0, oldment = 18;
age = Math.floor(Math.random() * 18);
while (age < oldment) {
    present += 10;
    piggy += present;
    console.log(`клаве исплнилось ${age}лет! папа поарил клаве ${present}$ .\nТеперь у клавы есть есть ${piggy}$`);
    age++;

}
console.log(`клава смогла накопить ${piggy}$`);