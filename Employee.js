'use strict'

const { readFileSync } = require('fs')

class Employee {
  constructor ({name, title, salary}) {
    this._name = name
    this._title = title
    this._salary = salary
  }

  static parseFromFilePath(filepath) {
    return new Promise( (resolve, reject) => {
      const data = readFileSync(filepath)
      if (data) resolve(new Employee(JSON.parse(data)))
      else reject(`Error reading "${filepath}"`)
    })
    
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get title() {
    return this._title
  }

  set title(title) {
    this._title = title
  }
  get salary() {
    return this._salary
  }

  set salary(salary) {
    this._salary = salary
  }

  promote(newTitle, newSalary) {
    this.title = newTitle
    this.salary = newSalary
  }

}

module.exports = {
  Employee
}