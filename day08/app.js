const lat = document.getElementById('lat').value
const lon = document.getElementById('lon').value
const button = document.querySelector('button')

const daysElements = [...document.querySelectorAll('.day')]

const daysOfWeekMap = {
  0: 'SUN',
  1: 'MON',
  2: 'TUE',
  3: 'WED',
  4: 'THUR',
  5: 'FRI',
  6: 'SAT'
}

const iconNameToSizeMap = {
  cloudy: { width: 264, height: 166 },
  sunny: { width: 208, height: 213 },
  stormy: { width: 246, height: 187 },
  snowy: { width: 230, height: 196 },
  'partly-cloudy': { width: 230, height: 209},
  rainy: { width: 160, height: 222 },
}



const getWeatherData = async (key) => {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${key}&units=imperial`)
    const data = await res.json()
    const retValue = data.daily.map(dayWeather => {
      let returnedWeatherType = dayWeather.weather[0].id
      let weatherType = "sunny"
        if (returnedWeatherType >= 200 && returnedWeatherType < 300) {
          weatherType = 'stormy'
        } else if (returnedWeatherType >= 300 && returnedWeatherType < 600) {
          weatherType = 'rainy'
        } else if (returnedWeatherType >= 600 && returnedWeatherType < 700) {
          weatherType = 'snowy'
        } else if (returnedWeatherType >= 800 && returnedWeatherType < 803) {
          weatherType = 'partly-cloudy'
        } else if (returnedWeatherType >= 803 && returnedWeatherType < 805) {
          weatherType = 'cloudy'
        }


      const retValue = {
        minTemp: Math.round(dayWeather.temp.min),
        maxTemp: Math.round(dayWeather.temp.max),
        pop: Math.round(dayWeather.pop * 100),
        weatherType
      }
      return retValue
    })
    return retValue
  } catch (err) {
    console.error(err)
  }
}

const updateUI = (weatherData) => {

  const currentDateObj = new Date()
  const currentDayofWeek = currentDateObj.getDay()
  const currentDate = currentDateObj.getDate()

  daysElements.forEach((dayElement, i) => {
  const dayElementChildren = dayElement.childNodes;
  const dayOfWeek = dayElementChildren[1]
  dayOfWeek.innerText = daysOfWeekMap[(currentDayofWeek + i) % 7]

  const date = dayElementChildren[3]
  date.innerText = currentDate + i
  
  const dayWeather = weatherData[i]  
  const bar = dayElementChildren[5]
  bar.setAttribute('class', '')
  bar.classList.add('bar')
  bar.classList.add(dayWeather.weatherType)
 

  barChildren = bar.childNodes
  const weather = barChildren[1]
  const svgUse = weather.childNodes[1].childNodes[1]
  svgUse.setAttribute('xlink:href', `#${dayWeather.weatherType}`);
  svgUse.height = iconNameToSizeMap[dayWeather.weatherType].height;
  svgUse.width = iconNameToSizeMap[dayWeather.weatherType].width;

  const temperature = barChildren[3]
  temperature.innerHTML = `
    ${dayWeather.maxTemp}
    <span class="degrees">&deg;</span>
  `

  const content = barChildren[5]
  const precipitation = content.children[0]
  const low = content.children[1]

  precipitation.innerHTML = `
    <svg role="img" class="icon">
      <use xlink:href="#precipitation"></use>
    </svg>
    ${dayWeather.pop}%
  `

  low.innerHTML = `
    <svg role="img" class="icon">
      <use xlink:href="#low"></use>
    </svg>
    ${dayWeather.minTemp}&deg;
  `
})
}

button.addEventListener('click', () => {
  const key = document.getElementById('apiKey').value

  loadData(key)
})

const loadData = async (key) => {
  const weatherData = await getWeatherData(key)
  updateUI(weatherData)
}