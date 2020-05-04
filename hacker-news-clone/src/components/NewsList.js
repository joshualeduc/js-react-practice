import React, { useState } from 'react'
import { getTopStories } from 'utils/getNews'

export default function NewsList () {
  const [stories, setStories] = useState()

  const handleClick = () => {
    getTopStories().then(data => setStories(data))
  }
  return (
    <>
      <p>News</p>
      <button onClick={handleClick}>News</button>
      {stories &&
      JSON.stringify(stories)}
    </>
  )
}
