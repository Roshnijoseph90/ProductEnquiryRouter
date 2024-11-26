import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'


const Root = () => {
  const location = useLocation()
  return (
    <div>
      <header>
       
          
            <li><Link to="/productenquiryform">Home</Link></li>
            
       
      </header>
      <main>
        <Outlet/>
      </main>
     
    </div>
  )
}

export default Root
