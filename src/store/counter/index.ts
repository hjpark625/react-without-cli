import { createAction, createReducer } from '@reduxjs/toolkit'

const INCREASE = 'counter/INCREASE'
const INCREASE_BY = 'counter/INCREASE_BY'
const DECREASE = 'counter/DECREASE'
const DECREASE_BY = 'counter/DECREASE_BY'

export const increase = createAction<void, typeof INCREASE>(INCREASE)
export const increaseBy = createAction<number, typeof INCREASE_BY>(INCREASE_BY)
export const decrease = createAction<void, typeof DECREASE>(DECREASE)
export const decreaseBy = createAction<number, typeof DECREASE_BY>(DECREASE_BY)

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
