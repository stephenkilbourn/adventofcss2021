const body = document.querySelector('body')
const playAgain = document.querySelector('.play-again')
const userImage = document.querySelector('.your-pick > img')
const computerImage = document.querySelector('.computer-pick > img')

const youWinText = document.querySelector('.you-win')
const computerWinsText = document.querySelector('.computer-wins')


const params = new URLSearchParams(window.location.search)
const user = params.get("user")
const computer = params.get("computer")

const choiceToImageMap = {
  "0": {image: "rock.png", alt: "rock"},
  "1": {image: "paper.png", alt: "paper"},
  "2": {image: "scissors.png", alt: "scissors"}
}

userImage.src = `./images/${choiceToImageMap[user].image}`
userImage.alt = `${choiceToImageMap[user].alt}`

computerImage.src = `./images/${choiceToImageMap[computer].image}`
computerImage.alt = `${choiceToImageMap[computer].alt}`

playAgain.addEventListener('click', () => {
  window.location.href = './'
  }
)

const checkWinner = () => {
  let winner = null
  if (user === computer) {
    winner ="tie"
  } else if (user === "0" && computer === "1") {
    winner = "computer"
  } else if (user === "0" && computer === "2") {
    winner = "you"
  } else if (user === "1" && computer === "0") {
    winner = "you"
  } else if (user === "1" && computer === "2") {
    winner = "computer"
  } else if (user === "2" && computer === "0") {
    winner = "computer"
  } else if (user === "2" && computer === "1") {
    winner = "you"
  }

  if( winner === "tie") {
    youWinText.innerText = "TIE"
    computerWinsText.innerText = "TIE"
  } else if (winner == "you") {
    body.classList.add('you-win')
    youWinText.innerText = "You Win!"
  } else {
    body.classList.add('computer-wins')
    computerWinsText.innerText = "Computer Wins"

  }
}

checkWinner()