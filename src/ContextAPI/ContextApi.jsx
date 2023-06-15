import React, { createContext } from 'react'
import ChildC from './ChildC';

// What is Context Api?
// Ans : In Prop Drilling we have to pass the data one one, 
// if we want to pass the data from parent to ChilC
// But if we use contextAPI directly we can pass data from parent ChildC.
// If we want to understand we must know about three terms, that is:
// Create - there we have create a function, what will cause all the value
// Provider - here we can directly Provide a Value to other pages
// Consumer - here the consumer will import the data

// How to use it?


// Is Context API also Problematic
// Yes, Its good for sending single data, but if we send multiple data
// we have to use nested consumer, we have to send multiple data, and its very complex


// here we are creating context

const data = createContext();

function ContextApi() {

  const name = "Yoshita Johan is Web coder";

  return (
    <>
    <data.Provider value={name}>
      <ChildC />
    </data.Provider>
    </>
  )
}
export default ContextApi;
export {data}
