import {PostType} from './post.type'

export type PostState = {
  isLoading: boolean
  postError: null | string
  posts: PostType[]
  post: PostType
}
