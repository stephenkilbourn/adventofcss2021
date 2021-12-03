const menu = document.querySelector('ul.menu')
const cartSummary = document.querySelector('.cart-summary')
const totalText = document.querySelector('.amount.price.total');
const taxText = document.querySelector('.amount.price.tax');
const subtotalText = document.querySelector('.amount.price.subtotal');


const menuItems = [
  {
      name: 'French Fries with Ketchup',
      price: 223,
      image: 'plate__french-fries.png',
      alt: 'French Fries',
      count: 0
  },
  {
      name: 'Salmon and Vegetables',
      price: 512,
      image: 'plate__salmon-vegetables.png',
      alt: 'Salmon and Vegetables',
      count: 0
  },
  {
      name: 'Spaghetti Meat Sauce',
      price: 782,
      image: 'plate__spaghetti-meat-sauce.png',
      alt: 'Spaghetti with Meat Sauce',
      count: 0
  },
  {
      name: 'Bacon, Eggs, and Toast',
      price: 599,
      image: 'plate__bacon-eggs.png',
      alt: 'Bacon, Eggs, and Toast',
      count: 0
  },
  {
      name: 'Chicken Salad with Parmesan',
      price: 698,
      image: 'plate__chicken-salad.png',
      alt: 'Chicken Salad with Parmesan',
      count: 0
  },
  {
      name: 'Fish Sticks and Fries',
      price: 634,
      image: 'plate__fish-sticks-fries.png',
      alt: 'Fish Sticks and Fries',
      count: 0
  }
]

const renderMenu = () => {
  const menuItemsHTMLString = menuItems.map( (item, index) => {
    const [dollars, cents] = getDollarsAndCents(item.price)
    const formattedPrice = formatPrice(dollars, cents)
    const inCart = item.count > 0
    return `
      <li>
        <div class="plate">
          <img src="images/${item.image}" alt="${item.alt}"/>
        </div>
        <div class="content">
          <div class="menu-item">${item.name}</div>
          <div class="price">${formattedPrice}</div>
          ${!inCart ? `<button class="add" onClick="addToCart(${index})">Add to cart</button>` : 
            `<button class="in-cart">
              <img src="images/check.svg" alt="checkmark" />
              In Cart
            </button> `}
        </div>
      </li>
    `
  }).join('')
  menu.innerHTML = menuItemsHTMLString
}

const renderCart = () => {
  const cartSummaryHTMLString = menuItems.map((menuItem, index) => {
      if(menuItem.count === 0) return "";
    const [dollars, cents] = getDollarsAndCents(menuItem.price)
    const formattedPrice = formatPrice(dollars, cents);
    const subtotalPrice = menuItem.price * menuItem.count;
    const [subtotalDollars, subtotalCents] = getDollarsAndCents(subtotalPrice);
    const formattedSubtotalPrice = formatPrice(subtotalDollars, subtotalCents)
    return `
      <li>
        <div class="plate">
          <img src="images/${menuItem.image}" alt="${menuItem.alt}" />
          <div class="quantity">${menuItem.count}</div>
        </div>
        <div class="content">
          <p class="menu-item">${menuItem.name}</p>
          <p class="price">${formattedPrice}</p>
        </div>
        <div class="quantity_wrapper">
          <button class="decreases" onClick="subtractCountFromItem(${index})">
            <img src="images/chevron.svg" alt="decreases"/>
          </button>
          <div class="quanitity">${menuItem.count}</div>
          <button class="increases" onClick="addCountToItem(${index})">
            <img src="images/chevron.svg" alt="increases"/>
          </button>
        </div>
        <div class="subtotal">${formattedSubtotalPrice}</div>
      </li>
    `
    }).join('')
  cartSummary.innerHTML = cartSummaryHTMLString;

  const subtotalPrice = menuItems.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.count
  }, 0)
  const [subTotalDollars, subTotalCents] = getDollarsAndCents(subtotalPrice)
  subtotalText.innerText= formatPrice(subTotalDollars, subTotalCents)
 
  taxPrice = Math.floor(subtotalPrice * 0.0875)
  const [taxDollars, taxCents] = getDollarsAndCents(taxPrice)
  taxText.innerText = formatPrice(taxDollars, taxCents)

  totalPrice = subtotalPrice + taxPrice;
  const [totalDollars, totalCents] = getDollarsAndCents(totalPrice)
  totalText.innerText = formatPrice(totalDollars, totalCents)
}

const addCountToItem = (index) => {
  menuItems[index].count++
  renderCart()
}

const subtractCountFromItem = (index) => {
  if(menuItems[index].count > 0) {
    menuItems[index].count--
    if(menuItems[index].count ===0){
      renderMenu()
    }
    renderCart()
  }
}

const addToCart = (index) => {
  menuItems[index].count++
  renderMenu()
  renderCart()
}

const getDollarsAndCents = (priceInPennies) => {
  const dollars = Math.floor(priceInPennies/100)
  const cents = priceInPennies % 100;
  return [dollars, cents]
}

const formatPrice = (dollars, cents) => {
  if(cents >= 0 && cents < 10) {
    return `$${dollars}.0${cents}`
  }
  return `$${dollars}.${cents}`
}

renderMenu();