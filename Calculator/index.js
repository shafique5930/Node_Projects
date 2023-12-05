import chalk from "chalk";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "options",
        message: "Dear customer, what would you like to buy",
        choices: ["groceries", "vegetables", "fruits"],
    },
]);
console.log(answer.options);
console.log(chalk.red("hello world"));
