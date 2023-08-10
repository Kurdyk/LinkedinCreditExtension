import React from 'react'
import { BackgourndProps } from './type'

const Background : React.FC<BackgourndProps> = ({backgroundImgUrl}) => {

    // const url = require((backgroundImgUrl === undefined)? "./defaultBackground.png" : backgroundImgUrl);

    return (
        <img src={"/assets/defaultBackground.png"} alt="background" className='BackgroundImage'/>
    )
}

export default Background