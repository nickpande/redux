import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,incrementAsync} from "./assets/counter/Counter"
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(incrementAsync(5)); // dispatch the thunk, passing the amount
  };

  return (
   <>
    <div className="flex  align-middle  bg-zinc-100">
      <div className="p-5 ">
        <button className="mr-3 px-2 py-2 bg-blue-400 text-white rounded-md"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <button className="mr-3 px-2 py-2 bg-blue-400 text-white rounded-md"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button className="mr-3 px-2 py-2 bg-blue-400 text-white rounded-md"
          aria-label="Increment by 5 "
          onClick={ handleClick}
        >
          incrementByAmount
        </button>
        <div className="mt-10 px-32">
        <span className="px-5 bg-red-300 rounded text-white py-3">{count}</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
