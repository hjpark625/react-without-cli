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
    <div>
      <button type="button" onClick={onDecrement}>
        -1
      </button>
      <span>{count}</span>
      <button type="button" onClick={onIncrement}>
        +1
      </button>
    </div>
  )
}

export default Counter
