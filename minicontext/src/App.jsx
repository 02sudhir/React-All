import { useState } from 'react'

import './App.css'
import UsercontexProvider from './assets/Context/UsercontexProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 
  return (
    <UsercontexProvider>
    
      <h1>sudhir app context api</h1>
      <Login />
      <Profile />
    </UsercontexProvider>
  )
}

export default App
