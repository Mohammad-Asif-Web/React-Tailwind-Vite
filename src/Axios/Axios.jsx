import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Axios() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            // console.log(response.data);
            setUsers(response.data);
        })
    },[])


  return (
    <div>
        Axios Tutorial
        {users.map((user)=>{
            const {id, name, username, email} = user
            return (
                <ul key={id}>
                    <li>Name: {name}</li>
                </ul>
            )
        })}
    </div>
  )
}

export default Axios;
