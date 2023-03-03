import React from 'react';
import { Stack,AvatarGroup,Avatar } from '@mui/material';



export const LessonAvatar = () => {
  return (
    <Stack direction="row" spacing={5} >

        <AvatarGroup>
            <Avatar sx={{marginRight:10}} src='https://randomuser.me/api/portraits/women/56.jpg' />
            <Avatar src='https://randomuser.me/api/portraits/men/56.jpg' />

        </AvatarGroup>

        
        <AvatarGroup max={6}>
          <Avatar sx={{marginRight:10,bgcolor:"deepskyblue",width:50,height:50,padding:0.1}} >Vepa</Avatar>
          <Avatar sx={{marginRight:10,bgcolor:"deepskyblue",width:50,height:50,padding:0.1}} variant='square'>Aygul</Avatar>
          <Avatar sx={{marginRight:10,bgcolor:"deepskyblue",width:50,height:50,padding:0.1}} >Vepa</Avatar>
          <Avatar sx={{marginRight:10,bgcolor:"deepskyblue",width:50,height:50,padding:0.1}}  >Aygul</Avatar>  
          <Avatar sx={{marginRight:10,bgcolor:"deepskyblue",width:50,height:50,padding:0.1}}  >Aygul</Avatar>
          <Avatar sx={{marginRight:10,bgcolor:"deepskyblue",width:50,height:50,padding:0.1}} >Vepa</Avatar>

        </AvatarGroup>
        
    </Stack>
  )
}
