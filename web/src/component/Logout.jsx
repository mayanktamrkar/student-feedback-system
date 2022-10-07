import React from 'react'

import { useNavigate } from 'react-router-dom'

export const Logout = ({pass}) => {
  const nav= useNavigate()

     pass("Username")
     nav("/")
     localStorage.removeItem("authtoken")
     localStorage.removeItem("user")
    // //reload()


  
  

  return (
    <div>user
        
    </div>
  )
}
