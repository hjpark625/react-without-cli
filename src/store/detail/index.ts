import { isAxiosError } from 'axios'
import { createAction, createReducer } from '@reduxjs/toolkit'
import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchDetailData } from '@/api/detail'
import type { CallEffect, PutEffect } from 'redux-saga/effects'
import type { AxiosError } from 'axios'
import type { Store, StoreResponse, StoreErrorResponse } from '@/store/detail/types/storeDetail'

const GET_DETAIL = 'stores/GET_DETAIL'
const GET_DETAIL_SUCCESS = 'stores/GET_DETAIL_SUCCESS'
const GET_DETAIL_ERROR = 'stores/GET_DETAIL_ERROR'

export const getDetail = createAction<string, typeof GET_DETAIL>(GET_DETAIL)
export const getDetailSuccess = createAction<Store, typeof GET_DETAIL_SUCCESS>(GET_DETAIL_SUCCESS)
export const getDetailError = createAction<AxiosError<StoreErrorResponse>, typeof GET_DETAIL_ERROR>(GET_DETAIL_ERROR)

export function* getDetailSaga(
  action: ReturnType<typeof getDetail>
): Generator<
  | CallEffect<StoreResponse>
  | PutEffect<{ payload: AxiosError<StoreErrorResponse>; type: string }>
  | PutEffect<{ payload: Store; type: string }>,
  void,
  StoreResponse
> {
  try {
    const { data } = yield call(fetchDetailData, action.payload)
    yield put(getDetailSuccess(data))
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      yield put(getDetailError(err))
    }
  }
}

export function* storeDetailSaga() {
  yield takeLatest(GET_DETAIL, getDetailSaga)
}

const initialState: { detail: Store | null; status: 'idle' | 'loading' | 'success' | 'error'; errorMsg: string } = {
  detail: null,
  status: 'idle',
  errorMsg: ''
}

const storeDetailReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getDetail, (state) => ({
      ...state,
      status: 'loading'
    }))
    .addCase(getDetailSuccess, (state, { payload }) => ({
      ...state,
      status: 'success',
      detail: payload
    }))
    .addCase(getDetailError, (state, { payload }) => ({
      ...state,
      status: 'error',
      errorMsg: payload.response?.data.detail.message ?? '알 수 없는 에러'
    }))
    .addDefaultCase((state) => state)
)

export default storeDetailReducer
