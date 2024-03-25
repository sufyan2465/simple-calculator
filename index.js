#! /usr/bin/env node
import inquirer from "inquirer";
const result = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter Second number", type: "number", name: "secondNumber" },
    { message: "Select one of the operator to perform your operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiply", "Division"],
    },
]);
// codition
if (result.operator === "Addition") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operator === "Subtraction") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator === "Multiply") {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operator === "Division") {
    console.log(result.firstNumber / result.secondNumber);
}
else {
    console.log("Please select valid operator");
}
