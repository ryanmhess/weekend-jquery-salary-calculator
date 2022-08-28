
const employeeOne = {firstName: 'Roy', lastName: 'Smith', empID: 9623, empTitle: 'Quality Assurance', annualSalary: 48000};
const employeeTwo = {firstName: 'Thorin', lastName: 'Charlie', empID: 8724, empTitle: 'Support Team', annualSalary: 58000};
const employeeThree = {firstName: 'Cedar', lastName: 'Charlie', empID: 4521, empTitle: 'Team Lead', annualSalary: 80000};

const employees = [employeeOne, employeeTwo, employeeThree];

let idCount = 0;

$(document).ready(readyNow);

function readyNow() {
    employeeList(employees);
    $('#add-btn').on('click', employeeAdd);
    $('#remove-btn').on('click', employeeAdd);
    $(document).on('click', '.delete-btn', employeeDelete)
}

function employeeList(){
    $('.tableBody').empty();
    for(let employee of employees){
        employeeAssign(employee);
    }
}   //  end employeeList function

function employeeAssign(employee){
    idCount++;
    $('.tableBody').append(`
    <tr id="${idCount}">
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.empID}</td>
        <td>${employee.empTitle}</td>
        <td>${employee.annualSalary}</td>
        <td>
            <button class="delete-btn">DELETE</button>
        </td>
    </tr>`);
    employeeInputClear();
}   //  end employeeAssign function

function employeeAdd(){
    let employeeNew = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        empID: Number($('#empID').val()),
        empTitle: $('#empTitle').val(),
        annualSalary: Number($('#annualSalary').val())
    }
    employees.push(employeeNew);
    console.log($('#empID').val());
    employeeList();
}   //  end employeeNew function

function employeeInputClear(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#empID').val('');
    $('#empTitle').val('');
    $('#annualSalary').val('');
}   //  end employeeInputClear function

function employeeDelete(){
    console.log($(this).closest('tr').val());
    console.log($(this).attr(('id')));
    $(this).closest('tr').remove();
}   //  end employeeDelete function