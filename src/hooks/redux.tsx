import {AppDispatch, AppState} from '@src/store/store'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
