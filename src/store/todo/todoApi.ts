/* eslint consistent-return: ["off"] */
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {HYDRATE} from 'next-redux-wrapper'
import {TodoType} from './types/todo.type'

export const todoApi = createApi({
  reducerPath: 'todo',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),

  extractRehydrationInfo(action, {reducerPath}) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: ['Todo'],
  endpoints: (build) => ({
    getTodos: build.query<TodoType[], void>({
      query: () => ({
        url: '/todos',
      }),
    }),
  }),
})

export const {
  useGetTodosQuery,
  util: {getRunningOperationPromises},
} = todoApi
export const {getTodos} = todoApi.endpoints
