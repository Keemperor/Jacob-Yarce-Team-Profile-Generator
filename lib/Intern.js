const Employee =  require('./Employee');

class Intern extends Employee {
  constructor () {

  }

  getSchool(){

  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;