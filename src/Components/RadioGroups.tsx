import React from 'react';
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, FormHelperText } from "@mui/material";
import { useState } from 'react';

export const RadioGroups = () => {

  const [value, setvalue] = useState("");
  console.log(value);
  

  // const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
  // setvalue(event.target.value);

  // }
  return (
    <FormControl>
      <FormLabel>Maşş Beklentiniz</FormLabel>
      <RadioGroup row name='extected-salary' value={value} onChange={(e)=> setvalue(e.target.value)} >
        <FormControlLabel label="2000$" value="2000" control={<Radio />}/>
        <FormControlLabel label="3000$" value="3000" control={<Radio/>} />
        <FormControlLabel label="4000$" value="4000" control={<Radio/>} />
      </RadioGroup>

      <FormHelperText>Yalnış Seçim</FormHelperText>
    </FormControl>
  )
}
