import { createAction, createReducer } from '@reduxjs/toolkit'
import { delay, put, takeLatest } from 'redux-saga/effects'

const INCREASE = 'counter/INCREASE'
const INCREASE_BY = 'counter/INCREASE_BY'
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC'
const DECREASE = 'counter/DECREASE'
const DECREASE_BY = 'counter/DECREASE_BY'
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC'

export const increase = createAction<void, typeof INCREASE>(INCREASE)
export const increaseBy = createAction<number, typeof INCREASE_BY>(INCREASE_BY)
export const increaseAsync = createAction<void, typeof INCREASE_ASYNC>(INCREASE_ASYNC)
export const decrease = createAction<void, typeof DECREASE>(DECREASE)
export const decreaseBy = createAction<number, typeof DECREASE_BY>(DECREASE_BY)
export const decreaseAsync = createAction<void, typeof DECREASE_ASYNC>(DECREASE_ASYNC)

function* increaseSaga() {
  yield delay(1000)
  yield put(increase())
}

function* decreaseSaga() {
  yield delay(1000)
  yield put(decrease())
}

export function* counterSaga() {
  yield takeLatest(INCREASE_ASYNC, increaseSaga)
  yield takeLatest(DECREASE_ASYNC, decreaseSaga)
}

const initialState: { count: number } = {
  count: 0
}

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increase, (state) => ({
      ...state,
      count: state.count + 1
    }))
    .addCase(decrease, (state) => ({
      ...state,
      count: state.count - 1
    }))
    .addCase(increaseBy, (state, { payload }) => ({
      ...state,
      count: state.count + payload
    }))
    .addCase(decreaseBy, (state, { payload }) => ({
      ...state,
      count: state.count - payload
    }))
    .addDefaultCase((state) => state)
})

export default counterReducer
