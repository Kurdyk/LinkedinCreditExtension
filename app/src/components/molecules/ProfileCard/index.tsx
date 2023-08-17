import { Avatar, Box, Typography } from '@mui/material'
import Background from 'components/atoms/BackGround'
import LinkSection from 'components/atoms/LinkSection'
import { Author } from 'data/type'
import React from 'react'
import { majFirstLetter } from './hook'

const ProfileCard : React.FC<Author> = ({name, links, avatarImgUrl, backgroundImgUrl, description}) => {
    return (
        <Box className="ProfileCard">
            <Box className="BackgroundWrapper">
                <Background backgroundImgUrl={backgroundImgUrl}/>
            </Box>
            <Avatar src={avatarImgUrl} className='Avatar'/>
            <Box className="Information">
                <Box className="TextSection">
                    <Typography variant='h2' className='Name'>{majFirstLetter(name)}</Typography>
                    <Typography variant='body1' className='Description'>{description}</Typography>
                </Box>
                <LinkSection linkDescriptions={links}/>
            </Box>
        </Box>
    )
}

export default ProfileCard