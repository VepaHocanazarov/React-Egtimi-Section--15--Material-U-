import React from 'react';
import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const LessonButton = () => {
    return (

        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <Button variant='text' >Text</Button>
                <Button variant='outlined' >Outline</Button>
                <Button variant='contained' >Contained</Button>
            </Stack>

            <Stack direction="row" spacing={2}>
                <Button variant='text' color='primary' >Text</Button>
                <Button variant='text' color='secondary' >Mor</Button>
                <Button variant='text' color='success' >Yeşil</Button>
                <Button variant='text' color='error' >Kırımızı</Button>
                <Button variant='text' color='warning' >Sarı</Button>
                <Button variant='text' color='info' >Mavi</Button>
            </Stack>

            <Stack direction="row" spacing={2}>
                <Button variant='outlined' color='primary' >Text</Button>
                <Button variant='outlined' color='secondary' >Mor</Button>
                <Button variant='outlined' color='success' >Yeşil</Button>
                <Button variant='outlined' color='error' >Kırımızı</Button>
                <Button variant='outlined' color='warning' >Sarı</Button>
                <Button variant='outlined' color='info' >Mavi</Button>
            </Stack>

            <Stack direction="row" spacing={2}>
                <Button variant='contained' color='primary' >Text</Button>
                <Button variant='contained' color='secondary' >Mor</Button>
                <Button variant='contained' color='success' >Yeşil</Button>
                <Button variant='contained' color='error' >Kırımızı</Button>
                <Button variant='contained' color='warning' >Sarı</Button>
                <Button variant='contained' color='info' >Mavi</Button>
            </Stack>

            <Stack direction='row' display='block' spacing={3} >
                <Button variant='outlined' size='small' >Küçük</Button>
                <Button variant='outlined' size='medium' >Orta</Button>
                <Button variant='outlined' size='large' >Büyük</Button>
            </Stack>

            <Stack direction="row" spacing={2}>
            <AddIcon color='error'/>

            <Button variant='contained' startIcon={<AddIcon />} >Ekle</Button>
            <Button variant='contained' endIcon={<AddIcon />} onClick={()=> alert("Tıklandı") }>Ekle</Button>

            </Stack>
        </Stack>

    )
}
