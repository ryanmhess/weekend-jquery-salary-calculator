
const employeeOne = {firstName: 'Roy', lastName: 'Smith', empID: 9623, empTitle: 'Quality Assurance', annualSalary: 48000};
const employeeTwo = {firstName: 'Thorin', lastName: 'Charlie', empID: 8724, empTitle: 'Support Team', annualSalary: 58000};
const employeeThree = {firstName: 'Cedar', lastName: 'Charlie', empID: 4521, empTitle: 'Team Lead', annualSalary: 80000};

let employees = [employeeOne, employeeTwo, employeeThree];

let annualSalaryTotal;

$(document).ready(readyNow);

//-----------------------------------------------------------------------------------------------//
//      READY NOW Function

/*
When the document is ready, this works as the main function hub.  The employeeList function auto
pulls the employees array. There are also listeners for the add-btn, remove-btn, and the delete-btn
*/

function readyNow() {
    employeeList(employees);
    $('#add-btn').on('click', employeeAdd);
    $('#remove-btn').on('click', employeeAdd);
    $(document).on('click', '.delete-btn', employeeDelete)
}   //  end readyNow function

//-----------------------------------------------------------------------------------------------//
//      EMPLOYEE LIST Function

/*
This function clears the table body and sets the annualSalaryTotal to 0. Then a for loop is
initiated cycling through each employee in the employees array and sends them through the
employeeAssign and employeeSalaryTotal for further manipulation.
*/

function employeeList(){
    $('#tableBody').empty();
    annualSalaryTotal = 0;
    for(let employee of employees){
        employeeAssign(employee);
        employeeSalaryTotal(employee);
    }
}   //  end employeeList function

//-----------------------------------------------------------------------------------------------//
//      EMPLOYEE ASSIGN Function

/*
This function adds employee data to the table. It also assigns the empID to the id of the delete
button created for each employee for removal purposes.
*/

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

//-----------------------------------------------------------------------------------------------//
//      EMPLOYEE ADD Function

/*
This function is initiated when the submit button is clicked. It pulls the input values entered
by the user and creates a new employee object which is then added to the employees array.
*/

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

//-----------------------------------------------------------------------------------------------//
//      EMPLOYEE INPUT CLEAR Function

/*
This function is called after the input fields are submitted. All this does is clear out the
input fields so a duplicate is not accidently created.
*/

function employeeInputClear(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#empID').val('');
    $('#empTitle').val('');
    $('#annualSalary').val('');
}   //  end employeeInputClear function

//-----------------------------------------------------------------------------------------------//
//      EMPLOYEE DELETE Function

/*
This function is called when a [DELETE] button is clicked. Based on the button, the associated
table row is also removed. To keep the employees array state in line with the table data, the
employees array is filtered to exclude any objects that contain an empID that matches the id
attached to the same button used to delete the row.
*/

function employeeDelete(){
    $(this).closest('tr').remove();
    let deleteID = Number($(this).attr('id'));
    employees = employees.filter(function(employeeSelection){
        return employeeSelection.empID !== deleteID;
    });
    employeeList();
}   //  end employeeDelete function

//-----------------------------------------------------------------------------------------------//
//      EMPLOYEE SALARY TOTAL Function

/*
When this function is called, the annualSalaryTotal variable is incrementally increased based on 
employee data input. After the variable is incremented, the table footer is cleared, removing
the old value and then append to add the most current value.
*/

function employeeSalaryTotal(employee){
    annualSalaryTotal += employee.annualSalary;
    $('#tableFoot').empty();
    $('#tableFoot').append(`
    <tr class="tr2">
        <td class="td7">$${annualSalaryTotal}</td>
    </tr>`);
}   //  end employeeSalaryTotal function

//-----------------------------------------------------------------------------------------------//
//      The End