/* pseudocode
1. Create a string for the user message and store it to a variable
2. Assign 3 variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator 
3. Display the message and combo to the user in an alert. 
*/

let vaultString = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";
let combinationNum1 = 1+5;
let combinationNum2 = 3*2^2;
let combinationNum3 = 3%2;
alert(`${vaultString} ${combinationNum1} - ${combinationNum2} - ${combinationNum3}`);