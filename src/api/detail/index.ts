import instance from '@/api'
import type { StoreResponse } from '@/store/detail/types/storeDetail'

export const fetchDetailData = async (storeName: string) => {
  const { data } = await instance.get<StoreResponse>(`/detail/${storeName}`)
  return data
}
