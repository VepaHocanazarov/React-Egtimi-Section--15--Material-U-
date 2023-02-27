import React from 'react';
import { FormControl, FormLabel, FormControlLabel, Box, Checkbox, FormHelperText, FormGroup } from "@mui/material";
import { useState } from 'react';

export const Checkboxs = () => {

  const [isAcsept,setIsAcsept] = useState(false);
  console.log(isAcsept);
  
  return (

    <Box>

      <Box>
        <FormControl>
          <FormLabel>Egtim Durumunuzu Seçiniz</FormLabel>
          <FormGroup row >

            <FormControlLabel disabled control={<Checkbox />} label="İlkokul" />
            <FormControlLabel control={<Checkbox />} label="Lise" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Universite" />

          </FormGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Egtim Durumunuzu Seçiniz</FormLabel>
          <FormGroup row >

            <FormControlLabel  control={<Checkbox checked={isAcsept}
             onChange={(e)=>setIsAcsept(e.target.checked)} />}
             label="Kullanım Koşullarını Kabul Ediyourm." />

          </FormGroup>
        </FormControl>
      </Box>
    </Box>

  )
}
