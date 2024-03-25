import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './compoenents/Header/Header.jsx'
import Footer from './compoenents/Footer/Footer.jsx'
import Home from './compoenents/Home/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root.jsx'
import About from './compoenents/About/About.jsx'
import Contact from './compoenents/Contact/contact.jsx'
import Career from './compoenents/career/Career.jsx'
import User from './compoenents/User/User.jsx'
import Github,{githubLoader} from './compoenents/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Root />,
//     children:[
//       {
//         path:"",
//         element:<Home  />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       },
//       {
//         path:"career",
//         element:<Career />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
    <Route  path='' element={<Home />} />
    <Route  path='about' element={<About />} > 
    
    </Route>
    <Route  path='contact' element={<Contact />} />
    <Route  path='user/:userid' element={<User />} /> 
    <Route  path='career' element={<Career />} />
    <Route  
    loader={githubLoader}
    path='github' 
    element={<Github />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>
)
