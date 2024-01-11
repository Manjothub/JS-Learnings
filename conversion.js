let age = undefined

// this is known as type conversion
console.log(typeof String(age));
console.log(typeof(age));


let valueInNumber = Number(age);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;   

let isLoggedIn = ""
let booleanisloggedIn = Boolean(isLoggedIn)
console.log(booleanisloggedIn);

// 1 => true;
// 0 =>true;
// "" => false;
// hitesh =>true;

let somenumber = 33;
let stringNumber = String(somenumber);
console.log(typeof stringNumber);