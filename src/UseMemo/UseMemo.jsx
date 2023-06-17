import React, { useState, useMemo } from 'react'

function UseMemo() {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    const multiplication = useMemo(function multiply (){
        console.log('*******')
        return add * 10;
    }, [add]); // this 'add' variable is must be use for which data will be change;

  return (
    <div className='text-center'>
        <h1 className='mb-5'>Learning useMemo</h1>
        <p>Multiplicaction Result: {multiplication}</p>
        <button onClick={()=> setAdd(add + 1)}>Addition</button>
        <span>{add}</span>
        <br /> <br />
        <button onClick={() => setMinus(minus - 1)}>Substraction</button>
        <span>{minus}</span>
    </div>
  )
}
export default UseMemo;