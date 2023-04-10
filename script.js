const inputSize = document.getElementById('size')
const sectionPassword = document.querySelector('section.password')
const strongText = document.querySelector('section.password p strong')
const buttonCopy = document.querySelector('section.password button')

const password = []

function choiceRandom() {
  const characters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];

  characters.map(c => characters.push(c.toUpperCase()))

  for (let c = 0; c < 10; c++) {
    characters.push(c.toString())
  }

  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', '{', ']', '}', '|', ':', ';', '<', ',', '.', '>', '?', '/'].map(val => characters.push(val))

  const index = Math.floor(Math.random() * characters.length)
  return characters[index]
}

function randomBackground() {
  const chars = ['A', 'B', 'C', 'D', 'E', 'F']
  const color = []

  for (let c = 0; c <= 9; c++) {
    chars.push(String(c))
  }

  for (let c = 1; c <= 6; c++) {
    const index = Math.floor(Math.random() * chars.length)
    color.push(chars[index])
  }

  return `#${color.join('')}`
}

(() => {
  const color = randomBackground()

  document.body.style.background = color

  setInterval(() => {
    const color = randomBackground()

    document.body.style.background = color
  }, 5000)
})()

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


