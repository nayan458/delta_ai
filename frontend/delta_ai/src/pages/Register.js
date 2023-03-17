import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NodeContext from '../contexts/NodeContext'
import cb from '../media/img/registration.png'
import LogoBlack from '../media/Logo'

export default function Registration() {

    const navigate = useNavigate()
    const [x, setx] = useState(null)
    const setm =()=> {setx(true)}
    const setf =()=> setx(false)

  const a = useContext(NodeContext)

  const [usrDetails, setusrDetails] = useState({
    fname:'',phone:'',email:'',password:'',institute:'',team:'',gender:''
  })
  let name, value;
  const handelChange=(e)=>{
    name = e.target.name;
    value = e.target.value;
    if(name === 'gender'){
      if(value === 'male'){setm()}
      if(value === 'female'){setf()}
    }

    setusrDetails({...usrDetails,[name] : value})
  }

  const [succmsg, setsuccmsg] = useState(false)
  const open=()=>{setsuccmsg(true)}
  const close=()=>{setsuccmsg(false)}

  const [errmsg, seterrmsg] = useState(false)
  const openErr=()=>{seterrmsg(true)}
  const closeErr=()=>{seterrmsg(false)}
  
  const showDetails=()=>{
    // [name,phone,email,password,institute,team,gender] = usrDetails
    
    if(!usrDetails.fname 
      || !usrDetails.phone 
      || !usrDetails.email 
      || !usrDetails.password 
      || !usrDetails.institute
      ){
      window.alert('You need to fill values in all the fields')
      close()
      openErr()
      return
    }
    a.setAuth(true)

    window.alert(`Successfully registered with usr details \n ${usrDetails.fname}\n ${usrDetails.phone}\n  ${usrDetails.email}\n ${usrDetails.password}\n ${usrDetails.institute}\n ${usrDetails.team}\n ${usrDetails.gender}`);
    // console.log(usrDetails.gender)
    closeErr()
    open()
    navigate('/')
  }
  
  const sub=(e)=>{
    e.preventDefault()
  }

  return (
    <>
    {/* <div className='relative pt-2 pb-3 top-0 px-16 md:py-2 md:absolute bg-slate-100'> */}
    <div className='top-0 pl-5 pt-2 pr-4 sm:px-10 md:px-[3rem] lg:px-24 left-0 bg-slate-100 md:absolute'>
      <Link to='/'>
        <LogoBlack/>
      </Link>
    </div>
        
    <div className='w-screen min-h-screen flex justify-center align-middle items-center bg-slate-100 px-6 py-1'>
      <div className='w-full h-full grid grid-cols-8 gap-12'>
          <div className='col-span-3 overflow-hidden flex-col bg-slate-50/20 rounded-lg shadow-lg md:px-6 lg:px-12 py-12 hidden md:flex justify-center align-middle'>
              <div className='text-[2rem] sm:text-[2.5rem] md:text-[2.6rem] text-charcol/90 lg:text-[2.3rem] font-semibold flex'>
                Hi Wellcom Back!
              </div>
              <img src={cb} className='md:px-0 lg:px-6' alt="This imaisible"/>
          </div>
          
          <div className='
            col-span-8 md:col-span-5 px-4 sm:px-16 lg:px-24 py-2
            '>
          <div className='grid gap-8 md:gap-14 '>

            <p className='grid'>
            <span className='text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] text-charcol font-SansPro font-bold'>
            Register Here
            </span>
            <span className='text-[.8rem] sm:text-[.8rem] md:text-[.8rem] lg:text-[1rem] text-charcol/60 font-SansPro font-bold  '>
              Fill in your details below.
            </span>
            </p>

            <div className={succmsg ? 'bg-green-200 text-center text-green-600 py-1 rounded-sm transform scale-100 duration-500 ease-linear cursor-pointer' : 'bg-green-200 text-center text-green-600 py-1 rounded-sm transform scale-0 absolute cursor-pointer'} onClick={close}>
                Successfully Registered
            </div>

            <div className={errmsg ? 
                    'bg-red-200 text-center text-red-600 py-1 rounded-sm transform scale-100 duration-100 ease-linear cursor-pointer'
                    : 
                    'bg-red-200 text-center text-red-600 py-1 rounded-sm transform scale-0 absolute cursor-pointer' }
                     onClick={closeErr}>
                     Invalid Credentials
               
            </div>

            <form className="grid gap-4 md:gap-7" onSubmit={sub} method="POST">
                <input type="text" placeholder='Full Name' className='text-base md:text-xl font-light font-sans px-3 py-2 rounded-md outline-none border-slate-400 ' name='fname' value={usrDetails.fname } onChange={handelChange} />
                <input type="number" placeholder='Phone' className='text-base md:text-xl font-light font-sans px-3 py-2 rounded-md outline-none border-slate-400 ' name='phone' value={usrDetails.phone } onChange={handelChange} />
                <input type="email" placeholder='Email' className='text-base md:text-xl font-light font-sans px-3 py-2 rounded-md outline-none border-slate-400 ' name='email' value={usrDetails.email } onChange={handelChange} />
                <input type="password" placeholder='Password' className='text-base md:text-xl font-light font-sans px-3 py-2 rounded-md outline-none border-slate-400  w-full' name='password' value={usrDetails.password } onChange={handelChange} />
                <input type="text" placeholder='Institute' className='text-base md:text-xl font-light font-sans px-3 py-2 rounded-md outline-none border-slate-400 ' name='institute' value={usrDetails.institute } onChange={handelChange} />
                


                <div className='text-xs md:text-sm '>Already have an account?
                <Link to='/login' className='px-2 font-bold text-green-600 hover:underline hover:underline-offset-2 '>
                 Login  
                </Link>
                
                
                 </div>
                <button type="submit" className='text-base bg-[#7400e8] rounded-md md:text-xl font-SansPro font-bold px-2 py-3 shadow-lg text-slate-100 outline-none border-none ' onClick={showDetails}>Submit</button>
            </form>

          </div>

          </div>
      </div>
    </div>
    </>
  )
}