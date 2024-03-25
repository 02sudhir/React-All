import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  const data = useLoaderData()

    // const [data,setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/02sudhir')
    //   .then(response => response.json())
    //   .then(data  =>{
    //     console.log(data);
    //     setData(data)
    //   })
  
      
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github {data.name}  Repos:{data.public_repos}
    <img   align="top" src={data.avatar_url} alt='github  image' width={300}></img></div>
  )
}

export default Github

export const githubLoader = async() =>{
  const response = await fetch('https://api.github.com/users/02sudhir')
  return response.json()
}