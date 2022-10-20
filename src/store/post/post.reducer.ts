/* eslint no-param-reassign: ["off"] */
/* eslint consistent-return: ["off"] */

import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'
import {getPost, getPosts} from './post.actions'
import {PostState} from './types/post.state'
import {PostType} from './types/post.type'

const initialState: PostState = {
  isLoading: true,
  postError: null,
  posts: [],
  post: {} as PostType,
}

const postReducer = createSlice({
  name: 'Post',
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (
      state: PostState,
      action: PayloadAction<{post: PostState}>
    ) => {
      if (!action.payload.post.posts) {
        return state
      }

      state.isLoading = action.payload.post.isLoading
      state.postError = action.payload.post.postError
      state.posts = action.payload.post.posts
    },

    [getPosts.pending.type]: (state: PostState) => {
      state.isLoading = true
    },
    [getPosts.fulfilled.type]: (
      state: PostState,
      action: PayloadAction<PostType[]>
    ) => {
      state.isLoading = false
      state.posts = action.payload
      state.postError = null
    },
    [getPosts.rejected.type]: (
      state: PostState,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false
      state.postError = action.payload
    },

    [getPost.pending.type]: (state: PostState) => {
      state.isLoading = true
    },
    [getPost.fulfilled.type]: (
      state: PostState,
      action: PayloadAction<PostType>
    ) => {
      state.isLoading = false
      state.post = action.payload
      state.postError = null
    },
    [getPost.rejected.type]: (
      state: PostState,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false
      state.postError = action.payload
    },
  },
})

export default postReducer.reducer
