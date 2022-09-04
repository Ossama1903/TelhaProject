import React from 'react'

const Button = (props) => {
    return (
        <div className="rounded-md">
            <a
            
                href="#"
                className="flex m-w-full items-center justify-center rounded-full border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
            >
                {props.text}
            </a>
        </div>
    )
}

export default Button