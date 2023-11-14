import React from 'react'

const Button = ({title}) => {
  return (
    <div>
        <button
            className='px-5 py-2 m-5 bg-gray-200 rounded'
        >{title}</button>
    </div>
  )
}

export default Button