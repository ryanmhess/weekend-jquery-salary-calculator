
const employeeOne = {firstName: 'Roy', lastName: 'Smith', empID: 9623, empTitle: 'Quality Assurance', annualSalary: 48000};
const employeeTwo = {firstName: 'Thorin', lastName: 'Charlie', empID: 8724, empTitle: 'Support Team', annualSalary: 58000};
const employeeThree = {firstName: 'Cedar', lastName: 'Charlie', empID: 4521, empTitle: 'Team Lead', annualSalary: 80000};

let employees = [employeeOne, employeeTwo, employeeThree];

let annualSalaryTotal;

$(document).ready(readyNow);

//----------------------------------------------------------------

function readyNow() {
    employeeList(employees);
    $('#add-btn').on('click', employeeAdd);
    $('#remove-btn').on('click', employeeAdd);
    $(document).on('click', '.delete-btn', employeeDelete)
}   //  end readyNow function

function employeeList(){
    $('#tableBody').empty();
    annualSalaryTotal = 0;
    for(let employee of employees){
        employeeAssign(employee);
        employeeSalaryTotal(employee);
    }
}   //  end employeeList function

function employeeAssign(employee){
    $('#tableBody').append(`
    <tr class="tr1">
        <td class="td1">${employee.firstName}</td>
        <td class="td2">${employee.lastName}</td>
        <td class="td3">${employee.empID}</td>
        <td class="td4">${employee.empTitle}</td>
        <td class="td5">$${employee.annualSalary}</td>
        <td class="td6">
            <button id="${employee.empID}"class="delete-btn">DELETE</button>
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
    employees.unshift(employeeNew);
    employeeList();
}   //  end employeeAdd function

function employeeInputClear(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#empID').val('');
    $('#empTitle').val('');
    $('#annualSalary').val('');
}   //  end employeeInputClear function

function employeeDelete(){
    $(this).closest('tr').remove();
    let deleteID = Number($(this).attr('id'));
    employees = employees.filter(function(employeeSelection){
        return employeeSelection.empID !== deleteID;
    });
    employeeList();
}   //  end employeeDelete function

function employeeSalaryTotal(employee){
    annualSalaryTotal += employee.annualSalary;
    $('#tableFoot').empty();
    $('#tableFoot').append(`
    <tr class="tr2">
        <td class="td7">$${annualSalaryTotal}</td>
    </tr>`);
}   //  end employeeSalaryTotal function