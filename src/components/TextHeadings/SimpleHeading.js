import React from 'react'

const SimpleHeading = (props) => {
  return (
    <h1 className="block xl:inline text-white">{props.text}</h1>
  )
}

export default SimpleHeading