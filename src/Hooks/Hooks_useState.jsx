import React,{useState} from 'react'

function Hooks_useState() {

  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <div className='flex justify-center items-center gap-3 my-3'>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>useState Increment</button>
    </div>

  )
}
export default Hooks_useState;