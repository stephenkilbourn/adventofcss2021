const faqs = document.querySelectorAll('ul li a')



const toggle = (event) => {
  event.preventDefault();
  const li = event.target.closest('li')

  if (li.classList.contains('expand')) {
    li.classList.remove('expand')
    li.querySelector('.answer').setAttribute('style', 'height: 0px')
  } else {
    li.classList.add('expand')
    const sectionHeight = li.querySelector('.answer').scrollHeight
    console.log(sectionHeight)
    li.querySelector('.answer').setAttribute('style', `height: ${sectionHeight}px`)
  }
}

faqs.forEach( (question, i)  => {
  question.addEventListener('click', toggle)
});