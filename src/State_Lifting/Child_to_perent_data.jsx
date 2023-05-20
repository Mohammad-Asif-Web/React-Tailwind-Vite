import React from 'react'

function Child(props) {
    const data = {
      name : 'asif',
      passion: 'Software developer',
      salary : 30000
    }
    props.onChildData(data);

  return (
    <div>
        <p>This is Child</p>
    </div>
  )
}
export default Child;