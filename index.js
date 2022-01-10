const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const generateHTML = require('./src/generateHTML');
const teamArray = []; 

const addManager = () => {
  return inquirer.prompt ([
      {
          type: 'input',
          name: 'name',
          message: "Enter the Manager's name:", 
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ("No name entered, please add a Manager's name.");
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "Enter the Manager's ID number:",
          validate: nameInput => {
              if  (isNaN(nameInput)) {
                  console.log ("No ID entered, please entered a valid ID number.")
                  return false; 
              } else {
                  return true;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: "Enter the Manager's e-mail address:",
          validate: email => {
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
              if (valid) {
                  return true;
              } else {
                  console.log ('No e-mail entered, please enter a valid e-mail address.')
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'officeNumber',
          message: "Enter the Manager's office number:",
          validate: nameInput => {
              if  (isNaN(nameInput)) {
                  console.log ("No office number entered, please enter a valid office number.")
                  return false; 
              } else {
                  return true;
              }
          }
      }
  ])
  .then(managerInput => {
      const  { name, id, email, officeNumber } = managerInput; 
      const manager = new Manager (name, id, email, officeNumber);

      teamArray.push(manager); 
      console.log(manager); 
  })
};

const addEmployee = () => {
  console.log(`
  
  Add employees to the team
  ========================
  `);

  return inquirer.prompt ([
      {
          type: 'list',
          name: 'role',
          message: "Please choose your employee's role",
          choices: ['Engineer', 'Intern']
      },
      {
          type: 'input',
          name: 'name',
          message: "What's the name of the employee?", 
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ("Please enter an employee's name!");
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "Please enter the employee's ID.",
          validate: nameInput => {
              if  (isNaN(nameInput)) {
                  console.log ("Please enter the employee's ID!")
                  return false; 
              } else {
                  return true;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: "Please enter the employee's email.",
          validate: email => {
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
              if (valid) {
                  return true;
              } else {
                  console.log ('Please enter an email!')
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'github',
          message: "Please enter the employee's github username.",
          when: (input) => input.role === "Engineer",
          validate: nameInput => {
              if (nameInput ) {
                  return true;
              } else {
                  console.log ("Please enter the employee's github username!")
              }
          }
      },
      {
          type: 'input',
          name: 'school',
          message: "Please enter the intern's school",
          when: (input) => input.role === "Intern",
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ("Please enter the intern's school!")
              }
          }
      },
      {
          type: 'confirm',
          name: 'confirmAddEmployee',
          message: 'Would you like to add more team members?',
          default: false
      }
  ])
  .then(employeeData => {

      let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
      let employee; 

      if (role === "Engineer") {
          employee = new Engineer (name, id, email, github);

          console.log(employee);

      } else if (role === "Intern") {
          employee = new Intern (name, id, email, school);

          console.log(employee);
      }

      teamArray.push(employee); 

      if (confirmAddEmployee) {
          return addEmployee(teamArray); 
      } else {
          return teamArray;
      }
  })

};