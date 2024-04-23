#! /usr/bin/env node

import inquirer from "inquirer";

let toDos = [];
let condition = true;

while (condition) {
  let answer = await inquirer.prompt([
    {
      name: "firstQuestion",
      message: "What wuold you want to Add in your Todos?",
      type: "input",
    },

    {
        name: "secondQuestion",
        message: "Would you like add more in your Todos?",
        type: "confirm",
        default: "true"
    }
  ]);

  toDos.push(answer.firstQuestion);
  console.log(toDos);
  condition = answer.secondQuestion;
  
};
