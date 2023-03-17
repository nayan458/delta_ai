import React from 'react'
import MainPage from '../components/MainPage'
import Nav from '../components/Nav'
import ImageIcon from '@mui/icons-material/Image';
import AlignItemsList from '../components/MuiComponents/AlignItemsList';

export default function Mentor() {
  return (
    <>
        <Nav/>
        <div className='flex w-screen m-auto gap-2 fixed bottom-2 align-middle items-center justify-center '>
                <div>
                    <input className='border-2 border-purple-500 p-4 w-[400px] m-auto rounded-md' placeholder='start your chat here. . .' type='text'></input>
                </div>
                <div>
                    <button className='text-purple-500 text-2xl'><i class="fa-solid fa-paper-plane"></i></button>
                </div>
                </div>
            
      <MainPage comp={
        <>
                <div className='pt-10 w-full h-full'>
                    <div className='text-2xl font-bold text-slate-700 mb-3'>Chat with mentor</div>
                    <div className='grid w-full gap-4 pb-3'>
                            <AlignItemsList/>

                    </div>
                </div>
        </>
            }
        />
    </>
  )
}
