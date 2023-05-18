import React,{useState} from 'react'

function Hooks_useState() {

  const [count, setCount] = useState(0)
  const handleIncrement = (event) => {
    event.stopPropagation()
    // Its recomende to changes the value by selecting the previous value
    setCount((count)=> count + 1);
    
    // the preValue is main value from count, always it will take previous value and will add next value 
    setCount((preValue)=> preValue + 1);
  }

  return (
    <div className='flex justify-center items-center gap-3 my-3'>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>useState Increment</button>
    </div>

  )
}
export default Hooks_useState;