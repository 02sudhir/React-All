import React from 'react'
import Header from '../Common/Header'
import { blogs } from '../Data/Blogs';
import { useLocation } from 'react-router-dom';


function BlogDetail() {

    let uselocation = useLocation();
    let currentId = uselocation.pathname.split('/')[2];
    let currentdata = blogs.filter((v)=>v.id==currentId)[0]
    console.log(currentdata);





  return (
    <div>
      <Header />
      <h1>{currentdata.title}</h1>
      {/* <p>{currentdata.body}</p> */}
    </div>
  )
}

export default BlogDetail