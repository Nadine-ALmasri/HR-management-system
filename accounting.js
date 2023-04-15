'use strict';
let tableEl = document.getElementById('table');
let allEmployee = []

function getEmployees() {
    // STEP2: Get the array from the localstorage
    let jsonArr = localStorage.getItem('allEmployee');
    let dataFromStorage = JSON.parse(jsonArr);
    allEmployee = dataFromStorage;
    
   }
 


getEmployees();
 console.log(allEmployee)
 
 
 
 
 
 
 function department() { //function to get number of employee in each department 
   window.numDev = 0
    window.numFin = 0
   window.numMar = 0
    window.numAd = 0
    window.total = 0
   
   
    for (let i = 0; i < allEmployee.length; i++) {
    
   
       if (allEmployee[i].department=="Development") {
           
                numDev++;
                total++;}
       else if (allEmployee[i].department== "Marketing"){
               numMar++;
                total++;}
             else if (allEmployee[i].department== "Finance"){
          
                numFin++;
                total++}
          
           else {
                numAd++
                total++
               




        }
        
    }}
function totalSal() {//function to get the avarge salary an total salary for each department
    window.salDev = 0
     window.salFin = 0
    window.salMar = 0
     window.salAd = 0
     window.totalS = 0
    
   
     for (let i = 0; i < allEmployee.length; i++) {
     console.log(allEmployee[i].salary)
    
        if (allEmployee[i].department=="Development") {
            
                 salDev+=allEmployee[i].salary
                 totalS+=allEmployee[i].salary;}
        else if (allEmployee[i].department== "Marketing"){
            salMar+=allEmployee[i].salary
            totalS+=allEmployee[i].salary;}
              else if (allEmployee[i].department== "Finance"){
           
                salFin+=allEmployee[i].salary
                 totalS+=allEmployee[i].salary;}
            else {
                salAd+=allEmployee[i].salary
                 totalS+=allEmployee[i].salary;}
 
 
 
 
         }
       

         
     }




department();
totalSal();




           //// ................................to get the avg ......

  
     function avg ()  { 
    if (salDev==0){
        window.avgDev=0
    }
    else{
    window.avgDev =Math.ceil(salDev/numDev);}
  if (salMar==0){
    window.avgMar=0
  }
  else{
     window.avgMar =Math.ceil(salMar/numMar);}
    if (salFin==0){
        window.avgFin=0
    }else {
    window.avgFin =Math.ceil(salFin/numFin);}
    if (salAd==0){
        window.avgAd=0
    }else{
     window.avgAd =Math.ceil(salAd/numAd);}
     window.avgtotal =Math.ceil(totalS/total);
     }
avg()
function renderInTable() {//function to render our localstorge data in a table
    let tr1 = document.createElement('tr');
    tableEl.appendChild(tr1);

    let tdEl1 = document.createElement('th');//department name
    tdEl1.textContent = "Department Name";
   tr1.appendChild(tdEl1);



 let tdEl2 = document.createElement('th');// number of employee 
    tdEl2.textContent = "Number Of Employee";
    tr1.appendChild(tdEl2);

    


    let tdEl3 = document.createElement('th');
    tdEl3.textContent = "Total Salary";
   tr1.appendChild(tdEl3);
    let tdEl4 = document.createElement('th');
    tdEl4.textContent = "Avarege Salary";
   tr1.appendChild(tdEl4);
    



/// row 2 //administreation info

let tr2 = document.createElement('tr');
    tableEl.appendChild(tr2);

    let td3 = document.createElement('td');
    td3.textContent = "Administration"
    tr2.appendChild(td3);

  
    let td23 = document.createElement('td');
    td23.textContent = numAd
    tr2.appendChild(td23);

    let td33 = document.createElement('td');
    td33.textContent = salAd
    tr2.appendChild(td33);

    let td43 = document.createElement('td');
    td43.textContent =avgAd
    tr2.appendChild(td43);


  
/// row 3 /// marketing info
    let tr3 = document.createElement('tr');
    tableEl.appendChild(tr3);
 
   
   let td4 = document.createElement('td');
    td4.textContent = "Marketing"
 tr3.appendChild(td4);
 let td24 = document.createElement('td');
 td24.textContent = numMar
 tr3.appendChild(td24);
 
 let td34 = document.createElement('td');
    td34.textContent = salMar;
    tr3.appendChild(td34);

    let td44 = document.createElement('td');
    td44.textContent = avgMar;
    tr3.appendChild(td44);
///row 4 //development info 



    let tr4 = document.createElement('tr');
    tableEl.appendChild(tr4);
    let td5 = document.createElement('td');
    td5.textContent = "Development"
    tr4.appendChild(td5);

 
    let td6 = document.createElement('td');
    td6.textContent = numDev
    tr4.appendChild(td6);

    let td16 = document.createElement('td');
    td16.textContent = salDev;
    tr4.appendChild(td16);

    let td26 = document.createElement('td');
    td26.textContent = avgDev;
    tr4.appendChild(td26);
    /// row 5 /// Finance
    let tr5 = document.createElement('tr');
    tableEl.appendChild(tr5);
    let td7 = document.createElement('td');
    td7.textContent = "Finance"
    tr5.appendChild(td7);
    let td8 = document.createElement('td');
    td8.textContent = numFin
    tr5.appendChild(td8);

    let td18 = document.createElement('td');
    td18.textContent = salFin
    tr5.appendChild(td18);
    let td28 = document.createElement('td');
    td28.textContent = avgFin
    tr5.appendChild(td28);
    /// row 6 // total
    let tr6 = document.createElement('tr');
    tableEl.appendChild(tr6);
    let td9 = document.createElement('td');
    td9.textContent = "Total"
    tr6.appendChild(td9);
    let td10 = document.createElement('td');
    td10.textContent = total
    tr6.appendChild(td10);
    let td20 = document.createElement('td');
    td20.textContent = totalS
    tr6.appendChild(td20);
    let td22 = document.createElement('td');
    td22.textContent = avgtotal
    tr6.appendChild(td22);
}


renderInTable();
