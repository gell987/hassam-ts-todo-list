#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
let todo_list: any = [];
let check: boolean = false;

const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));
async function greet() {
  console.clear();
  const rainboxTitle = chalkAnimation.rainbow(
    "Hassam's todo-list PIAIC(PIAIC202061)\n"
  );
  await sleep();
  rainboxTitle.stop();
}
async function add() {
  let add_new_todo = inquirer.prompt({
    name: "adding",
    type: "input",
    message: chalk.redBright(
      "hello please enter the work you want to add in todo list:  "
    ),
  });
  todo_list.push((await add_new_todo).adding);
}

async function pending() {
  let num_gen:number = 1
    console.log(chalk.blueBright(`
    hello your pending todos are:
    `))
    for (let index = 0; index < todo_list.length; index++) {
        const element = todo_list[index];
        console.log(num_gen,":",chalk.greenBright(element))
        console.log("\n")
        num_gen+=1

    }

    
}


async function remove() {
  let remover_from_todo = inquirer.prompt({
    name: "remove",
    type: "input",
    message:chalk.redBright(
      "hello please enter the work you have done and you want to delete it from the todo list:  "
    ),
  });
  if (todo_list.includes((await remover_from_todo).remove)) {
    let index = todo_list.indexOf((await remover_from_todo).remove)
    if (index !== -1) {
        todo_list.splice(index, 1);
      }

  }
}

async function main() {
  console.log(
    chalk.redBright(
      `
    please enter add(to add a your new work todo)
    please enter remove(to remove a todo you've already done)
    please enter pending(to see how  many todos are in work)
    please enter q(to quit meaning to stop this program)
    `
    )
  );
  let choice_work = inquirer.prompt({
    name: "choice",
    type: "input",
    message: "enter your choice:  ",
  });
  if ((await choice_work).choice == "add") {
    await add();
  } else if ((await choice_work).choice == "remove") {
    await remove();
  } else if ((await choice_work).choice == "q") {
    check = true;
  }
  else if((await choice_work).choice == "pending"){
    await pending()
  }
  else{
    console.log(chalk.redBright("invalid choice please try again"))
  }
}
await greet()
while (check == false) {
  await main();
}

