const toaster = document.querySelector('.toaster')
const closeButton = document.querySelector('.close-toaster')

let toasterAlreadyOpened = false

const toggleToaster = (shouldBeOpen) => {
  if(shouldBeOpen && !toasterAlreadyOpened) {
    toaster.classList.remove('collapsed')
    toasterAlreadyOpened = true
    setTimeout(() => {
      toaster.classList.add('collapsed')
    }, 3000)
  } else {
    toaster.classList.add('collapsed')
  }
}


closeButton.addEventListener('click', () => toggleToaster(false))

// watch for intent to leave page //
document.addEventListener('mouseout', (e) => {
  if(!e.toElement && !e.relatedTarget) {
    toggleToaster(true)
  }
})

