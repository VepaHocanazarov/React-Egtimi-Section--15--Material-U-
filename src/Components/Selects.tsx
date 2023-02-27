import { Box, TextField, MenuItem } from '@mui/material'
import React from 'react';
import { useState } from 'react';

export const Selects = () => {
    const [value, setValue] = useState<string[]>([]);
    console.log(value);
    
    return (
        <Box width="200px">

            <TextField select label="Ülke Seçniz" fullWidth value={value}
             onChange={(e)=>setValue( typeof e.target.value === "string"
              ? e.target.value.split(",")
             : e.target.value
             )}
             SelectProps={{
                multiple:true
             }} >

                <MenuItem value="TR"> Türkiye</MenuItem>
                <MenuItem value="USE"> ABD</MenuItem>
                <MenuItem value="FR"> FRANCE</MenuItem>

            </TextField>

        </Box>
    );
};
