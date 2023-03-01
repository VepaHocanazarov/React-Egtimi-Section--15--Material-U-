import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const LessonAccardion = () => {

  const [expanded, setExpanded] = useState<string|false>(false)

  const handleChange=(panel:string)=>(event:React.SyntheticEvent,isExpanded:boolean)=>{
    setExpanded(isExpanded ? panel : false);
    console.log(isExpanded);
    
  }
  return (
    <div>
      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography>Birinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Minima quasi quas aspernatur ipsam atque numquam obcaecati voluptatibus est nemo eos.
          Iure voluptatum veniam eligendi corrupti modi commodi necessitatibus quaerat eius.</AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography>İkinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Minima quasi quas aspernatur ipsam atque numquam obcaecati voluptatibus est nemo eos.
          Iure voluptatum veniam eligendi corrupti modi commodi necessitatibus quaerat eius.</AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography>Üçüncü Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Minima quasi quas aspernatur ipsam atque numquam obcaecati voluptatibus est nemo eos.
          Iure voluptatum veniam eligendi corrupti modi commodi necessitatibus quaerat eius.</AccordionDetails>
      </Accordion> */}

<Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography>Birinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Minima quasi quas aspernatur ipsam atque numquam obcaecati voluptatibus est nemo eos.
          Iure voluptatum veniam eligendi corrupti modi commodi necessitatibus quaerat eius.</AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography>İkinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Minima quasi quas aspernatur ipsam atque numquam obcaecati voluptatibus est nemo eos.
          Iure voluptatum veniam eligendi corrupti modi commodi necessitatibus quaerat eius.</AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography>Üçüncü Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Minima quasi quas aspernatur ipsam atque numquam obcaecati voluptatibus est nemo eos.
          Iure voluptatum veniam eligendi corrupti modi commodi necessitatibus quaerat eius.</AccordionDetails>
      </Accordion>
    </div>
  )
}
