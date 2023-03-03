import React, { useState } from 'react';
import { BottomNavigation,BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const LessonBottomNavigation = () => {

const [value, setValue] = useState(0);
console.log(value);


  return (
    <BottomNavigation showLabels
    value={value}
    sx={{position:"absolute",width:"100%",bottom:0}}
    onChange={(event,newValue)=>{
        setValue(newValue)
    }}
    >
        <BottomNavigationAction icon={<RestoreIcon/>} label="Öncekiler" />
        <BottomNavigationAction icon={<FavoriteIcon/>} label="Sevdiklerim" />
        <BottomNavigationAction icon={<LocationOnIcon/>} label="Konumum" />
    </BottomNavigation>
  )
}
