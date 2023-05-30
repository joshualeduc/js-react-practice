export async function getTopStories () {
  const response = await window.fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  const stories = await response.json()
  const page = stories.slice(0, 4).map(async story => getStory(story))

  return Promise.all(page)
}

export async function getNewStories () {
  const response = await window.fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
  const stories = await response.json()
  const page = stories.slice(0, 4).map(async story => getStory(story))

  return Promise.all(page)
}

async function getStory (story) {
  const response = await window.fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`)
  const fullStory = await response.json()
  return fullStory
}
