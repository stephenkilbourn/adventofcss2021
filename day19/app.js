const fields = document.querySelectorAll('.field')
const passwordInput = document.querySelector('input[name="password"]')
const confirmPasswordInput = document.querySelector('input[name="confirmPassword"]')

const showPasswordButton = document.querySelector('input[name="password"] ~ .show-hide')
const showConfirmPasswordButton = document.querySelector('input[name="confirmPassword"] ~ .show-hide')

showPasswordButton.addEventListener('click', (e) => {
  e.preventDefault()
  const currentType = passwordInput.type
  if(currentType === "text") {
    passwordInput.type = "password"
  } else {
    console.log('hiii')
    passwordInput.type = "text"
  }
  fields[2].classList.toggle('show')
})

showConfirmPasswordButton.addEventListener('click', (e) => {
  e.preventDefault()
  const currentType = confirmPasswordInput.type
  if(currentType === "text") {
    confirmPasswordInput.type = "password"
  } else {
    console.log('hiii')
    confirmPasswordInput.type = "text"
  }
  fields[3].classList.toggle('show')
})

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const nameToConfigMap = {
  name: {
    validator: (value) => !!value,
    err: 'A name is required.'
  },
  email: {
    validator: validateEmail,
    err: 'Must enter a valid email'
  },
  password: {
    validator: (value) => !!value,
    err: 'A password is required'
  },
  confirmPassword: {
    validator: (confirmPassword) => confirmPassword === passwordInput.value,
    err: 'Password and confirm password must match'
  }
}

fields.forEach((field) => {
  const children = field.childNodes;
  const input = children[1]
  input.addEventListener('blur', (e) => {
    const {name, value} = e.target
    const config = nameToConfigMap[name]

    const successElement = field.querySelector('div.success')
    const errorElement = field.querySelector('div.error')

    if(config.validator(value)) {
      successElement.innerHTML = '<img src="./images/success.svg" alt="success" />'
      errorElement.innerHTML = ''
    } else {
      successElement.innerHTML = ''
      errorElement.innerHTML = `<img src="./images/error.svg" alt="success" />${config.err}`
    }
  })
})