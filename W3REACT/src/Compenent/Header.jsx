import React from 'react'

function Header({headerInfo,cname, children}) {
 console.log(headerInfo);
 
  return (
    <div>
      {children}
     <h3>headerpart</h3>
        <h1>{headerInfo.name}  </h1>
    </div>
  )
}

export default Header