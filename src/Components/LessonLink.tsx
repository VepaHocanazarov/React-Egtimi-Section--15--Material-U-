import React from 'react';
import { Link, Box } from '@mui/material';

export const LessonLink = () => {
    return (

        <Box >
            {/* <Link href='https://www.canboz.com/' >Websiteme Git</Link>
            <Link href='https://www.canboz.com/' color="error" >Websiteme Git</Link>
            <Link href='https://www.canboz.com/' color="error" variant='body2'>Websiteme Git</Link> */}

            <Link href='https://www.canboz.com/' sx={{padding:4}} underline='none'>Websiteme Git</Link>
            <Link href='https://www.canboz.com/' sx={{padding:4}} underline='hover'>Websiteme Git</Link>
            <Link href='https://www.canboz.com/' sx={{padding:4}} underline='always' component="button" onClick={()=>{
                console.log("Vepa");               
            }} >Websiteme Git </Link>



        </Box>


    )
}
