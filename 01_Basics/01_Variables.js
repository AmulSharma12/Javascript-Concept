const accountId = 1444567; //restriction - const dont allow to modify the data once it is declared.
let accountEmail = "john.hashting@gmail.com";
var accountPassword = "12345";
accountCity = "London"; //we can reserve memory that as well bad practices.
let accountState;       //undefined value not provided

//accountId = 9;  //Assignment to constant variable

accountEmail = "ronny.nel@gmail.com";
accountPassword = "239874";
accountCity = "melbourne";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope - only use let and const
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
