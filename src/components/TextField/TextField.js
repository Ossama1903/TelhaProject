import React from 'react'

const TextField = (props) => {
  return (
    <input className={`${props.width} shadow appearance-none border rounded-md py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="username" type="text" placeholder={props.placeHolder}/>
  )
}

export default TextField