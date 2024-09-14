import React from 'react'

export default function Button() {
  return (
    <>
    <div className='bg-blue-900 hover:bg-blue-200  flex flex-col items-center justify-center w-fit p-2 m-auto rounded-2xl cursor-pointer border border-blue-800  hover:shadow-blue-950 '>
        <button className='text-white hover:text-black transition duration-300 text-2xl'>Calculate</button>
    </div>
    </>
  )
}
