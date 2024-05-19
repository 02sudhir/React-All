import React from 'react'
import { blogs } from '../Data/Blogs'
import { Link } from 'react-router-dom'

import Header from '../Common/Header'



function Blog() {
    let allBlogs = blogs.map((v,i)=>{
        return(
            <div className='blogitems' key={i}>
            <h3> {v.title}</h3>
            
            <p>
               
                {/* {v.body} */}
                
                <button><Link  to={`/blog/${v.id}`}>Read-more</Link></button>
              
                
               
            </p>
            </div>
        )
    })
  
  return (
    <>
        
            <Header />
            <h1>Blog</h1>
            <div className='container'>
              {allBlogs}
            </div>
        
    </>
  )
}

export default Blog