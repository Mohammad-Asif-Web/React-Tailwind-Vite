import React, { useContext } from 'react'
import { data, data2 } from './UseContext';

function ChildB() {
    const teacherName = useContext(data);
    const herAge = useContext(data2);
  return (
    <div>
        <h1>Hi, My name is Asif</h1>
        <h2>My Teacher name is {teacherName}, She is {herAge} Years Old</h2>
    </div>
  )
}
export default ChildB;
