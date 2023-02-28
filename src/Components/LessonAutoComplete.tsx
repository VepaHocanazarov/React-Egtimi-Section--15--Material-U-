import React from 'react';
import { TextField, Autocomplete } from '@mui/material';

const top100Films = [
  { label: "The Shawsnak Redemtion", year: 1994 },
  { label: "God Father", year: 1994 },
  { label: "God Father", year: 1994 },
  { label: "God Father", year: 1994 },
  { label: "The Shawsnak Redemtion", year: 1994 },
  { label: "The Shawsnak Redemtion", year: 1994 },
  { label: "TheRobin Hood", year: 1994 },
  { label: "TheRobin Hood", year: 1994 },
  { label: "The Shawsnak Redemtion", year: 1994 },
  { label: "The Shawsnak Redemtion", year: 1994 },
  { label: "The vandam", year: 1994 },
  { label: "The vandam", year: 1994 },
  { label: "The Shawsnak Redemtion", year: 1994 },
  { label: "The Dark night", year: 1994 },
  { label: "The Dark night", year: 1994 },
  { label: "The Shawsnak Redemtion", year: 1994 },
  { label: "The Fight Club", year: 1994 },
  { label: "The Fight Club", year: 1994 },
  { label: "The Shawsnak Redemtion", year: 1994 },
  { label: "The Shawsnak Redemtion", year: 1994 },
  { label: "The Shawsnak Redemtion", year: 1994 },
  { label: "The Avangers", year: 1994 },
  { label: "The Avangers", year: 1994 },
  { label: "The Shawsnak Redemtion", year: 1994 },
  { label: "Ant Man 1", year: 1994 },
  { label: "Ant Man 1", year: 1994 },
  { label: "The Shawsnak Redemtion", year: 1994 },
  { label: "The Shawsnak Redemtion", year: 1994 },
  { label: "The Wonder Woman", year: 1994 },

];

export const LessonAutoComplete = () => {
  return (
    <Autocomplete
      options={top100Films}
      sx={{width:300}}
      renderInput={(params) => <TextField {...params} label="Filmler" />}
    />
  )
}
