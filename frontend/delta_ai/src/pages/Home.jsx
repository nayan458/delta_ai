import React from 'react'
import MainPage from '../components/MainPage'
import Nav from '../components/Nav'
import useAi from '../Hooks/useAi'
import delta from '../media/delta.png'

export default function Home() {
    const {text, response, handleClick, handleChange} = useAi()
    const style = {
        backgroundColor : '#7400e8',
        color : '#ffffff',
        borderRadius : "50%",
        width : "50px",
        height : "50px",
        ":hover" : {
            bgcolor : '#5900b3',
            color : "#f2f2f2"
        }
    }

  return (<>
    <Nav/>
    <MainPage
        comp={<>
            <div className='w-full h-full flex flex-col items-center pt-24 gap-12'>
                <div className='text-5xl font-extrabold text-center '>
                    Delta! small changes, makes great difference in future.
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='w-full flex justify-center'>
                        <div className='flex bg-slate-100 max-w-min py-1 px-2 rounded-2xl justify-center align-middle items-center border-2 border-[ #7400e8] shadow-sm'>
                            <input type="text" className='w-[30rem] p-5 bg-slate-100 font-medium text-slate-600 text-lg outline-none' value={text} onChange={handleChange} placeholder="html accessibility"/>
                            <button onClick={handleClick} className="w-14 h-14  p-2 border-2 border-violet-500/30 rounded-full flex justify-center align-middle items-center">
                                <img src={delta} alt='img' className='max-w-min rotate-90'/>
                            </button>
                        </div>
                        <div type="text" className='p-5 font-text-lg outline-none'>
                            <button onClick={handleClick} className="w-14 h-14  p-2 border-2 border-violet-500/30 rounded-full flex justify-center align-middle items-center text-xlg text-[#7400e8]">
                                <i className="fa-solid fa-filter"></i>
                            </button>
                        </div>
                    </div>
                    <div className='w-full h-fit flex justify-center align-middle'>
                        <div className=' w-[80%] my-6'>
                            {response}
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
