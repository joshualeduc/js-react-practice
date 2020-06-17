import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getTopStories, getNewStories } from 'utils/api'

export function NewsItem ({ story }) {
  const { title, by, time, descendants, url, id } = story
  const publishDate = new Date(time)

  return (
    <>
      <a href={url}>{title}</a>
      <p>by <Link to={`/user/${by}`}>{by}</Link> on {publishDate.toLocaleString()} with <Link to={`/comments/${id}`}>{descendants}</Link> comments</p>
    </>
  )
}

export default function NewsList () {
  const [stories, setStories] = useState()
  const location = useLocation()

  const handleClick = () => {
    location.pathname.includes('new')
      ? getNewStories().then(data => setStories(data))
      : getTopStories().then(data => setStories(data))
  }
  return (
    <>
      <p>News</p>
      <button onClick={handleClick}>News</button>
      {stories &&
      stories.map(story => (
        <NewsItem story={story} key={story.id} />
      ))}
    </>
  )
}
