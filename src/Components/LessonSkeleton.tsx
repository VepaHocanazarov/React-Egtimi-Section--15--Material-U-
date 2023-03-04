import React from 'react';
import {Stack,Skeleton,Box,Button} from "@mui/material";
import {useState} from "react";

export const LessonSkeleton = () => {
    const [loading, setLoading] = useState(false)
  return (
    <Box >

        {loading ? (
            <Skeleton
            width={500}
            height={500}
            animation="wave"/>
        ) :(
            <img 
            src="https://source.unsplash.com/random/256*144"
             alt="skeleton"
            width={500}
            height={500} />
        )
            
        }

        <Button variant='contained'
        sx={{marginBottom:"10px"}}
         onClick={()=> setLoading(false)} >Refresh to Open Skeleton</Button>

        <Button variant='contained'
         onClick={()=> setLoading(true)} >Refresh to Close Skeleton</Button>
    </Box>
  )
}
