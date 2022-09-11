import React from 'react'

const SmallHeading = (props) => {
  return (
    <h1 className='max-w-full text-lg font-bold leading-relaxed mt-2 mb-2 text-neutral-700' >
        {props.text}
    </h1>
  )
}

export default SmallHeading