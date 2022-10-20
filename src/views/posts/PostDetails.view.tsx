import {PostType} from '@src/store/post/types/post.type'
import React from 'react'

interface PostDetailsViewProps {
  post: PostType
}

function PostDetailsView({post}: PostDetailsViewProps) {
  return (
    <div>
      {post && (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}
    </div>
  )
}
export default PostDetailsView
