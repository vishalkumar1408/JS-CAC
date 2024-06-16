const accountId = 12345
let accountEmail = "vishal@gmail.com"
var accountPassword = "2345"
accountCity = "Bihar"

// accountId = 2  // not allowed

accountEmail = "ghj@dfg"
accountPassword = "1234567"
accountCity = "jaipur"
let accountState;

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functionl scope
*/

console.table([accountEmail, accountState, accountId, accountPassword, accountCity])