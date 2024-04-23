import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { createLogger } from 'redux-logger'

import counterReducer, { counterSaga } from '@/store/counter'

const env = process.env.NODE_ENV

const logger = createLogger()
const sagaMiddleWare = createSagaMiddleware()

const rootReducer = combineReducers({
  counter: counterReducer
})

function* rootSaga() {
  yield all([counterSaga()])
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = []
    middlewares.push(sagaMiddleWare)
    if (env !== 'production') {
      middlewares.push(logger)
    }
    return getDefaultMiddleware().concat(middlewares)
  }
})

sagaMiddleWare.run(rootSaga)

type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
