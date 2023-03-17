import React from 'react'
import Logo from '../media/svg/Logo'

export default function Nav() {
  return (
    <>
        <nav className='flex w-screen flex-cols bg-purple-200/30 backdrop-blur-md justify-between items-center px-40 py-6 shadow-sm text-lg fixed z-50'>
            <div>
                <Logo/>
            </div>
            <div>
                <ul className='flex gap-10 '>
                    <li className='font-bold cursor-pointer '>home</li>
                    <li className='hover:font-bold cursor-pointer'>learnings</li>
                    <li className='hover:font-bold cursor-pointer'>explore</li>
                </ul>
            </div>
            <div>Login</div>
        </nav>
    </>
    )
}
