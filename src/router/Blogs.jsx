import React, { useState} from 'react'
import {Link} from "react-router-dom"
import data from '../data.json'

function Blogs() {
    const [blogs, setBlogs] = useState(data);
    
    //this function is to set a certainer number of words, like the line will show maximum 100 words...
    //  
    const truncateString = (str, num) =>{
      if(str.length > num){
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
    }
    // console.log(blogs);
  return (
    <div>
        <h1 className='mt-[100px]'>My Blogs Page</h1>
        <section className='mt-[100px]'>
            {blogs.map((item, id) =>{
                const {name, home, article} = item;
                return <article key={id} className='mt-10'>
                        <h3  className='text-3xl bg-orange-400 p-2 border-2 rounded-md'>Writer Name: {name.toUpperCase()}</h3>
                        <h4 className='text-orange-200'>Location: {home}</h4>
                        <p className='my-3'>{truncateString(article, 100)}</p>
                        <Link to={home}>Learn More</Link>

                    </article>
                    
            })}
        </section>
    </div>
  )
}
export default Blogs;

