import React from 'react'
import { useState } from 'react'

export default function Button({valueBill, valueTip}) {
const [isRes, setIsRes] = useState()
let res = <p className='text-2xl'></p>
function calculationFunction(){
  if(valueBill && valueTip){
    const bill = valueBill
    const tip = valueTip
    const val = bill * (1 + tip/100)
    const totval = val.toFixed(2)
    console.log(totval)
    res = <p className='text-2xl'>Your Total is: {totval}</p>
    setIsRes(res)
  }
  else{
    res = <p className='text-2xl'>No Value to display 0.00</p>
    setIsRes(res)
  }
}
  return (
    <>
    <div className='bg-blue-900 hover:bg-blue-200  flex flex-col items-center justify-center w-fit p-2 m-auto rounded-2xl cursor-pointer border border-blue-800  hover:shadow-blue-950 '>
        <button className='text-white hover:text-black transition duration-300 text-2xl' onClick={calculationFunction}>Calculate</button>
    </div>
    <div className='flex flex-col justify-center items-center mt-10'>
    {isRes}
    </div>
    </>
  )
}
