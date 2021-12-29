const h3Headers = document.querySelectorAll('h3')
const sidebarLinks = document.querySelectorAll('.toc > li')

window.addEventListener('scroll', () => {
  updateSideBar()
}, {passive: true})

const updateSideBar = () => {
  for (let index = 0; index < h3Headers.length; index++) {
    const header = h3Headers[index]
    if(elementInView(header)) {
      sidebarLinks.forEach( link => link.classList.remove('selected'))
      sidebarLinks[index].classList.add('selected')
      break;
    }
    
  }
}

const elementInView = (element) => {
  const elementTop = element.getBoundingClientRect().top
  return elementTop > 0 && elementTop <= window.innerHeight
}