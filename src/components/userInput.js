const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What product do you want to scrape?",
  },
];

async function UserInput() {
  var nameOfProduct;
  await inquirer.prompt(questions).then((product) => {
    nameOfProduct = product["name"];
  });
  return nameOfProduct;
}

module.exports = { UserInput };
