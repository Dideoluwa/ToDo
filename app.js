let button = document.querySelector('#btn1')
let btn = document.querySelector('#btn')
let input1 = document.querySelector('#first')
let input2 = document.querySelector('#second')
let h1 = document.querySelector('h1')
let div = document.querySelector('.txt')
let form = document.querySelector('#form')
let p = document.querySelectorAll('p')
let clr = document.querySelector('.clr')
let span = document.querySelector('span')
let arr = []

input1.addEventListener('input', function () {
    let val = input1.value
    h1.textContent = val
    if (val === '') {
        h1.innerText = 'ToDo...'
    }
})
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let userInput = input1.value
    arr.push(userInput)
    let para = document.createElement('p')
    for (i = 0; i < arr.length; i++) {
        // console.log(`${i}: ${arr[i]}`)
    }
    para.textContent = `${i}: ${userInput}`
    div.append(para)
    para.style.fontSize = '22px';
    // console.log(userInput)
    input1.value = ''
    para.addEventListener('click', function () {
        para.classList.toggle('evntclick')
    })
    if (input1.value === '') {
        h1.innerText = 'ToDo...'
    }
    para.addEventListener('dblclick', function () {
        para.innerHTML = ''
        let userInput = input1.value
        arr.splice(userInput, 1)
    })
})
for (let para of p){
    para.addEventListener('click', function () {
        para.classList.toggle('evntclick')
    })
    para.addEventListener('dblclick', function () {
        para.innerHTML = ''
        let userInput = input1.value
        arr.splice(userInput, 1)
    })
}
button.addEventListener('click', function () {
    div.innerHTML = ''
    let userInput = input1.value
    arr.splice(userInput, arr.length)
    // console.log('done')
})
clr.addEventListener('click', function () {
    // console.log('clicked')
    document.body.style.backgroundImage = `linear-gradient(to right, ${randomClr()}, ${randomClr()})`
    document.body.classList.add('click')
})
function randomClr() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

