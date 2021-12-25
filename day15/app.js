
const YOUR_API_KEY = null

const featureTitle = document.querySelector('.feature > h1')
const featureDescription = document.querySelector('.feature > p')
 const featureEmbedIframe = document.querySelector('.feature > .embed > iframe')
 const galleryElement = document.querySelector('.gallery')

const loadVideos = async () => {
  if(YOUR_API_KEY ) {
    try {
      const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUR_API_KEY}&channelId=UC-T8W79DN6PBnzomelvqJYw&part=snippet,id&order=date&maxResults=20`)
      const {items} = await res.json()
      return items
    } catch(err) {
      console.error(error)
    }
  } else {
    const res = await fetch('./sampleData.json')
    const {items} = await res.json()
    return items
  }

}

const displayVideos = async () => {
  const videos = await loadVideos()
  const {title, description} = videos[0].snippet
  const{videoId} = videos[0].id

  console.log(title, description, videoId)

  featureTitle.innerText = title
  featureDescription.innerText = description

  featureEmbedIframe.src = `https://www.youtube.com/embed/${videoId}`

  // ignore first video because it is in feature
  const galleryHTMLString = videos.slice(1).map(video => {
    const {videoId} = video.id
    const {title, thumbnails} = video.snippet
    const thumbnail = thumbnails.default.url
    const href = `https://youtube.com/watch?v=${videoId}`
    return `
    <li>
        <a class="video" href="${href}">
            <img src="${thumbnail}" alt="${title}">
            <h3>${title.substring(0,20)}...</h3>
        </a>
    </li>
`;
  }).join('')

  galleryElement.innerHTML = galleryHTMLString
}

displayVideos()