// Write your solution in this file!

// Employee object
const employee = {
  name: "Employee1",
  streetAddress: "1 Test Street",
}

// Function to return a new employee object with an updated value
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = {...employee};
  newEmployee[key] = value;
  return newEmployee;
}

// Function to update the employee object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to return a new employee object with a removed property
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
}

// Function to remove a property from the employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}