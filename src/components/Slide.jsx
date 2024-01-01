import React from 'react'

const Slide = ({content, name}) => {
  return (
    <div className="slide flex flex-col justify-between">
        <p className='text-sm h-1/2 text-justify '>{content}</p>
        <p className='text-sm h-1/2 flex flex-col justify-end'>{name}</p>
    </div>
  )
}

export default Slide