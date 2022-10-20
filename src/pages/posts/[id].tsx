import {PostType} from '@src/store/post/types/post.type'
import PostDetailsView from '@src/views/posts/PostDetails.view'
import axios from 'axios'
import {GetServerSideProps, NextPage} from 'next'

/* SERVER */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {data} = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${ctx.query.id}`
  )

  return {
    props: {post: data},
  }
}

/* CLIENT */
type PageProps = {
  post: PostType
}
const PostDetails: NextPage<PageProps> = function PostDetails({post}) {
  return <PostDetailsView post={post} />
}

export default PostDetails
