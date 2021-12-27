const dayBoxes = [...document.querySelectorAll('.square')]
const overlay = document.querySelector('.overlay')
const caption = document.querySelector('.overlay .caption')
const thumbnail = document.querySelector('.overlay .thumbnail')


const indexToDayDescriptionMap = {
  0: "Pomodoro Timer",
  1: "E-Commerce Component",
  2: "Piano",
  3: "Magic Keyboard Game",
  4: "Checkbox List",
  5: "Range Slider",
  6: "Tip Calculator",
  7: "Weather App",
  8: "Image Carousel",
  9: "Verification Code",
  10: "FAQ Accordion ",
  11: "Rock Paper Scissors",
  12: "Modals",
  13: "Date Picker",
  14: "Video Playlist"
}

dayBoxes.forEach((key, i) => {
  key.dataset.index = i + 1
  key.addEventListener('mouseenter', (e) => {
    if (i < 15) {
      showInfo(i)
    }

  })
  key.addEventListener('mouseleave', (e) => {
    hideInfo(i)
  })
})

console.log('caption: ', thumbnail)

const showInfo = (index) => {
  thumbnail.src = `./images/day${index + 1}.jpg`
  overlay.setAttribute('style', 'display: revert;')
  caption.innerText = indexToDayDescriptionMap[index]
}

const hideInfo = (index) => {
  overlay.setAttribute('style', 'display: none;')
  caption.innerText = ''
}