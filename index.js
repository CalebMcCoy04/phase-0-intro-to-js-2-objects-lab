const employee = {};
employee.name = "Sam";
employee.streetAddress = "street";
function updateEmployeeWithKeyAndValue( obj, key, value) {
    const newEmployee = { ...obj };
     newEmployee[key] = value;
   return newEmployee
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
};
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
};