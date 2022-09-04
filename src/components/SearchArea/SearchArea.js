import React from 'react'
import '../../index.css'
import Dropdown from '../Dropdown/Dropdown'


const SearchArea = () => {
  return (
    <div className='p-5 bg-indigo-400'>
        <div className='Containerr flex items-center gap-5'>
            <Dropdown />
            <Dropdown />
        </div>
    </div>
  )
}

export default SearchArea