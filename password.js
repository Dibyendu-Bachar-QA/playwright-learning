const password = "test@123";

if (password.length <= 7) { console.log('valid'); } else if (password === "test@12") { console.log('too common'); } else { console.log('invalid'); }