import React from 'react';
import { Alert, Stack, AlertTitle } from '@mui/material';

export const LessonAlert = () => {
    return (

        <Stack spacing={2} >

            <Alert severity='error'>
                <AlertTitle>Error</AlertTitle>
                LessonAlert</Alert>
            <Alert severity='warning'>
                <AlertTitle>Error</AlertTitle>
                LessonAlert</Alert>
            <Alert severity='success'>
                <AlertTitle>Error</AlertTitle>
                LessonAlert</Alert>
            <Alert severity='info'>
                <AlertTitle>Error</AlertTitle>
                LessonAlert</Alert>

        </Stack>
    )
}
