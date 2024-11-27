import React, { useContext } from 'react'
import { UserContext } from '../App'



const Page_1 = () => {
    
    const Data_2  = useContext(UserContext)
    const handleClick = ()=>
    {
        Data_2.updatedValue("Hi")
    }
  return (
   <div>
    {Data_2.value}
    <button onClick={handleClick}>Click me</button>
   </div>
  )

}

export default Page_1
