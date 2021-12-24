const dateNumbersElements = [...document.querySelectorAll('.date-number')]
const previousButton = document.querySelector('.previous button')
const nextButton = document.querySelector('.next button')
const monthText = document.querySelector('.month')

const now = new Date()
let currentMonth = now.getMonth()
let currentyear = now.getFullYear()

const monthIndexToName = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
}

const renderMonth = (monthIndex, year) => {
  // 0 as last parameter gets last day of previous month
  // so look at next monthIndex, then 0 to get this mont's last day
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const firstDate = new Date(year, monthIndex)
  const firstDay = firstDate.getDay()

  dateNumbersElements.forEach( (el, i) => {
    const dateNumber = i + 1 - firstDay
    
     if (dateNumber <= daysInMonth && dateNumber > 0) {
      el.innerText = dateNumber
     } else {
       el.innerText = ''
     }

     const today = new Date()
     if( today.getDate() === dateNumber && today.getMonth() === monthIndex && today.getFullYear() === year) {
       el.classList.add('today')
     } else {
       el.classList.remove('today')
     }
  })
  monthText.innerText = `${monthIndexToName[monthIndex]} - ${year}`
}

previousButton.addEventListener('click', () => {
  if(currentMonth === 0) {
    currentyear --
    currentMonth = 1
  } else {
    currentMonth--
  }
  renderMonth(currentMonth, currentyear)
})

nextButton.addEventListener('click', () => {
  if (currentMonth === 11) {
    currentyear++
    currentMonth = 0
  } else {
    currentMonth++
  }
  renderMonth(currentMonth, currentyear)
})

renderMonth(currentMonth, currentyear)