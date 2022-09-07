import React from 'react'

const Button = (props) => {
    return (
        <div className="rounded-md">
            <a
                href="#"
                className={`flex m-w-full items-center justify-center rounded-full border border-transparent bg-indigo-600 px-${props.width-2} py-${props.height-1} text-base font-medium text-white hover:bg-indigo-700 md:py-${props.height} md:px-12 md:text-lg`}
            >
                {props.text}
            </a>
        </div>
    )
}

export default Button