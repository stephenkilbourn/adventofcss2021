const whiteKeys = [...document.querySelectorAll('path.white-keys')]
const blackKeys = [...document.querySelectorAll('path.black-keys')]
const keys = [...whiteKeys, ...blackKeys]

let audio

keys.forEach((key, i) => {
  key.dataset.index = i + 1
  key.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    playSound(index)
  })
})

const playSound = (index) => {
  if(audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio = new Audio(`audio/key-${index}.mp3`)
  audio.play()
}