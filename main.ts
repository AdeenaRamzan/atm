#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 659;

let pin = await inquirer.prompt([
  { name: "userPin", message: "Enter your 3 digits pin", type: "number" },
]);
if (myPin == pin.userPin) {
  console.log("Login Successful");
  let operation = await inquirer.prompt([
    {
      name: "userOperation",
      message: "Select your operation",
      type: "list",
      choices: ["Withdraw", "Deposit", "Balance Check"],
    },
  ]);
  if (operation.userOperation === "Withdraw") {
    let withdrawAmount = await inquirer.prompt([
      {
        name: "userWithdraw",
        message: "Enter your withdraw amount",
        type: "number",
      },
    ]);
    myBalance -= withdrawAmount.userWithdraw;
    console.log("Withdraw Successful");
    console.log("Your current balance is: ", myBalance);
  } else if (operation.userOperation === "Deposit") {
    let depositAmount = await inquirer.prompt([
      {
        name: "userDeposit",
        message: "Enter your deposit amount",
        type: "number",
      },
    ]);
    myBalance += depositAmount.userDeposit;
    console.log("Deposit Successful");
    console.log("Your current balance is: ", myBalance);
  } else if (operation.userOperation == "Balance Check") {
    console.log("Your current balance is: ", myBalance);
  }
} else {
  console.log("Login Failed");
}
