import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // let myObj ={
  //   username:"hitesh",
  //   age:21
  // }

  let newArray =[1,2,3];


  return (
    <>
      <h1 className='bg-purple-400  text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      <Card  username="techburners"  btnText="click me"/>
      <Card  username="sudhir"   btnText="visit me"/>

    </>
  )
}

export default App
