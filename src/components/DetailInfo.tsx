import type { Store } from '@/store/detail/types/storeDetail'
import { Link } from 'react-router-dom'

interface DetailInfoProps {
  detail: Store
}

function DetailInfo({ detail }: DetailInfoProps) {
  return (
    <>
      <div>storeId: {detail.storeId}</div>
      <div>name: {detail.name}</div>
      <div>engName: {detail.engName}</div>
      <div>
        socialLink: <Link to={detail.socialLink || ''}>{detail.socialLink}</Link>
      </div>
      <div>category: {detail.category}</div>
      <div>address: {detail.address}</div>
      <div>detailAddress: {detail.detailAddress}</div>
      <div>phoneNumber: {detail.phoneNumber}</div>
      <div>
        operationTime:{' '}
        <ul>
          {detail.operationTime.map(({ day, startTime, endTime }) => (
            <li key={day}>
              day: {day}
              {startTime && endTime ? (
                <>
                  <div>startTime: {startTime}</div>
                  <div>endTime: {endTime}</div>
                </>
              ) : (
                '휴무'
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>coord: {`{ lat: ${detail.coord.lat}, lng: ${detail.coord.lng} }`}</div>
      <div>introduce: {detail.introduce ?? '없음'}</div>
      <div>updatedAt: {`${new Date(detail.updatedAt ?? '').toLocaleDateString()}`}</div>
      <div>
        concept:{' '}
        {detail.concept.length ? detail.concept.map((concept) => <span key={concept}>{concept}</span>) : '없음'}
      </div>
      <div>
        nearestRoute:{' '}
        {detail.nearestRoute.subwayLine
          ? detail.nearestRoute.subwayLine.map((subwayLine) => <span key={subwayLine}>{subwayLine}</span>)
          : '없음'}
        , {detail.nearestRoute.routeInfo ?? '없음'}
      </div>
      <div>
        storeImages:{' '}
        {detail.storeImages.length ? (
          <div className="flex w-screen overflow-x-auto gap-[4px]">
            {detail.storeImages.map((photo) => (
              <img key={photo.photoId} src={photo.file_path} alt={photo.photoId} width={300} height={300} />
            ))}
          </div>
        ) : (
          '이미지 없음'
        )}
      </div>
    </>
  )
}

export default DetailInfo
