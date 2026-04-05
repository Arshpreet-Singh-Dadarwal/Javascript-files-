const accountid=234567 // cannot be changed aferward 
let email="kush@gmail.com"
var accountpassword="12345"
accountcity="jaipur"
let accountstate //if we do not assgin any value then js consider it undefined (print through console.log)

//accountid=2 //not allowed
email="arsh@gamil.com"
accountpassword="67890"
accountcity="delhi"

/*
prefer not to use var
because of the issue with block scope and functional scope
*/
console.table([accountid,email,accountpassword,accountcity,accountstate])