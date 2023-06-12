import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

// Example of side Effect of useEffect
// -Fetching data from any API
// -Updating the DOM (React prohibitted to update Manually DOM)
// -If anytime/somehow we need to update DOM that is called sideEffect
// Most uses for setting any subscription or timers, datechange
// If we use useEffect it will automatically render every time
// useEffect(()=>{
//     // calls with every rendering
//     console.log('useEffect rendering')
// })
// -But we can stop this rendering by using this empty array, []
// useEffect(()=>{
//     // call with only first rendering
//     console.log('use effect first rendering')
// })

const loadingMsg = <p className='text-3xl'>...Page will load after 2s...</p>

function UseEffect() {
    const [todos, setTodos] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{

        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                if(!res.ok){
                    throw Error("Feching is not Successful")
                }
                return res.json();

            }).then((data) => {
                setTodos(data);
                setLoading(false)
                setError(null)

            }).catch((err) => {
                setError(err.message)
                setLoading(false)
            })
        }, 2000);

    },[])

  return (
    <div>
        <h2 className='text-3xl mt-5'>Fetching Todos data from FakeAPI</h2>

        {/* if there is loading, then it will show loadingMsg */}
        {loading && loadingMsg}
        {error && <p className='text-red-400 text-center'>{error}</p>}
        {
            todos &&
            todos.map((todo) => {
                return <p key={todo.id}>{todo.title}</p>
            })
        }
    </div>
  )
}
export default UseEffect;