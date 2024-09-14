import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

export default function  () {
    const[isBill, setIsBill] = useState()
    const[istip, setIsTip] = useState()
    const bill = "Bill Amount:"
    const per = "Tip Percentage:"
    const handleBill = (value) => {
        setIsBill(value)
        console.log(value)
    } 
    const handleTip = (value) => {
        setIsTip(value)
        console.log(value)
    }
  return (
    <>
    <div className='bg-cyan-500 mx-12 my-2 p-12 flex flex-col justify-center items-center rounded-3xl'>
        <label className='my-10 text-white text-xl'>Enter the bill amount and tip percentage to calculate the total.</label>
        <Input onChangeFunction={handleBill}>{bill}</Input>
        <Input onChangeFunction={handleTip}>{per}</Input>
    </div>
    <Button valueBill={isBill} valueTip={istip}/>
    </>
  )
}
{/* <label className='my-5 text-white text-xl'>Bill amount:</label>
        <input type='number' className='p-2 rounded mb-5 border-2 border-transparent hover:border-blue-900 focus:border-blue-900 transition-500'/>
            
        <label className='my-5 text-white text-xl'>Tip percentage:</label>
        <input type='number' className='p-2 rounded mb-5 border-2 border-transparent hover:border-blue-900 focus:border-blue-900 transition-500'/> */}