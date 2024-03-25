import React from 'react'
import Header from './compoenents/Header/Header'
import Footer from './compoenents/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './compoenents/Home/Home'

function Root() {
  return (
    <>
      <Header />
      <Outlet />      
      <Footer />
    </>
  )
}

export default Root
