import React from 'react'

export default function MainPage(props) {
  return (
    <>
        <div className='w-screen h-screen pt-24 '>
                <div className='w-full h-full px-40  '>
                    {props.comp}
                </div>
        </div>
    </>
  )
}
