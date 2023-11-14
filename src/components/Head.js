import React from 'react'
import { IMG_MENU, USER_ICON, YOUTUBE_LOGO } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toogleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toogleMenu());
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1 '>
            <img 
            onClick={toggleMenuHandler}
            className='h-8 cursor-pointer'
                alt="Menu"
                src={IMG_MENU}
            />
            <img 
            className='h-8 mx-2'
                alt="youtube logo"
                src={YOUTUBE_LOGO}
            />
        </div>
        <div className='col-span-10 px-10'>
            <input 
              className='w-1/2 border border-gray-400 p-2 rounded-l-full'
              type="text" 
            />
            <button
                className='border border-gray-400 p-2 bg-gray-100 px-4 rounded-r-full'
            >🔍</button>
        </div>
        <div className='col-span-1'>
            <img
            className='h-8'
                alt="USER"
                src={USER_ICON}
            />
        </div>
    </div>
  )
}

export default Head