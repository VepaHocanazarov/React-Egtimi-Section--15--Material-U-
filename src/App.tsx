import React from 'react';
import './App.css';
import LessonTypography from './Components/LessonTypography';
import { LessonButton } from './Components/LessonButton';
import { LessonButtonGroup } from './Components/LessonButtonGroup';
import { LessonTextField } from './Components/LessonTextField';

function App() {
  return (
    <div className="App">
      {/* <LessonTypography/> */}
      {/* <LessonButton /> */}
      {/* <LessonButtonGroup/> */}
      <LessonTextField/>
    </div>
  );
}

export default App;
