import React, { useState } from 'react'
import MainPage from '../components/MainPage'
import Nav from '../components/Nav'
import useAi from '../Hooks/useAi'
import delta from '../media/delta.png'
import ReactMarkdown from 'react-markdown'
import SwipeableTemporaryDrawer from '../components/MuiComponents/SwipeableTemporaryDrawer'
import FloatButton from '../components/FloatButton'
import { Link } from '@mui/material'
import Spinnn from '../components/Spinnn'


export default function Home() {

    const {text, response, spin,codeBlock, error, handleClick, handleChange} = useAi()  

    const inputBox = document.querySelector('.input-box');
    // const codeblock = <ReactMarkdown>{codeBlock}</ReactMarkdown>
    

  return (<>
  {
    spin ? <Spinnn/>
    : <></>
  }
    
    <Nav/>
    <Link to='/mentor'>
        <FloatButton/>
    </Link>
    <MainPage
        comp={<>
            <div className='w-full h-full flex flex-col items-center pt-24 gap-12'>
                <div className='text-5xl font-extrabold text-center '>
                    Delta! small changes, makes great difference in future.
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='w-full flex justify-center'>
                        <div className='flex bg-slate-100 max-w-min py-1 px-2 rounded-2xl justify-center align-middle items-center border-2 border-[ #7400e8] shadow-sm'>
                            <input type="text" className='input-box w-[30rem] p-5 bg-slate-100 font-medium text-slate-600 text-lg outline-none' value={text} onChange={handleChange} placeholder="html accessibility"/>
                            <button onClick={handleClick} className="w-14 h-14  p-2 border-2 border-violet-500/30 rounded-full flex justify-center align-middle items-center">
                                <img src={delta} alt='img' className='max-w-min rotate-90'/>
                            </button>
                        </div>
                        <div type="text" className='p-5 font-text-lg outline-none'>
                            {/* <button className="w-14 h-14  p-2 border-2 border-violet-500/30 rounded-full flex justify-center align-middle items-center text-xlg text-[#7400e8]"> */}
                                <SwipeableTemporaryDrawer/>
                            {/* </button> */}
                        </div>
                    </div>
                    <div className='w-full h-fit flex justify-center align-middle'>
                        <div className=' w-[80%] my-6'>
                            {
                                error ? <> 
                                    <div className='w-[60%] p-3 rounded-md text-center text-red-900 bg-red-300/80 border-2 border-red-600 font-bold m-auto'>
                                        Please enter valid input 
                                    </div>
                                </> : <></>
                            }
                            
                            {response}
                            <br></br>
                            {response ? <>
                            <div className='border-2 border-purple-400/70 p-5 bg-slate-100 text-black rounded-lg mt-5'>
                                <pre>
                                <code>
                                <ReactMarkdown>
                                {codeBlock}
                                </ReactMarkdown>
                                </code>
                                </pre>
                            </div>
                            </>
                            :
                            <></>
                            }
                        </div>
                    </div>
                </div>    
            </div>

        </>
        }
    />
  </>
  )
}
