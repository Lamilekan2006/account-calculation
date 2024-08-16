const principal = document.querySelector('.sign-2')
const year = document.querySelector('#Years')
const Rate = document.querySelector('#Rate')
const Calculate = document.querySelector('#Calculate')
const output = document.querySelector('#output')
Calculate.addEventListener("click",function(e){
    e.preventDefault()
    let a = Number(principal.value)
    let b = Number(Years.value)
    let c = Number(Rate.value)
    let total = (a * b * c)/100
    output.innerHTML = total + Number(principal.value)
    console.log((total))
})



console.log(principal)
console.log(Years)
console.log(Rate)

function simpleinterest(a,b,c){
    let result = a*b*c
    return result
}
console.log(simpleinterest(2, 4,2))

