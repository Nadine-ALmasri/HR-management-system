'use strict';
const body = document.getElementsByTagName('body');
const div = document.getElementsByTagName('div');
const h1 = document.getElementsByTagName('h1');
const p = document.getElementsByTagName('p');



let allEmployee = [];
function Employee(employeeId, fullName, department, level, salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.ImageUrl = `./photos/${this.employeeId}.png`;
    this.salary = salary;
    allEmployee.push(this)
}



Employee.prototype.rand = function () {//create function to genarate ranbom id number

    let theLevel = this.level;
    if (theLevel == "Senior") {
        return (Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500);

    }
    else if (theLevel == "Mid-Senior") {
        return (Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000);
    } else {
        return (Math.floor(Math.random() * (1000 - 500 + 1)) + 500);

    }
}
Employee.prototype.show = function () {


    let theSalary = this.rand();
    let theNetSalary = theSalary - ((7.5 / 100) * theSalary);
    document.write(`${this.fullName}  salary before tax is:(${theSalary}) `);

    document.write(`salary after tax is:(${theNetSalary})<br>`);
}
        
      function  render () {
    //refactor the render prototype function to render each employee information 

    if (allEmployee == null) {
        allEmployee = [];}
        else{
            for (let i = 0; i <allEmployee.length; i++) {



        const container = document.getElementById('container');
        const divEl = document.createElement('div');
        container.appendChild(divEl);
        const imgEl = document.createElement('img');
        divEl.appendChild(imgEl);
        imgEl.src = allEmployee[i].ImageUrl;
        imgEl.width = 150
        const h1El = document.createElement('h1');
        h1El.textContent = allEmployee[i].fullName;
        divEl.appendChild(h1El);
        const h2El = document.createElement('h3');
        h2El.textContent = allEmployee[i].department
        divEl.appendChild(h2El);
        const pEl = document.createElement('p');
        pEl.textContent = allEmployee[i].lavel
        divEl.appendChild(pEl);





        const pE2 = document.createElement('p');
        pE2.textContent = `The Id Is: ${allEmployee[i].employeeId} The expected salary is ${allEmployee[i].salary}`
        divEl.appendChild(pE2);

      

    }
}}
//................................................

Employee.prototype.rand = function () {// function to genarate random salary

    let theLevel = this.level;
    if (theLevel == "Senior") {
        this.salary = (Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500);

    }
    else if (theLevel == "Mid-Senior") {
        this.salary = (Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000);
    } else {
        this.salary = (Math.floor(Math.random() * (1000 - 500 + 1)) + 500);

    }// console.log(this.salary)
    return (this.salary)
}


Employee.prototype.show = function () {//function to print the name and net salary at home page

    //console.log(this.salary);

    this.theNetSalary = this.salary - this.salary * (7.5 / 100);
    return this.theNetSalary;
    // document.write(`salary after tax is:(${theNetSalary})<br>`)}
}







//................................................

function rann(arr) {//function to genarate random id number and store it in array
    var arr = []

    for (var i = 0; i < 100; i++) {

        var ran = Math.floor(Math.random() * (1006 - 1000 + 1)) + 1000
        if (arr.indexOf(ran) === -1) { arr.push(ran) }
        return (arr)
    }
    console.log(arr)

}


var arr = []

for (var i = 0; i < 100; i++) {

    var ran = Math.floor(Math.random() * (1006 - 1000 + 1)) + 1000
    if (arr.indexOf(ran) === -1) { arr.push(ran) }
}
console.log(arr)

var n = 0
// submitting the form 
let form = document.getElementById('info')
form.addEventListener('submit', submitHandler)

function submitHandler(event) {

    event.preventDefault();
    let employeeId = arr[n]
    let fullName = event.target.aName.value;
    let department = event.target.dropdown.value;
    let lavel = event.target.lev.value;
    let ImageUrl
    let salary = this.salary;
    let newEmployee = new Employee(employeeId, fullName, department, lavel, ImageUrl, salary);


    newEmployee.rand()
    newEmployee.show()
    render()

    let jsonArr = JSON.stringify(allEmployee);
    localStorage.setItem("allEmployee", jsonArr);
}


    // STEP2: Get the array from the localstorage
    let jsonArr = localStorage.getItem('allEmployee');
    let dataFromStorage = JSON.parse(jsonArr);
    allEmployee = dataFromStorage;
   
        render()