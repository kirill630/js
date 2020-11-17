let num = '9889' 
num = num.split('') 
let a = +num[0] 
let b = +num[1] 
let c = +num[2] 
let d = +num[3] 

if (a+b==c+d) { 
console.log('Счастливое число') 
}else{ 
console.log('Грустное число') 
} 