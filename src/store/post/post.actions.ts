import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getPosts = createAsyncThunk(
  'getPosts',
  async (_, thunkApi) => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )

      return thunkApi.fulfillWithValue(res.data)
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const getPost = createAsyncThunk(
  'getPost',
  async (id: number, thunkApi) => {
    try {
      const res = await axios.get(
        `/https://jsonplaceholder.typicode.com/posts/${id}`
      )
      return thunkApi.fulfillWithValue(res.data)
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
