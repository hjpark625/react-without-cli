import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import DetailInfo from '@/components/DetailInfo'
import { getDetail } from '@/store/detail'
import { useAppDispatch } from '@/store'

import type { RootState } from '@/store'

function DetailPage() {
  const dispatch = useAppDispatch()
  const { detail, errorMsg, status } = useSelector((state: RootState) => state.storeDetail)
  const params = useParams<{ storename: string }>()

  useEffect(() => {
    dispatch(getDetail(params.storename ?? ''))
  }, [params.storename, dispatch])

  return (
    // TODO: 코드 더러워 보임
    <main>
      <h1>{params.storename} Page</h1>
      {status === 'loading' ? (
        <div>데이터 로딩중...</div>
      ) : status === 'error' ? (
        <div>{errorMsg}</div>
      ) : (
        status === 'success' && detail && <DetailInfo detail={detail} />
      )}
    </main>
  )
}

export default DetailPage
