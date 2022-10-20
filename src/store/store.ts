import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import {createWrapper} from 'next-redux-wrapper'
import postReducer from './post/post.reducer'
import {todoApi} from './todo/todoApi'

// prettier-ignore
const makeStore = () => configureStore({
    reducer: {post: postReducer,
    [todoApi.reducerPath]: todoApi.reducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware),
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore)
