function checkPassword(password) {
    if (password === "password123") { return 'too common'; }
    else if (password.length < 8) { return 'too short'; }
    else { return 'valid'; }
}

console.log(checkPassword("abcdefg")); // Output: too short
console.log(checkPassword("abcdefgh")); // Output: valid
console.log(checkPassword("password123")); // Output: too common
console.log(checkPassword("randomPass")); // Output: valid
console.log(checkPassword("")); // Output: too short
console.log(checkPassword("mySecret99")); // Output: valid
console.log(checkPassword("qwertyuiop")); // Output: valid
console.log(checkPassword("RANDOMPASSWORD")); // Output: valid