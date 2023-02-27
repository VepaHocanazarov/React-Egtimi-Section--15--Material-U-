import React from 'react';
import './App.css';
import LessonTypography from './Components/LessonTypography';
import { LessonButton } from './Components/LessonButton';
import { LessonButtonGroup } from './Components/LessonButtonGroup';
import { LessonTextField } from './Components/LessonTextField';
import { RadioGroups } from './Components/RadioGroups';
import { RadioExample } from './Components/RadioExample';
import { Selects } from './Components/Selects';

function App() {
  return (
    <div className="App">
      {/* <LessonTypography/> */}
      {/* <LessonButton /> */}
      {/* <LessonButtonGroup/> */}
      {/* <LessonTextField/> */}
      {/* <RadioGroups/> */}
      {/* <RadioExample/> */}
      <Selects/>
    </div>
  );
}

export default App;
