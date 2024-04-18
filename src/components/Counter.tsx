import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function onIncrement() {
    setCount(count + 1)
  }
  function onDecrement() {
    setCount(count - 1)
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
      <span className="text-lg">{count}</span>
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
