let firstNumber = 3;
let secondNumber = 5;
let operation = "*";

if (operation === "+") {
  console.log(
    `${firstNumber} + ${secondNumber} = 
    ${firstNumber + secondNumber}`
  );
} else if (operation === "-") {
  console.log(
    `${firstNumber} - ${secondNumber} = 
        ${firstNumber - secondNumber}`
  );
} else if (operation === "*") {
  console.log(
    `${firstNumber} * ${secondNumber} = 
        ${firstNumber * secondNumber}`
  );
} else {
  console.log(
    `${firstNumber} / ${secondNumber} = 
    ${firstNumber / secondNumber}`
  );
}
