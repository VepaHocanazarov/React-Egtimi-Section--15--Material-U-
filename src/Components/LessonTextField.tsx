import React from 'react'
import { Stack, TextField, InputAdornment } from "@mui/material"
import { useState } from "react"

export const LessonTextField = () => {
    const [value, setvalue] = useState("");
    return (
        <Stack spacing={4}>

            <Stack direction="row" spacing={2}>

                <TextField label="Ad" variant='outlined' size='small' color='error' />
                <TextField label="Ad" variant='outlined' helperText="Lütfen isminizi giriniz" />
                <TextField label="Ad" variant='outlined' helperText="Lütfen isminizi giriniz"
                    disabled
                    type='password' />
                <TextField label="Toplam"
                    variant='outlined'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start' >TL</InputAdornment>
                        )
                    }}
                />
                <TextField
                    variant='outlined'
                    label="Toplam"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end' >TL</InputAdornment>
                        )
                    }}
                />

                <Stack direction="row" >

                    <TextField
                        onChange={(e) => setvalue(e.target.value)}
                        value={value}
                        type='password'
                        variant='outlined'
                        label="Şifre"
                        helperText={!value ? "Lütfen Şifrenizi giriniz"
                            : "Şifrenizi kimseyle paylaşmayınız"}
                    />

                </Stack>





            </Stack>

        </Stack>
    )
}
