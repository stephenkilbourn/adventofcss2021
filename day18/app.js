const passwordInput = document.getElementById('password')
const copyButton = document.querySelector('.copy')

const inputs = [...document.querySelectorAll('input:not([type="text"])')]
const lengthInput = document.getElementById('length')
const lengthText = document.getElementById('lengthText')
const numbers = [2,3,4,5,6,7,8,9]
const symbols = ["!", "2", "#", "$", "%", "^", "&", "*", ",", "."]
const similarLowerCaseLetters = ["i", "l", "o"]
const similarUpperCaseLetters = ["L", "O"]

const similarNumbers = [0, 1]

// generate character codes
const characterCodes = Array.from(Array(26)).map((_, i) => i + 97)
// indexes of similar letters
const characterSkipCodes = [8, 11, 14]

const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code)).filter( (_, i) => !characterSkipCodes.includes(i))
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase())

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordInput.value)
  copyButton.classList.add('copied')
  setTimeout(() => {
    copyButton.classList.remove('copied')
  }, 5000)
})

const updatePassword = () => {
  const length = lengthInput.value
  console.log('length', length)
  // first input was a Range, so skipping
  const checkboxValues = inputs.slice(1).map(input => input.checked)
  const password = generatePassword(length, ...checkboxValues)
  console.log('password: ', password)
  passwordInput.value = password
  lengthText.innerText = length
  copyButton.classList.remove('copied')
}

inputs.forEach(input => input.addEventListener('change', updatePassword))

const generatePassword = (
  length,
  hasSymbols,
  hasNumbers,
  hasLowerCase,
  hasUpperCase,
  hasSimilars
  ) => {
    let availableCharacters = [
      ...(hasSymbols ? symbols : []),
      ...(hasNumbers ? numbers : []),
      ...(hasLowerCase ? lowercaseLetters : []),
      ...(hasUpperCase ? uppercaseLetters : []),
    ]

    if(hasSimilars) {
      if(hasLowerCase) {
        availableCharacters = [...availableCharacters, ...similarLowerCaseLetters]
      }
      if(hasUpperCase) {
        availableCharacters = [...availableCharacters, ...similarUpperCaseLetters]
      }
      if(hasNumbers) {
        availableCharacters = [...availableCharacters, ...similarNumbers]
      }
    }

    let password = ""

    if(availableCharacters.length === 0) return "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableCharacters.length)
      password+= availableCharacters[randomIndex]
    }
    return password
}

updatePassword()