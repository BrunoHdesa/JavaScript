console.log('Bruno')
var nome = 'Bruno'
let numero = '32421936'
const idade = 18
const valendo = false

const lista = [] // Array
const obj = {} // Object

if (idade >= 18) {
    console.log('Maior de idade')
}
else {
    console.log('Menor de idade')
}

if (numero === '32421936') {
    console.log('True')
}
else {
    console.log('False')
}

if (lista === []) {
    console.log('verdadeiro')
}
else {
    console.log('falso')
}

const title = document.querySelector('h1')
const title2 = document.querySelector('h2')
const title22 = document.querySelector('#css')
const button = document.querySelector('#remove')
const input = document.querySelector('#texto')

console.log(title)
console.log(title2)
console.log(title22)

title.style.color = 'red'
title2.classList.add('text-purple')

button.addEventListener('click', function() {
    title2.classList.remove('text-purple')
})

input.addEventListener('keypress', function(){
    console.log('escreveu')
})