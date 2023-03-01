import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';

export const LessonCard = () => {
    return (
        <Card sx={{
            width:350,
            
        }}>
            <CardMedia height="250" component="img" image="https://source.unsplash.com/random" />
            <CardContent>
                <Typography variant='h5' component="div" >
                    Başlıgım
                </Typography>
                <Typography variant='body2' component="p" >
                    Başlıgım: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, autem similique reprehenderit rem excepturi ratione omnis,
                    veniam unde maiores optio dicta eius eaque ad sit ab quidem quaerat error laudantium.
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='error' variant='outlined' >Temizle</Button>
                <Button color='primary' variant='outlined'>Kaydet</Button>
            </CardActions>
        </Card>
    )
}
