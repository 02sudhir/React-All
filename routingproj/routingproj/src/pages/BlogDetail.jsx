import React from 'react'
import Header from '../Common/Header'
import { useLocation } from 'react-router-dom'
import { blogs } from '../Data/Blogs';

function BlogDetail() {

    let useLoactiion = useLocation();
    let currentId = useLoactiion.pathname.split('/')[2];
    let currentdata = blogs.filter((v)=>v.id==currentId)
    console.log(currentdata);
  return (
    <div>BlogDetail</div>
  )
}

export default BlogDetail