import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import BlogsData from "../data.json"

function Blog() {
    // always import {useEffect} to use useParams()
    const {home} = useParams();
    const [homeData, setHomeData] = useState("");

    useEffect(()=>{
        // data is filtered from data.json file
        // if url path home name is equal to data.json file home name,
        // then that data will stored to blogData variable
        const blogData = BlogsData.filter((blog)=> blog.home === home);
        console.log(blogData)
        setHomeData(blogData[0].article);
    })

  return (
    <div>
        <h1 className='text-yellow-400 mb-10'>Single Page</h1>
        <h2 className='uppercase text-xl text-red-300'>{home}</h2>
        <p className='mt-2'>{homeData}</p>
    </div>
  )
}
export default Blog