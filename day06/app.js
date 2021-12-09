const priceRange = document.getElementById('priceRange')
const dollarsText = document.querySelector('.dollars')

priceRange.addEventListener('input', (e) => updatePrice(e.target.value))

const updatePrice = (priceInCents) => {
  const dollars = Math.floor(priceInCents / 100)
  const cents = priceInCents % 100
  const paddedCents = cents.toString().padStart(2, '0')
  const price = `${dollars}.${paddedCents}`
  dollarsText.innerText = price
}

priceRange.addEventListener( 'input', (e) => {
  console.log(e.target.value)
  priceRange.style.background = `linear-gradient(to right, hsla(341, 81%, 56%, 1) 0%, hsla(341, 81%, 56%, 1) ${e.target.value/100}%, hsla(250, 4%, 31%, 1) ${e.target.value/100}%, hsla(250, 4%, 31%, 1) 100%)`
} );