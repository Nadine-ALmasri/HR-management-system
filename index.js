'use strict';
let allEmployee =[]
function Employee (employeeId,fullName,department,level,salary){
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.ImageUrl = `/photos/${this.employeeId}.png`;
    this.salary = salary;
   allEmployee.push(this)
}


Employee.prototype.rand=function() {// function to genarate random salary

let theLevel= this.level;
    if(theLevel=="Senior"){
        return(Math.floor(Math.random() * (2000-1500 + 1) ) + 1500) ;

 }
    else if (theLevel=="Mid-Senior"){
        return(Math.floor(Math.random() * (1500-1000 + 1) ) + 1000) ;
       }else{
      return(  Math.floor(Math.random() * (1000-500 + 1) ) +500 );
    
     }}
Employee.prototype.show= function(){//function to print the name and net salary at home page


let theSalary=this.rand()
let theNetSalary=theSalary-((7.5/100)*theSalary)
document.write(`${ this.fullName}  salary before tax is:(${theSalary}) `)

document.write(`salary after tax is:(${theNetSalary})<br>`)}

Employee.prototype.render= function (){//function to render employee info 
document.write(`<p>employee id is(${this.employeeId})  ${ this.fullName}    ${ this.level}   ${this.department} <img width=70px height=50px src="${ this.ImageUrl}"/>   </p><br/>`)}
const Ghazi = new Employee ("1000" ,"Ghazi Samer","Administration","Senior",)
const Lana  =new Employee("1001","Lana Ali","Marketing","Senior")
const 	Tamara = new Employee ("1003" ,"	Tamara Ayoub","Development","Senior")
const Safi =new Employee("1004","Safi Walid ","Administration","Mid-Senior")
const	Rana  = new Employee ("1005" ,"	Rana Saleh","Development",	"Junior")
const Hadi=new Employee("1006","Hadi Ahmad","Finance","Mid-Senior")

Ghazi.render()//to call the function that render the employee info
Lana .render()
Tamara .render()
Safi.render()
Rana.render()
Hadi.render()
console.log(...allEmployee)

   


Ghazi.show()// to call the function that render the net salary with names
Lana .show()
Tamara .show()
Safi.show()
Rana.show()
Hadi.show()

console.log(Ghazi.rand())//to print random salay at the console
console.log(Lana.rand())
console.log(Tamara.rand())
console.log(Safi.rand())
console.log(Rana.rand())
console.log(Hadi.rand())
