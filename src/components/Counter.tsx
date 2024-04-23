import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/store'
import { increase, decrease, increaseBy, decreaseBy } from '@/store/counter'

import type { RootState } from '@/store'

function Counter() {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useAppDispatch()

  function onIncrement() {
    dispatch(increase())
  }
  function onDecrement() {
    dispatch(decrease())
  }
  function onIncrementBy(value: number) {
    dispatch(increaseBy(value))
  }
  function onDecrementBy(value: number) {
    dispatch(decreaseBy(value))
  }

  return (
    <div className="w-[300px] mx-auto">
      <button
        className="w-[50px] h-[50px] rounded-[4px] border-solid border border-black bg-slate-300"
        type="button"
        onClick={onDecrement}
      >
        -1
      </button>
      <button
        className="w-[50px] h-[50px] rounded-[4px] border-solid border border-black bg-slate-300"
        type="button"
        onClick={() => onDecrementBy(5)}
      >
        -5
      </button>
      <span className="text-lg">{count}</span>
      <button
        className="w-[50px] h-[50px] rounded-[4px] border-solid border border-black bg-slate-300"
        type="button"
        onClick={() => onIncrementBy(5)}
      >
        +5
      </button>
      <button
        className="w-[50px] h-[50px] rounded-[4px] border-solid border border-black bg-slate-300"
        type="button"
        onClick={onIncrement}
      >
        +1
      </button>
    </div>
  )
}

export default Counter
