const creditCardElement = document.querySelector('.credit-card__wrapper')
const cardNumberInput = document.querySelector('input[name="card-number"]')
const cvvInput = document.querySelector('input[name="cvv"]')
const cardNumberShadow = document.querySelector('.card-number__shadow')
const cardNumberEmboss = document.querySelector('.card-number__emboss')
const cardHolderInput = document.querySelector('input[name="card-holder"]')
const cardHolderShadow = document.querySelector('.card-holder__shadow')
const cardHolderEmboss = document.querySelector('.card-holder__emboss')
const signature = document.querySelector('.signature')

const firstNumberToCardBrandMap = {
  3: "american",
  4: "visa",
  5: "mastercard",
  6: "discover"
}

cardNumberInput.addEventListener('blur', (e) => {
  const cardNumber = cardNumberInput.value
  const cardType = firstNumberToCardBrandMap[cardNumber[0]]

  if(cardType) {
    creditCardElement.classList = ""
    creditCardElement.classList.add('credit-card__wrapper')
    creditCardElement.classList.add(cardType)
  }
})

cardNumberInput.addEventListener('keydown', (e) => {
  cardNumberEmboss.innerHTML = e.target.value
  cardNumberShadow.innerHTML = e.target.value
})

cardHolderInput.addEventListener('keydown', (e) => {
  console.log(e.target.value)
  cardHolderEmboss.innerHTML = e.target.value
  cardHolderShadow.innerHTML = e.target.value
  signature.innerHTML = e.target.value
})

cvvInput.addEventListener('focus', (e) => {
  creditCardElement.classList.add('flip')
})

cvvInput.addEventListener('blur', (e) => {
  creditCardElement.classList.remove('flip')
})

