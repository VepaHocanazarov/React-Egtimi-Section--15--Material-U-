import React from 'react';
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, Button, FormHelperText } from "@mui/material";
import { useState } from 'react';

export const RadioExample = () => {

    const [value, setvalue] = useState("");
    const [helpertext, sethelpertext] = useState("");
    const [error, seterror] = useState(false);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
       setvalue(event.target.value);
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        if (value === "canboz"){
            sethelpertext("Dodru Cevap Ofcourse Can Boz Olacak!");     
            seterror(true)   
        }

        else if(value === "ofCourseCanBoz"){
            sethelpertext("Bravo Dogru Seçim!");
            seterror(false)
        }

        else{
            sethelpertext("Lütfen bir seçim yapınız");
            seterror(true)
        }
    }
    return (
        <form onSubmit={handleSubmit} >
            <FormControl error={error} >
                <FormLabel>En İyi Frontend Egitmeni Seçiniz</FormLabel>
                <RadioGroup onChange={handleChange} >
                    <FormControlLabel label="Can Boz" value="canboz" control={<Radio />} />
                    <FormControlLabel label=" Ofcourse Can Boz" value="ofCourseCanBoz" control={<Radio />} />
                </RadioGroup>
                <FormHelperText>{helpertext}</FormHelperText>
                <Button type='submit' variant='outlined' >Ekle</Button>
            </FormControl>
        </form>
    )
}
