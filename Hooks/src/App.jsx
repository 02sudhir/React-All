import { useRef } from 'react'
import './App.css'

function App() {
  const inputElement =useRef()
  
  const btnclicked= ()=>{
    console.log(inputElement.current);
    inputElement.current.style.background="red"
  }

  return (
    <>
   <input type='text' ref={inputElement}/>
   <button onClick={btnclicked} >Click me</button>
    </>
  )
}

export default App
