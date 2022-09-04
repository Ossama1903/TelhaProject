import React from 'react';
import '../../index.css';
import Dropdown from '../Dropdown/Dropdown';
import TextField from '../TextField/TextField';
import Button from '../Buttons/Button';
import SimpleHeading from '../TextHeadings/SimpleHeading';


const SearchArea = () => {
  return (
    <div className='py-20 bg-indigo-400 mt-10 mb-10'>
        <div className='text-center mb-10'>
            <SimpleHeading text="Lorem Ipsum" />
        </div>
        <hr className="my-20 mx-auto w-14" />

        <div className='Containerr flex items-center gap-5 justify-around'>
            <Dropdown />
            <Dropdown />
            <TextField placeHolder="Lorem Ipsum" />
            <Button text="Lorem" width={10} height={3} />
        </div>
    </div>
  )
}

export default SearchArea