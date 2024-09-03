//assignment operator

 console.log(5==5) // true
 console.log(2=="2") //true
 console.log("hello"=="Hello") // false

//not equal to operator
console.log(2 != 2) //false
console.log(2 != "2") // false
console.log(1 != 3) //true

// staric eqaul to operator
console.log(2 === 2) //true
console.log( 2 === "2") //false 

// logical And operator
//t + t= t
//t + f= f
//f + t= f
//f + f= f

let x = 2;
console.log((x < 4)&& (4 >= x)) //true
console.log((x < 4)&& (2 == 4 )) //false
console.log((x > 4)&& (x == 4 )) //false

//logical OR operater
// T + T = F
// T + F = T
// F + T = T
// F + F = T

let X = 2;
console.log((x <= 4) || (4 >= x)) //true
console.log((x <= 4 ) || (2 == 4)) //true
console.log((x > 4 ) || (x == 4)) //false 


//logical not (!) operator

console.log(!true) // false
console.log(!(2 < 3)) //false