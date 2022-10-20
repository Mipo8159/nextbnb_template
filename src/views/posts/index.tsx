import {useAppSelector} from '@src/hooks/redux'
import React from 'react'

function PostsView() {
  const {isLoading, postError, posts} = useAppSelector(
    (state) => state.post
  )
  if (isLoading) {
    return <h1>Loading ...</h1>
  }

  return (
    <div>
      {postError && <h3>{postError}</h3>}
      {posts && posts.map((post) => <div key={post.id}>{post.title}</div>)}
    </div>
  )
}

export default PostsView
