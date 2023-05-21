import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
    // useNavigate hooks is stored to navigate variable
    // its mandatory to import the useNavigate hooks when apply
    const navigate = useNavigate();
  return (
    <div>
        <h2>This is About Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nemo facilis corporis accusamus deleniti maxime magni cumque iste aliquam sint, fugit assumenda laudantium, molestias eaque non eum voluptatem totam ea praesentium inventore libero possimus perferendis a! Eum, eaque, eos modi temporibus facilis accusantium odio quaerat, odit expedita molestias provident eveniet.</p>
        <button onClick={()=>{
            navigate('/');
        }} 
        className='bg-red-400 mt-5'>
            Go To Home Page
        </button>
    </div>
  )
}
export default  About;