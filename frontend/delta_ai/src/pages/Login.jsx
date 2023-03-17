import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cb from '../media/img/codeeBoy.png'
import LogoBlack from '../media/Logo';

export default function Login() {

  const [formvalue, setformvalue] = useState({
    email:'',
    password:''
  })

  let name, value;

  let handelChange=(e)=>{
    name = e.target.name;
    value = e.target.value
    setformvalue({...formvalue,[name]:value})
  }

  const sub=(e)=>{
    e.preventDefault()
  }

  return (
    <>
    {/*  */}
    <div className='w-screen min-h-screen md:flex justify-center align-middle items-center bg-slate-100 px-6 py-1'>
    <div className='top-0 pl-5 pt-2 pr-4 sm:px-10 md:px-[3rem] lg:px-24 left-0 bg-slate-100 md:absolute'>
      <Link to='/'>
        <LogoBlack/>
      </Link>
    </div>
      <div className='w-full h-full grid grid-cols-8 gap-12'>
          <div className='col-span-3 overflow-hidden flex-col bg-slate-50/20 rounded-lg shadow-lg md:px-6 lg:px-12 py-12 gap-10 hidden md:flex justify-center align-middle'>
              <div className=' text-[2rem] sm:text-[2.5rem] md:text-[2.6rem] text-charcol/90 lg:text-[2.3rem] font-semibold flex'>
                Hi Welcome Back!
              </div>
              <img src={cb} className='md:px-0 lg:px-6' alt="This imaisible"/>
          </div>
          
          <div className='
            col-span-8 md:col-span-5 px-4 sm:px-16 lg:px-24 py-2
            '>
          <div className='grid gap-8 md:gap-14 '>

            <p className='grid'>
            <span className='text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] text-charcol font-SansPro font-bold'>
              Login Here
            </span>
            <span className='text-[.8rem] sm:text-[.8rem] md:text-[.8rem] lg:text-[1rem] text-charcol/60 font-SansPro font-bold  '>
              Fill in your details below.
            </span>
            </p>
            <form className="grid gap-4 md:gap-7" onSubmit={sub}>
                <input type="email" placeholder='Email' className='text-base md:text-xl font-light font-sans px-3 py-2 rounded-md outline-none border-slate-400' autoComplete='false' name='email' value={formvalue.email} onChange={handelChange}/>
                <input type="password" placeholder='Password' className='text-base md:text-xl font-light font-sans px-3 py-2 rounded-md outline-none border-slate-400' autoComplete='false' name='password' value={formvalue.password} onChange={handelChange}/>
                <div className='text-xs md:text-sm text-center'>Don't remember password?
                <a href='#' className='px-2 font-bold text-blue-600 hover:underline hover:underline-offset-2'>
                 Forgot Password
                </a>
                 </div>
                <button type="submit" className='text-base bg-[#7400e8] rounded-md md:text-xl font-SansPro font-bold px-2 py-3 shadow-lg text-slate-100 outline-none border-none'>
                <Link to='/'>
                    Submit
                </Link>
                </button>
            </form>


                <div className='text-xs md:text-sm text-center'>Don't have an account?
                <Link to='/register' className='px-2 font-bold text-green-600 hover:underline hover:underline-offset-2 '>
                 Register Here
                </Link>
                 </div>
                 
          </div>

          </div>
      </div>
    </div>
    </>
  )
}
