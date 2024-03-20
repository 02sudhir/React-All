import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [counter,setCounter] = useState(15)

  const addValue = () => {
    
  setCounter(counter + 1 )
}
  const removeValue = () => {
    console.log("value removed", counter);
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
