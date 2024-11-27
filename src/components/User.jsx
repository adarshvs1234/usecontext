import React, { useContext, useState } from 'react'
import { UserContext } from '../App'



const User = () => {

    
   const Data = useContext(UserContext)
   const handleClick = () =>{
        Data.updatedValue("Adarsh")
   }
    
  return (
   
    <div>
        {Data.value}
        <button onClick={handleClick}>Click me</button>
      
    </div>
  )
}

export default User