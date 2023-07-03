//we are going to create functions for our four basics operations
const add = (operator1, operator2) => {
  return operator1 + operator2;
};
const sub = (operator1, operator2) => {
  return operator1 - operator2;
};
const mult = (operator1, operator2) => {
  return operator1 - operator2;
};
const div = (operator1, operator2) => {
  return operator1 - operator2;
};
let operator1 = "";
let  operator2 ="";
let signe = "";
let tableau=[]
let display = document.querySelector('.first-row-element')
let chiffre = document.querySelectorAll(".chiffre");
function test(element) {
    element.addEventListener("click", (element) => {
      const digit = element.target.textContent
      tableau.push(digit)
      display.textContent=tableau.toString().replaceAll(',', '')
    });
  }
chiffre.forEach(test);
console.log(tableau)

//erase the entire display
const effacer = document.querySelector('.effacer')
effacer.addEventListener('click',()=>{
    display.textContent='0'
    tableau=[]
})
//erase display digit per digit 

const supprimer = document.querySelector('.supprimer')
supprimer.addEventListener('click',()=>{
    tableau.pop()
    display.textContent=tableau.toString().replaceAll(',','')
})
