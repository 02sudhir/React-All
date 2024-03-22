import React ,{ useState ,useCallback,useEffect, useRef} from 'react';

import './App.css'

function App() {
  const [length,setLength]=useState(8) 
  const [numberAllow,setnumberAllow]=useState(false);
  const [charAllow,setcharAllow]=useState(false);
  const [password,setpassword]= useState("");
  const [isVisible, setIsVisible] = useState(false);
  //useref hook
  const passwordRef = useRef(null)

  const passwordGen = useCallback(( ) =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str+="0123456789"
    if (charAllow) str+="~!@#$%^&*()_+{}|"
    for (let i = 1; i <= length; i++) {
          let char = Math.floor(Math.random()* str.length+1 )     
          pass += str.charAt(char)
    }
    setpassword(pass)
  },[length,numberAllow,charAllow,setpassword])

 useEffect(() => {
  passwordGen()
 }, [length,numberAllow,charAllow,passwordGen])

 const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select()
  
  window.navigator.clipboard.writeText(password)
 }, [password])


 

  return (
    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  my-8 text-orange-500 bg-gray-800'>
       <h2 className='text-white'>password Generator</h2>
        <div className='classname="flex shadow rounded-lg overflow-hidden mb-4'>
        
          <input  type='text'
            value={password}
            className='outline-none w-full py-1 py-3 text-black'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-whitebg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>copy</button>
          {/* <button onClick={(copyPasswordToClipboard,setIsVisible) => {setIsVisible(!isVisible)}}>Show Popup</button>
          {isVisible && <div className="popup-content">Hello from Popup!</div>} */}
        </div>
        
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range' 
            min={6}
            max={100}
            value={length} 
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label className='outline-none  text-orange'>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input  
              type='checkbox'
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {setnumberAllow((prev)=> !prev);
              }}
            />
              <label htmlFor='numberInput'>Number</label>
              
            
          </div>
          <div className='flex items-center gap-x-1'>
            <input  
              type='checkbox'
              defaultChecked={charAllow}
              id="chracterInput"
              onChange={() => {setcharAllow((prev)=> !prev);
              }}
            />
              <label htmlFor='numberInput'>charactrs</label>
              
            
          </div>
          
        </div>
        
      </div>
    
  )
}

export default App
