const keyLight = document.querySelector('#keyLight')

const keyLightModal = document.querySelector('#keyLightModal')
const closeButton = document.querySelector('.close')


const showModal = (event) => {
  event.preventDefault();
  keyLightModal.classList.add('showing')
}

const closeModal = (event) => {
  event.preventDefault();
  keyLightModal.classList.remove('showing')
}

keyLight.addEventListener('click', showModal)
closeButton.addEventListener('click', closeModal)