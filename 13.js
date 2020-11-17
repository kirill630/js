let obj = {};
let capitals = {
    russian: "Moscow",
    italy: "Rome",
    spain: "Madrid",
    china: "Beijing",

}
capitals.china = "Пекини";
capitals.america = "Wachinghton";
delete capitals.italy;
let cntr = "spain";
//console.log(capitals[cntr]);

let car = {
    model: "Mazda MX5",
    color: "coral",
    year : 1999,
    automat: false,
    user:{
        name:"Oleg",
        rights: "344343"
    },
    bensin: "dt",
    showInfo: function() {
        return `${car.user.name} обладает ${car.year} года цвета ${car.color} c ${car.automat ? "автоматической" : "механической"} кпп `;
    }
}

// if (car.automat){
//     str += "автоматической";

// }else {
//     str += "механической";

// }
// str += "кпп";
console.log(car.showInfo());
