interface OperationTime {
  day: string
  startTime: string | null
  endTime: string | null
}

interface Coord {
  lat: number
  lng: number
}

interface NearestRoute {
  subwayLine: string[]
  routeInfo: string
}

interface Image {
  file_path: string
  photoId: string
  width: number
  height: number
}

export interface Store {
  storeId: string
  name: string
  engName: string
  socialLink: string | null
  category: string | null
  address: string
  detailAddress: string | null
  phoneNumber: string | null
  operationTime: OperationTime[]
  coord: Coord
  introduce: string | null
  description: string | null
  updatedAt: Date
  concept: string[]
  nearestRoute: NearestRoute
  storeImages: Image[]
}

export interface StoreResponse {
  data: Store
}

export interface StoreErrorResponse {
  detail: {
    message: string
  }
}
