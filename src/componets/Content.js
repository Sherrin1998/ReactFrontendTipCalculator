import React from 'react'

export default function  () {
  return (
    <>
    <div className='bg-cyan-700 mx-12 my-2 p-12 flex flex-col justify-center items-center rounded-3xl'>
        <label className='my-10 text-white text-xl'>Enter the bill amount and tip percentage to calculate the total.</label>

        <label className='my-5 text-white text-xl'>Bill amount:</label>
        <input type='number' className='p-2 rounded mb-5'/>

        <label className='my-5 text-white text-xl'>Tip percentage:</label>
        <input type='number' className='p-2 rounded mb-5'/>
    </div>
    </>
  )
}
