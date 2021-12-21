const choiceButtons = [...document.querySelectorAll('.pick-one button')]

console.log(choiceButtons)

choiceButtons.forEach( (button, i) => {
  button.addEventListener('click', () => {
    userChoice = i
    computerChoice = Math.floor(Math.random() * 3)
    window.location.href = `./winner.html?user=${userChoice}&computer=${computerChoice}`
  })
})