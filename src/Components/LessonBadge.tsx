import React from 'react';
import { Stack,Badge} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export const LessonBadge = () => {
  return (
<Stack direction="row" spacing={3}>
    <Badge badgeContent={50} color='secondary'>
        <MailIcon />
    </Badge>

    <Badge badgeContent={50} color='secondary' max={40}>
        <MailIcon />
    </Badge>

    <Badge badgeContent={50} color='secondary' anchorOrigin={{
        vertical:"bottom",
        horizontal:"right"
    }}>
        <MailIcon />
    </Badge>

    <Badge badgeContent={50} color='secondary' anchorOrigin={{
        vertical:"bottom",
        horizontal:"left"
    }}>
        <MailIcon />
    </Badge>
</Stack>
    )
}
