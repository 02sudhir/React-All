import { useState,useEffect } from 'react'

import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeButton'
import Card from './components/Card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
 const [themeMode,setThememode] =useState('light')

 


 

const lightTheme= ()=> {
  setThememode("light")
}
const darkTheme= ()=> {
  setThememode("dark")
}

//  Actual change theme

// useEffect(() =>{
//   localStorage.setItem('theme',themeMode);
//   document.body.className =themeMode
// },[themeMode])


useEffect(() => {
  
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])


toast('Theme changed', { delay: 500 });

  return (
    <>
      

    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    {/* <div className={`App ${themeMode}`}>
      <button onClick={lightTheme}>Toggle Theme</button>
      <h1>Hello, world!</h1>
    </div> */}
    
    <div className= "flex flex-wrap min-h-screen items-center">
    

                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn />
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card />
                    </div>
                </div>
            </div>
     


    </ThemeProvider>
    <ToastContainer />
    </>
  )
}

export default App
