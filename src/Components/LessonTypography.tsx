import { Typography } from '@mui/material';
import React from 'react'

const LessonTypography = () => {
    return (
        <div>
            <Typography variant='body1'>
                Body 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ipsam impedit mollitia rerum soluta doloremque numquam cum itaque ratione ducimus!
            </Typography>

            <Typography variant='body2'>
                Body 2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ipsam impedit mollitia rerum soluta doloremque numquam cum itaque ratione ducimus!
            </Typography>

            <Typography variant='h1'> H1 Görünüm</Typography>
            <Typography variant='h2'> H2 Görünüm</Typography>
            <Typography variant='h3'> H3 Görünüm</Typography>
            <Typography variant='h4'> H4 Görünüm</Typography>
            <Typography variant='h5'> H5 Görünüm</Typography>
            <Typography variant='h6'> H6 Görünüm</Typography>

            <Typography variant='h1' component="h4"> H6 Görünüm</Typography>

            <Typography variant='h1' component="h4" align='left'> H6 Görünüm</Typography>
            <Typography variant='h1' component="h4"align='right'> H6 Görünüm</Typography>

            <Typography variant='subtitle1' > Alt Başlık</Typography>

            <Typography variant='subtitle2' > Alt Başlık</Typography>




        </div>
    )
}

export default LessonTypography


