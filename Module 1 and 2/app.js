var userInput;
var userName;
userInput = 5;
userInput = "max";
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("en error occured", 500);
console.log(result);
