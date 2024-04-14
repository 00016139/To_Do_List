#! /usr/bin/env node
import inquirer from "inquirer";
let Todos = [];
let Condition = true;
while (Condition) {
    const Answer = await inquirer.prompt([
        {
            name: "items",
            message: "What do you want to add in Todos?",
            type: "input"
        },
        {
            name: "Add_More",
            message: "Do you want to Add more in Todos?",
            type: "confirm",
            default: "false"
        },
    ]);
    Todos.push(Answer.items);
    Condition = Answer.Add_More;
    console.log(Todos);
}
