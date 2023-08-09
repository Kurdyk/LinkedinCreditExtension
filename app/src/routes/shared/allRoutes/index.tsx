import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { allRoutes } from './const';
import { Box } from '@mui/material';

const AllRoutes : React.FC = () => {
  return (
    <Box id="RoutesBox">
        <Routes>
            {allRoutes.map((route) => {
                const { path, element } = route;
                return (
                    <Route key={path} path={path} element={element}/>
                )
            })}
            <Route path="*" element={<div>404 Page not found</div>}/>
        </Routes>
    </Box>
  )
}

export default AllRoutes;