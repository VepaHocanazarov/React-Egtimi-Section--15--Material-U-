import React from 'react';
import { Stack, Divider } from '@mui/material';

export const LessonStack = () => {
    return (
        <Stack direction={{ xs: "column", sm: "row", md: "column" }}
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 1, sm: 2, md: 3 }}
            divider={<Divider orientation='vertical' flexItem />} >
            <div>Item 1</div>
            <div>Item 1</div>
            <div>Item 1</div>

        </Stack>
    )
}
