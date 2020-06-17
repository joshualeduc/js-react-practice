import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUserPageData } from 'utils/api'
import { NewsItem } from 'components/NewsList'

export default function User ({ match }) {
  const { userId } = useParams()
  const [user, setUser] = useState()
  const [stories, setStories] = useState()
  const createdDate = user ? new Date(user.created) : null

  useEffect(() => {
    getUserPageData(userId).then(pageData => {
      setUser(pageData.userData)
      setStories(pageData.stories)
    })
  }, [userId])

  return (
    <>
      {user &&
        <>
          <p>{userId}</p>
          <p>joined {createdDate.toLocaleString()} has {user.karma} karma</p>
          <p>Posts</p>
        </>}
      {stories &&
          stories.map(story => (
            <NewsItem story={story} key={story.id} />
          ))}
    </>
  )
}
