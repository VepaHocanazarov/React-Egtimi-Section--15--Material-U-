import React from 'react';
import { Box } from '@mui/material';

export const LessonBox = () => {
  return (
    <Box
    sx={{
        backgroundColor:"lightblue",
        width:"100px",
        height:"100px",
        padding:"20px",
        color:"white",
        "&:hover":{
            color:"red",
            backgroundColor:"primary.light",
            cursor:"pointer"
        }

    }}>LessonBox</Box>
  )
}
  