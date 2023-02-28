import React from 'react';
import './App.css';
import LessonTypography from './Components/LessonTypography';
import { LessonButton } from './Components/LessonButton';
import { LessonButtonGroup } from './Components/LessonButtonGroup';
import { LessonTextField } from './Components/LessonTextField';
import { RadioGroups } from './Components/RadioGroups';
import { RadioExample } from './Components/RadioExample';
import { Selects } from './Components/Selects';
import { Checkboxs } from './Components/Checkboxs';
import { LessonAutoComplete } from './Components/LessonAutoComplete';
import { LessonBox } from './Components/LessonBox';

function App() {
  return (
    <div className="App">
      {/* <LessonTypography/> */}
      {/* <LessonButton /> */}
      {/* <LessonButtonGroup/> */}
      {/* <LessonTextField/> */}
      {/* <RadioGroups/> */}
      {/* <RadioExample/> */}
      {/* <Selects/> */}
      {/* <Checkboxs/> */}
      {/* <LessonAutoComplete/> */}
      <LessonBox/>
    </div>
  );
}

export default App;
