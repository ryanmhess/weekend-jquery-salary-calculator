
const employeeOne = {firstName: 'Roy', lastName: 'Smith', empID: 9623, empTitle: 'Quality Assurance', annualSalary: 48000};
const employeeTwo = {firstName: 'Thorin', lastName: 'Charlie', empID: 8724, empTitle: 'Support Team', annualSalary: 58000};
const employeeThree = {firstName: 'Cedar', lastName: 'Charlie', empID: 4521, empTitle: 'Team Lead', annualSalary: 80000};

const employees = [employeeOne, employeeTwo, employeeThree];

$(document).ready(readyNow);

function readyNow() {
    // appendDom();
    employeeList(employees);
    // $('#clear-btn').on('click', donateThePets);
    $('#add-btn').on('click', addEmployee);
}

function employeeList(employees){
    for(let employee of employees){
        employeeAssign(employee);
    }
}

function employeeAssign(employee){
    $('#tableBody').append(`
    <tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.empID}</td>
    <td>${employee.empTitle}</td>
    <td>${employee.annualSalary}</td>
    <td><button id="remove-btn">DELETE</button></td>
    </tr>`);
}

function addEmployee(){
    
}