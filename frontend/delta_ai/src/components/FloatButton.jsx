import React from 'react'
import { Link } from 'react-router-dom'

export default function FloatButton() {
  return (
    <Link to='/mentor'>
      <div className='fixed bottom-5 right-5  flex flex-col justify-center align-middle items-center text-[#7400e8] cursor-pointer'>
          <div className='text-3xl '>
          <i class="fa-brands fa-rocketchat"></i>
          </div>
          <p className='font-bold text-[#7400e8] text-center'>
              connect to
              <br/>
              mentor
          </p>
      </div>
    </Link>
  )
}
