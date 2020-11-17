let subj ="ворон", verb = "сидел";
let n = Math.floor(Math.random()*1000);
   if (n % 100 < 11 || n % 100 > 14){
if (n % 10 === 1 && n %100 !== 11) {
subj += "а"
verb += "а"; // verb = verb + "a"
} else if  (n %  10 <= 2 && n % 10 <=4) {
  subj += "ы";
  verb += "и";

}else {
    verb +="о";
}
  } else {
    verb +="о";
}

console.log(`на ветке ${verb} ${n} ${subj}`);

const AGE = 15;
console.log(Math.PI);
console.log(Math.ceil(Math.random()*100));