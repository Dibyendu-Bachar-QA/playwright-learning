function isValidUsername(name) 

{return name.length >= 5 && !name.includes(' ');}

console.log(isValidUsername("tester")); // true
console.log(isValidUsername("abc")); // false
console.log(isValidUsername("my user")); // false
console.log(isValidUsername("admin")); // true