import React from 'react';
import {CircularProgress,Stack,LinearProgress} from "@mui/material"

export const LessonProgress = () => {
  return (

    <Stack spacing={4}>
          <CircularProgress/>
          <CircularProgress color='success' />
          <CircularProgress color='secondary' />
          <CircularProgress variant='determinate' value={90} color='secondary' />

           <LinearProgress/>
           <LinearProgress color='success'/>
           <LinearProgress variant='determinate' value={90} color='error' />


    </Stack>
  )
}
