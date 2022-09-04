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
        <hr className="my-14 mx-auto w-14" />

        <div className='Containerr flex md:flex-row flex-col items-center gap-10 md:gap-5 justify-around '>
            <Dropdown width="md:w-1/5 w-4/5" />
            <Dropdown width="md:w-1/5 w-4/5" />
            <TextField width="md:w-1/5 w-4/5" placeHolder="Lorem Ipsum" />
            <Button  text="Lorem" width={10} height={3} />
        </div>
    </div>
  )
}

export default SearchArea