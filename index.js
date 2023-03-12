// Write your solution in this file!

// Initialize employee object
const employee = {
  name: "Employee 1",
  streetAddress: "1 Test Street",
};

// Function to create new employee object
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = {...employee};
  newEmployee[key] = value;
  return newEmployee;
}

// Function to update employee object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to remove property from new employee object
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
}

// Function to remove property from employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
