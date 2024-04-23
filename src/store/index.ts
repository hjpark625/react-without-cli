import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'

import counterReducer from '@/store/counter'

const env = process.env.NODE_ENV

const rootReducer = combineReducers({
  counter: counterReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = []
    if (env !== 'production') {
      middlewares.push(logger)
    }
    return getDefaultMiddleware().concat(middlewares)
  }
})
type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
