import React from 'react';
import { FormControl, FormLabel, FormControlLabel, Box, Checkbox, FormHelperText, FormGroup } from "@mui/material";
import { useState } from 'react';

export const Checkboxs = () => {

  const [isAcsept, setIsAcsept] = useState(false);
  const [knowlegde, setKnowlegde] = useState<string[]>([]);

  console.log(knowlegde)

  const handleKnowlegdeChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    const index = knowlegde.indexOf(event.target.value);
    if(index === -1){
      setKnowlegde([...knowlegde,event.target.value]);
    }
    else{
      setKnowlegde(knowlegde.filter((item)=>item !== event.target.value));
    }

  }

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

            <FormControlLabel control={<Checkbox checked={isAcsept}
              onChange={(e) => setIsAcsept(e.target.checked)} />}
              label="Kullanım Koşullarını Kabul Ediyourm." />

          </FormGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel error >Frontend de Neleri biliyorsunuz</FormLabel>
          <FormGroup row >

            <FormControlLabel control={<Checkbox checked={knowlegde.includes("react")}
              onChange={handleKnowlegdeChange} />}
              label="React Js"
              value="react" />

            <FormControlLabel control={<Checkbox checked={knowlegde.includes("angular")}
              onChange={handleKnowlegdeChange} />}
              label="Angular Js"
              value="angular" />

            <FormControlLabel control={<Checkbox checked={knowlegde.includes("vue")}
              onChange={handleKnowlegdeChange} />}
              label="Vue Js"
              value="vue" />

          </FormGroup>
        </FormControl>
      </Box>
    </Box>

  )
}
