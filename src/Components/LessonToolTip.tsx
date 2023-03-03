import React from 'react';
import { Tooltip, IconButton, Button, Box } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";

export const LessonToolTip = () => {
    return (

        <Box>

            <Tooltip title="Sil" placement='top' >
                <IconButton sx={{marginRight:"10px"}}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Add"  disableInteractive >
              <Button  >Arrow</Button>
            </Tooltip>

            
            <Tooltip title="Add"  disableInteractive >
              <Button disabled >Arrow</Button>
            </Tooltip>


        </Box>

    )
}
