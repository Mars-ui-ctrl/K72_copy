import React from 'react'
import { Link } from 'react-router-dom'

const Homebottomtext = () => {
  return (
    <div className='font-[lausanne-500] text-white flex  justify-center items-center gap-5 w-full relative mb-2'>
        <Link className='text-[6.5vw] hover:text-[#f0ff7c] hover:border-[#f0ff7c] leading-[0.7] inline-block rounded-full px-8 border-3 border-white pt-[1.5vw] pb-0 ' to='/projets' >PROJETS</Link>
        <Link className='text-[6.5vw] hover:text-[#f0ff7c] hover:border-[#f0ff7c] leading-[0.7] inline-block rounded-full px-8 border-3 border-white pt-[1.5vw] pb-0 ' to='/agence' >AGENCE</Link>
    </div>
  )
}

export default Homebottomtext
