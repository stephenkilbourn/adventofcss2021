const incomeInput = document.getElementById('incomeInput')
const summaryIncome = document.getElementById('summary-income')
const venderInput = document.getElementById('vender')
const expenseAmountInput = document.getElementById('expenseAmount')
const addExpenseButton = document.getElementById('addExpenseButton')
const expenseTable = document.getElementById('expenseTable')
const sumaryExpenseTotal = document.getElementById('sumaryExpense')
const summaryBalance = document.getElementById('summaryBalance')

let count = 1

const formatMoney = (money) => {
  return `\$${Number(money).toFixed(2)}`
}

const removeDollar = (money) => {
  return Number(money.replace('$', ''))
}

const numberMask = (number) => {
  return number.replace(/[^0-9]/g, '')
}

const setIncome = (event) => {
  if(numberMask(event.target.value)) {
    summaryIncome.innerText = formatMoney(event.target.value)
    updateBalance()
  }
}

const removeRow = (event) => {
  const id = event.target.closest('button').getAttribute('data-delete-expense')
  console.log(id)

  const removeTheseItems = document.querySelectorAll(`[data-expense="item-${id}"]`)
  
  for (let index = 0; index < removeTheseItems.length; index++) {
    removeTheseItems[index].remove()
  }

  setExpenses()
  updateBalance()
}

const initRemoveRow = () => {
  const removeRowButtons = document.querySelectorAll('.delete-expense')
  for (let index = 0; index < removeRowButtons.length; index++) {
    removeRowButtons[index].addEventListener('click', removeRow)
  }
}

const setExpenses = () => {
  const allExpenses = document.querySelectorAll('.expense-table-amount')
  let total = 0
  for (let index = 0; index < allExpenses.length; index++) {
    const tValue = removeDollar(allExpenses[index].innerHTML)
    total = total + tValue
  }
  sumaryExpenseTotal.innerHTML = formatMoney(total)
}

const addExpense = (event) => {
  const expense = {
    vender : venderInput.value,
    amount: expenseAmountInput.value
  }

  if(numberMask(expense.amount)) {
    expenseTable.innerHTML += displayExpenseRow(expense)

    initRemoveRow()
  
    setExpenses()
    updateBalance()
    count++
  
    venderInput.value = ''
    expenseAmountInput.value = ''
  }
}

const displayExpenseRow = (expense) => {
  return `
  <div data-expense="item-${count}">${expense.vender}</div>
  <div class="expense-table-amount" data-expense="item-${count}">${formatMoney(expense.amount)}</div>
  <div class="delete" data-expense="item-${count}">
    <button name="delete-expense" id="delete-expense" class="delete-expense" data-delete-expense="${count}">
      <img src="./images/trash.svg" alt="delete">
    </button>
  </div>
  `
}

const updateBalance = () => {
  let income = 0

  if(summaryIncome.innerHTML) {
    income = removeDollar(summaryIncome.innerText)
  }
  
  let expenses = 0
  if(sumaryExpenseTotal.innerHTML) {
    expenses = removeDollar(sumaryExpenseTotal.innerText)
  }

  const balance = income - expenses
  summaryBalance.innerText = formatMoney(balance)

  if(balance < 0) {
    summaryBalance.classList.add('negative')
    summaryBalance.classList.remove('positive')
  } else if (balance > 0) {
    summaryBalance.classList.add('positive')
    summaryBalance.classList.remove('negative')
  } else {
    summaryBalance.classList.remove('negative')
    summaryBalance.classList.remove('positive')
  }
  
}

incomeInput.addEventListener('blur', setIncome)
addExpenseButton.addEventListener('click', addExpense)