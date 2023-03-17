import React from 'react'
import MainPage from '../components/MainPage'
import MultiActionAreaCard from '../components/MuiComponents/MultiActionAreaCard'
import Nav from '../components/Nav'
import Subject from '../db/Subject'

export default function Learnings() {
  return (
    <>
      <Nav/>
      <MainPage comp={
        <>
        <div className='pt-10 w-full h-full'>
                <div className='text-2xl font-bold text-slate-700 mt-3'>Learnings</div>
                <div className='grid w-full h-full gap-4 pb-3'>
                  <div className='text-xl font-bold text-slate-700 mt-3'>Frontend</div>

                    <div className='flex gap-3'>
                    {
                          Subject.map(({subject,desc},i)=>{
                            return (<>
                              <MultiActionAreaCard subject={subject} desc={desc}/>

                            </>
                            )
                          })
                      }
                    </div>
                  </div>
                <div className='grid w-full h-full gap-4 pb-3'>
                  <div className='text-xl font-bold text-slate-700 mt-3'>Backend</div>

                    <div className='flex gap-3'>
                    {
                          Subject.map(({subject,desc},i)=>{
                            return (<>
                              <MultiActionAreaCard subject={subject} desc={desc}/>

                            </>
                            )
                          })
                      }
                    </div>
                  </div>
                <div className='grid w-full h-full gap-4 pb-3'>
                  <div className='text-xl font-bold text-slate-700 mt-3'>Database</div>

                    <div className='flex gap-3'>
                    {
                          Subject.map(({subject,desc},i)=>{
                            return (<>
                              <MultiActionAreaCard subject={subject} desc={desc}/>

                            </>
                            )
                          })
                      }
                    </div>
                  </div>

                <div className='grid w-full h-full gap-4 pb-3'>
                  <div className='text-xl font-bold text-slate-700 mt-3'>Machin Learning And Deep Learning</div>

                    <div className='flex gap-3'>
                    {
                          Subject.map(({subject,desc},i)=>{
                            return (<>
                              <MultiActionAreaCard subject={subject} desc={desc}/>

                            </>
                            )
                          })
                      }
                    </div>
                  </div>
                  
            </div>
        </>
      }/>
    </>

  )
}
