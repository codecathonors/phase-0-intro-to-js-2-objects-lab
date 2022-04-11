const employee = {
    streetAddress: "439 Road",
    name: "Billy Bob"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    // return employee[key] = value;
    return {...employee, [key]: value}
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const bigObject = {...employee}
    delete bigObject[key]
    return bigObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}