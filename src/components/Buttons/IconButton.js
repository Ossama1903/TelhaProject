import React from 'react'

const IconButton = (props) => {
  return (
    <div className='flex items-center cursor-pointer text-indigo-600 hover:text-indigo-800'>
        <h3> {props.text} </h3>
        <ion-icon size="large" name={props.iconName} ></ion-icon>
    </div>
  )
}

export default IconButton