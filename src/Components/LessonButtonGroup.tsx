import { Button, Stack,ButtonGroup } from '@mui/material';

import React from 'react'

export const LessonButtonGroup = () => {
  return (
<Stack direction="row">
<ButtonGroup variant='outlined' orientation='vertical' >
    <Button>Outlined</Button>
    <Button>Outlined</Button>
    <Button>Outlined</Button>
</ButtonGroup>

<ButtonGroup  variant='contained' size='small'>
    <Button>Contained</Button>
    <Button>Contained</Button>
    <Button>Contained</Button>
</ButtonGroup>

<ButtonGroup  variant='text' color='error'>
    <Button>Text</Button>
    <Button>Text</Button>
    <Button>Text</Button>
</ButtonGroup>

</Stack>
  )
}
