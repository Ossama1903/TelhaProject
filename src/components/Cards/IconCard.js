import React from 'react'
import SmallHeading from '../TextHeadings/SmallHeading'
import Paragraph from '../Paragraph/Paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const IconCard = (props) => {
  return (
    <div className='items-center'>
        <div className='text-indigo-600'>
            <ion-icon size="large" name="happy-outline"></ion-icon>
        </div>
        <SmallHeading text={props.headingText} />
        <Paragraph textSize="text-base" text={props.paragraphText}/>
    </div>
    
  )
}

export default IconCard