import React from 'react'
import { useState } from 'react'

export default function Input({children, onChangeFunction}) {
    const [isNum, setIsNum] = useState('')
    function handleFunction(event){
        const value = event.target.value
        if(value ===''){
            
       setIsNum('')
       onChangeFunction('') 
        }
        else{
      
       setIsNum(Number(value))
       onChangeFunction(Number(value))
        }
    }
  return (
    <>
     <label className='my-5 text-white text-xl'>{children}</label>
     <input type='number' className='p-2 rounded mb-5 border-2 border-transparent hover:border-blue-900 focus:border-blue-900 transition-500' value={isNum} onChange={handleFunction}/>
    </>
  )
}
