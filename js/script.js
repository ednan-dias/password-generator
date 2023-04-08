import { characters } from './utils'

const inputSize = document.getElementById('size')
const sectionPassword = document.querySelector('section.password')
const strongText = document.querySelector('section.password p strong')
const buttonCopy = document.querySelector('section.password button')

const password = []


function choiceRandom() {
  const index = Math.floor(Math.random() * characters.length)
  return characters[index]
}

function generatePassword() {
  password.length = 0

  const value = Number(inputSize.value.replace(/\D/g, ''))

  if (value < 8 || value > 15) {
    alert('Escolha um valor entre 8 e 15.')
    inputSize.value = 15
  }

  let c = 0
  while (c < value) {
    const pass = choiceRandom()
    password.push(pass)

    c++
  }

  strongText.innerHTML = password.join('')
  sectionPassword.classList.remove('hidden')
}

function copyPassword() {
  navigator.clipboard.writeText(password.join(''))

  buttonCopy.textContent = 'Copied!'
}


