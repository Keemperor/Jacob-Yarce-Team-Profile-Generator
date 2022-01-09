const Employee =  require('./Employee');

class Manager extends Employee {
  constructor () {

  }

  getRole() {
    return  "Manager";
  }
}

module.exports = Manager;