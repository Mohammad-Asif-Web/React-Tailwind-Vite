import React, { createContext } from 'react'
import ChildB from './ChildB';

    // What is useContext hook?
    // creat, provider, useContext
    // how to use it?
    const data = createContext();
    const data2 = createContext();

function UseContext() {
    const name = "Yoshita"
    const age = 28;

  return (
    <div>
        <data.Provider  value={name}>
            <data2.Provider value={age}>
                <ChildB />
            </data2.Provider>
        </data.Provider>

    </div>
  )
}
export default UseContext;
export {data, data2};
