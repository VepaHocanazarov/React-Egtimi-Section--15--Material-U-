
import React, { useState } from 'react';
import {Stack} from "@mui/material";
import { LoadingButton } from '@mui/lab';


export const LessonLoadingButton = () => {

  const [value, setValue] = useState(false)
  return (
    <Stack>
    <LoadingButton loading >Kaydet</LoadingButton>
    <LoadingButton loading={value} onClick={()=>{setValue(true)}} >Kaydet</LoadingButton>

    </Stack>
  )
}
