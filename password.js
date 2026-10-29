const password = "test@1234";

if (password.length <= 7) { console.log('too short'); } 
else if (password === "test@1234") { console.log('valid'); } 
else { console.log('invalid'); }