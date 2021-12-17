const verificationInputs = [...document.querySelectorAll('.fields > input[type="text"')]

verificationInputs.forEach( (input, i) => {
  input.addEventListener('keyup', e => {
    if(e.key === 'Shift' || e.key === 'Tab') return
    if(!e.target.value) return;
    if( i === verificationInputs.length - 1) {
      return verify()
    }
    verificationInputs[i + 1].focus()
  })
})

verificationInputs[0].addEventListener('paste', e=> {
  navigator.clipboard.readText()
    .then(text => {
      verificationInputs.forEach( (input, i) => {
        input.value = text[i]
      })
      verificationInputs.at(-1).focus()
    }).catch(err => console.error)
})

const verify = () => {
  const password = verificationInputs.map(input => input.value).join('')
  console.log('password', password)
}