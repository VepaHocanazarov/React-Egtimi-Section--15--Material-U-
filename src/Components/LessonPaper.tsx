import React from 'react';
import { Paper,Box } from '@mui/material';

export const LessonPaper = () => {
  return (

    <Box sx={{display:'flex',gap:"20px"}}  >
    <Paper sx={{width:100, height:100}} />
    <Paper sx={{width:100, height:100}} elevation={3} />
    <Paper sx={{width:100, height:100}} elevation={2} />
    <Paper sx={{width:100, height:100}} variant='outlined' square />



    </Box>
  )
}
