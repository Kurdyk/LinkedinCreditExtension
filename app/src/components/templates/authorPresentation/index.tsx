import React from 'react'
import { useData } from './hook';
import ProfileCard from 'components/molecules/ProfileCard';
import { Box } from '@mui/material';


const AuthorPresentation : React.FC = () => {

    const authorInfo = useData();

    if (authorInfo === undefined) {
        return (<div>404 Page not found</div>)
    }

    return (
        <Box className="AuthorPage">
            <ProfileCard {...authorInfo}/>
            {/* <Box className="Complement"></Box> */}
        </Box>
    )
}

export default AuthorPresentation