import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCommentsPageData } from 'utils/api'
import { NewsItem } from 'components/NewsList'

function Comment ({ commentData }) {
  const { by, time, text } = commentData
  const publishDate = new Date(time)

  function createMarkup () {
    return { __html: text }
  }

  return (
    <div>
      <p>by <Link to={`/user/${by}`}>{by}</Link> on {publishDate.toLocaleString()}</p>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

export default function Comments () {
  const { storyId } = useParams()
  const [comments, setComments] = useState()
  const [story, setStory] = useState()

  useEffect(() => {
    getCommentsPageData(storyId).then(pageData => {
      setComments(pageData.comments)
      setStory(pageData.story)
    })
  }, [storyId])
  return (
    <>
      {story && <NewsItem story={story} />}
      {comments &&
        comments.map(comment => (
          <Comment commentData={comment} key={comment.id} />
        ))}
    </>
  )
}
