import React from 'react'
import { Link } from 'react-router-dom'
import p4o4 from '../media/img/P404.png'

export default function Error() {
  return (
    <>
        <div className='min-w-screen min-h-screen flex flex-col justify-center align-middle items-center'>
                <div>
                  <img src={p4o4} alt="404" className='w-auto h-60 ' />
                </div>
                <div>Error 404 Page Not Found</div>
                <br/>
                <Link to='/' className='bg-[#7400e8] px-3 py-2 rounded-sm cursor-pointer text-slate-200 font-semibold'>Back to home</Link>
        </div>
    </>
  )
}
 