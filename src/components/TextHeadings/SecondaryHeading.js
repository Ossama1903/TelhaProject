import React from 'react'

const secondaryHeading = (props) => {
  return (
    <h1 className="block xl:inline text-white text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">{props.text}</h1>
  )
}

export default secondaryHeading