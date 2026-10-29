function checkResult(expected, actual) {
    if (expected === actual) {
        return "PASS";
    } else {
        return "FAIL";
    }
}


console.log(checkResult("Dashboard", "Dashboard")); // Output: PASS
console.log(checkResult("Dashboard", "Login")); // Output: FAIL
console.log(checkResult(200, 200)); // Output: PASS
console.log(checkResult(200, "200")); // Output: FAIL