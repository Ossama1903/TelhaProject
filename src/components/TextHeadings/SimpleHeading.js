import React from 'react'

const SimpleHeading = (props) => {
  return (
    <h1 className="block xl:inline text-white text-3xl font-bold tracking-tight sm:text4xl md:text-5xl">{props.text}</h1>
  )
}

export default SimpleHeading