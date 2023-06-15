import React from 'react'
import {data} from './ContextApi';

// data imported from ChildC
function ChildC() {
  return (
    <div>
        <data.Consumer>
            {
                (name) => {
                    return (
                        <h1>Her Name : {name}</h1>
                    )
                }
            }
        </data.Consumer>
    </div>
  )
}
export default ChildC;



