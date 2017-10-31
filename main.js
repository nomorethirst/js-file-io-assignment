'use strict'

const util = require('util')
const path = require('path')
const { Employee } = require('./Employee')

const employeePromise = 
  Employee
    .parseFromFilePath(
      path.resolve(__dirname, 'employee.json')
    )

employeePromise.then( 
  employee => {
  console.log(`is Employee? ${employee instanceof Employee}`)
  console.log(`parsed: ${util.inspect(employee)}`)

  employee.promote('chief petty grunt', 10)
  console.log(`after promotion: ${util.inspect(employee)}`)
}, 
  err => {
  console.log(err)
})
