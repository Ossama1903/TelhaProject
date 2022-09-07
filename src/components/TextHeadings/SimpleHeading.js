import React from 'react'

const SimpleHeading = (props) => {

  var baseSize = props.size-2;
  var baseString;
  if(baseSize===1){
    baseString="text-xl";
  }
  else{
    baseString=`text-${baseSize}xl`;
  }

  var baseColor = `text-${props.color}`

  return (
    <h1 className={`block xl:inline ${baseColor} font-bold tracking-tight ${baseString} sm:text-${props.size-1}xl md:text-${props.size}xl`}>{props.text}</h1>
  )
}

export default SimpleHeading