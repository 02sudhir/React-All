import { useState } from 'react'
import './App.css'

function App() {


  const [counter,setCounter] = useState(15)
 const limit = 25;
 const minlimit = 12

  const addValue = () => {
    if(counter<limit ) 
    // setCounter(prevcounter=>prevcounter  +1)
    // setCounter(prevcounter=>prevcounter  +1)
    // setCounter(prevcounter=>prevcounter  +1)
    // setCounter(prevcounter=>prevcounter  +1)
    setCounter(counter + 1 )
  }
  const removeValue = () => {
    console.log("value removed", counter);
    if (counter >minlimit ) 
    setCounter(counter - 1 )
    
  }

  return (
    <>
      <h1 >beer aur react</h1>
      <h2>counter value: {counter}</h2>
      
      <button onClick={addValue}>Add value {counter}</button><br/>
      <button onClick={removeValue}>remove value{counter}</button>
     
    </>
  )
}

export default App
