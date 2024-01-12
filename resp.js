const input =document.getElementsByClassName('emp-cont-range'),
      employeeContribution=document.getElementsByClassName('emp-cont');

input[0].addEventListener("input",()=>{
    employeeContribution[0].textContent=input[0].value+'%'
})
input[1].addEventListener("input",()=>{
    employeeContribution[1].textContent=input[1].value
})

let search=document.getElementById('srh'),
    search2=document.getElementById('ser')
let inp=document.getElementById('search')

search.addEventListener('click',()=>{
    inp.classList.toggle('v-class')
})
search2.addEventListener('click',()=>{
    inp.classList.toggle('v-class')
})

