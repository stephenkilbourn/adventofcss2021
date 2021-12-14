const calculateButton = document.getElementById('calculate')

const totalPerPersonText = document.getElementById('total-per-person')
const tipAmountText = document.getElementById('tip-amount')

const billAmountInput = document.getElementById('bill-amount')
const numberOfPeopleInput = document.getElementById('number-of-people')

calculateButton.addEventListener('click', () => {
  const originalBillAmount = Number(billAmountInput.value);
  const numberOfPeople = Number(numberOfPeopleInput.value);
  if(numberOfPeople < 1) return

  const selectTipAmountRadio = document.querySelector('input[name="tip-amount"]:checked');
  const tipPercentage = Number(selectTipAmountRadio.value)/100;
  
  const tipAmount = Math.round((tipPercentage * originalBillAmount) * 100)/100
  const totalBill = originalBillAmount + tipAmount
  const perPerson = Math.round((totalBill / numberOfPeople) * 100) / 100

  totalPerPersonText.innerText = formatPrice(perPerson)
  tipAmountText.innerText = formatPrice(tipAmount)
})

const formatPrice = (price) => {
  let returnValue = price.toString()
  let parts = returnValue.split('.')
  if(parts[0].length === 1) {
    returnValue = "0" + returnValue
  }
  if(parts[1].length === 1) {
    returnValue += "0"
  }
  return returnValue
}