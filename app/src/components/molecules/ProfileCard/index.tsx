import { Avatar, Box, Typography } from '@mui/material'
import Background from 'components/atoms/BackGround'
import LinkSection from 'components/atoms/LinkSection'
import { Author } from 'data/type'
import React from 'react'

const ProfileCard : React.FC<Author> = ({name, links, avatarImgUrl, backgroundImgUrl, description}) => {
    return (
        <Box className="ProfileCard">
            <Background backgroundImgUrl={backgroundImgUrl}/>
            <Avatar src={avatarImgUrl}/>
            <Box className="TextSection">
                <Typography variant='h2'>{name}</Typography>
                <Typography variant='body1'>{description}</Typography>
            </Box>
            <LinkSection linkDescriptions={links}/>
        </Box>
    )
}

export default ProfileCard