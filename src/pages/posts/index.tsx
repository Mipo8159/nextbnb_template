import {getPosts} from '@src/store/post/post.actions'
import {wrapper} from '@src/store/store'
import {GetServerSideProps, NextPage} from 'next'
import dynamic from 'next/dynamic'

const PostsView = dynamic(() => import('@src/views/posts'), {ssr: false})

/* SERVER */ // prettier-ignore
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(getPosts())

    return {
      props: {},
    }
  }
)

/* CLIENT */
const PostsPage: NextPage = function PostsPage() {
  return <PostsView />
}

export default PostsPage
