import React from 'react'
import MainPage from '../components/MainPage'
import FolderList from '../components/MuiComponents/FolderList'
import MultiActionAreaCard from '../components/MuiComponents/MultiActionAreaCard'
import SwipeableTemporaryDrawer from '../components/MuiComponents/SwipeableTemporaryDrawer'
import Nav from '../components/Nav'
import Subject from '../db/Subject'

export default function Explore() {
  return (
    <>
      <Nav/>
      <MainPage comp={
        <>
            <div className='pt-10 w-full h-full'>
                <div className='text-2xl font-bold text-slate-700 mb-3'>Explore</div>
                <div className='grid w-full h-full grid-cols-9 gap-4 pb-3'>
                    <div className='col-span-7 grid grid-cols-3 gap-2'>
                    {
                        Subject.map(({subject,desc},i)=>{
                          return (
                            <MultiActionAreaCard subject={subject} desc={desc}/>
                          )
                        })
                    }
                    </div>
                    <div className='col-span-2'>
                        <div className='border-2 p-7 rounded-lg max-h-[500px] fixed min-h-[200px] overflow-y-auto '>
                          <div className='text-2xl font-bold text-slate-700 '>
                            Mentors
                          </div>
                          <FolderList/>
                        </div>

                        </div>
                </div>
            </div>
        </>
      }/>
    </>

  )
}
