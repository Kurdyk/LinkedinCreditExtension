import React from 'react'
import { BackgourndProps } from './type'

const Background : React.FC<BackgourndProps> = ({backgroundImgUrl}) => {
    return (
        <img src={backgroundImgUrl} alt="background" className='BackgroundImage'/>
    )
}

export default Background