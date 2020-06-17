export async function getTopStories () {
  const response = await window.fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  const stories = await response.json()
  const page = stories.slice(0, 4).map(async story => getItem(story))

  return Promise.all(page)
}

export async function getNewStories () {
  const response = await window.fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
  const stories = await response.json()
  const page = stories.slice(0, 4).map(async story => getItem(story))

  return Promise.all(page)
}

export async function getUserPageData (userId) {
  const response = await window.fetch(`https://hacker-news.firebaseio.com/v0/user/${userId}.json?print=pretty`)
  const userData = await response.json()
  const page = userData.submitted.slice(0, 4).map(async story => getItem(story))

  return { userData, stories: await Promise.all(page) }
}

export async function getCommentsPageData (storyId) {
  const story = await getItem(storyId)
  const page = story.kids.slice(0, 4).map(async comment => getItem(comment))

  return { story, comments: await Promise.all(page) }
}

async function getItem (itemNumber) {
  const response = await window.fetch(`https://hacker-news.firebaseio.com/v0/item/${itemNumber}.json?print=pretty`)
  const item = await response.json()
  return item
}
