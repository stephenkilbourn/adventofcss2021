const keys = [...document.querySelectorAll('.key')]

const numberKeys = keys.length

const randomKey = () => {
  return Math.floor(Math.random() * (numberKeys))
}

let vibratingKey = document.querySelector('.jiggle')

const getVibratingKey = () => {
  let keyCode = vibratingKey.innerText
  return keyCode.toLowerCase() 
}

document.addEventListener('keyup', (e) => {
  let formattedKey = getVibratingKey()
  if (e.key === formattedKey) {
    vibratingKey.classList.remove('jiggle')
    newRandomKey()
  }
});

const newRandomKey = () => {
  let newKeyIndex = randomKey()
  keys[newKeyIndex].classList.add('jiggle')
  vibratingKey = keys[newKeyIndex]
}

newRandomKey()