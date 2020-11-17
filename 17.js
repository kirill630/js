function Point(x, y){
this.x = x;
this.y = y;
}
Point.prototype.moveTo = function(newX, newY){
    this.x = newX;
    this.y = newY;
}
Point.prototype.moveTo = function(newX, newY){
    return `Точка с координатами (${this.x}; y ${this.y})`
}



let A = new Point(12, 50)
let B = new Point(6, 14)
A.moveTo(10,10);
console.log(A);
console.log(B);