const episodes = [
  {
    id: 39,
    title: 'Tech to Look Forward to in 2022',
    description: 'In this episode, Amy and James discuss the future of web development: Astro, Veet, Supabase, SvelteKit, Redwood.js, Blitz.js, GitHub Co-Pilot, Web Assembly, Blockchain, w3, no-code, and low-code.',
    cover: 'cover__episode-39.png',
    link: 'https://www.compressed.fm/episode/39'
  },
  {
    id: 38,
    title: '2021 Gift Guide',
    description: 'This episode is full of picks! Amy and James talk about all of their favorite things, just in time for the holidays.',
    cover: 'cover__episode-38.png',
    link: 'https://www.compressed.fm/episode/38'
  },
  {
    id: 37,
    title: 'Building a Course',
    description: 'In this episode, Amy and James discuss all the things that go into course creation: why? What? How? Where to Host? Building the right audience.',
    cover: 'cover__episode-37.png',
    link: 'https://www.compressed.fm/episode/37'
  },
  {
    id: 36,
    title: 'SVGs FTW',
    description: 'In this episode, Amy and James discuss all things SVGs: what is, why and when to reach for it, and seven different ways to get an SVG on the page, and the pros and cons of each method.',
    cover: 'cover__episode-36.png',
    link: 'https://www.compressed.fm/episode/36'
  },
  {
    id: 35,
    title: 'Crossover Episode with Purrfect Dev',
    description: 'This is a crossover episode with our friends, Alex Patterson and Brittney Postma from the Purrfect.dev podcast. In this episode, we all discuss our jobs. Even though we\'re all in tech, our day- to - day work looks vastly different.',
    cover: 'cover__episode-35.png',
    link: 'https://www.compressed.fm/episode/35'
  },
  {
    id: 34,
    title: 'Getting git',
    description: 'In this episode, Amy and James explain the fundamentals of git and their most-used commands. They also explain basic different workflows, if you\'re working with a team or by yourself.',
    cover: 'cover__episode-34.png',
    link: 'https://www.compressed.fm/episode/34'
  },
  {
    id: 33,
    title: 'Small Design Tweaks that Make All the Difference',
    description: 'In this episode, Amy and James talk about small design tweaks that you can make that will make a big difference. These recommendations are helpful if you\'re looking for basic principles and guidelines to take your site to the next level.',
    cover: 'cover__episode-33.png',
    link: 'https://www.compressed.fm/episode/33'
  },
]

const tabsList = document.getElementById('tabs')
const selectedTitleText = document.querySelector('.content > h1')
const selectedDescriptionText = document.querySelector('.content > p')
const selectedLink = document.querySelector('.content > a')
const coverImage = document.querySelector('.cover > img')
let tabElements

const renderEpisodesTab = () => {
  tabsList.innerHTML = episodes.map( (episode, index) => `
    <li onClick="selectEpisode(${index})">
      <a href="#">
        <div class="episode">Episode ${episode.id}</div>
        <div class="title">${episode.title}</div>
      </a>
    </li>
  `).join('')
  tabElements = document.querySelectorAll('ul#tabs > li')
}

const selectEpisode = (index) => {
  const {title, cover, description, link} = episodes[index]
  selectedTitleText.innerText = title
  selectedDescriptionText.innerText = description
  coverImage.src = `./images/${cover}`
  coverImage.alt = title
  selectedLink.href = link
  tabElements.forEach(tab => tab.classList.remove('selected'));
  tabElements[index].classList.add('selected')
}

renderEpisodesTab()
selectEpisode(0)