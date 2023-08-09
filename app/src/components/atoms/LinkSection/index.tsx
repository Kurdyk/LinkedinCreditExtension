import React from 'react'
import { LinkSectionProps } from './type'
import { Box } from '@mui/material'

const LinkSection : React.FC<LinkSectionProps> = ({linkDescriptions}) => {
    
    if (linkDescriptions === undefined) {
        return (<></>)
    }

    return (
        <Box className = "LinkSection">
            {
                linkDescriptions.map(({name, url, imgSrc}) => {
                    return (
                        <a href={url} key={name} className="Link">
                            <img src={imgSrc} alt={name} className="LinkSectionImg"/>
                            <p>{name}</p>
                        </a>
                    )
                })
            }
        </Box>
    )
}

export default LinkSection