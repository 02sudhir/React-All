import { useState } from 'react'
import './styles/tailwind.css';
import weblogo from "./assets/1.png"
import './App.css'
import Hedaer from './Hedaer'

function App() {
  let  displayData= () =>{
    alert("welcme suhdir")
  }

  let template ='';
  let [pshow, setpshow] = useState(false)

if (pshow){
  template=
  <>
  <button   className='bg-[red] p-4' onClick={()=>setpshow(!pshow)}>HIDE</button>
  <p> welcome to WS</p>
  </>
    
}
else{
  template=<button className='bg-[red] p-4' onClick={()=>setpshow(!pshow)}>SHOW</button>

}
  return (
    
    <>
    <button  onClick={displayData} className='bg-colorbg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded'> click</button>
    <Hedaer />
   
    {template}
    <img  src={weblogo} />
      <h1 className=' text-red-400'>sudhir</h1>
    </>
  )
}

export default App

let Card=()=>{
  return(
    <h1>welcome su</h1>
  )
}
