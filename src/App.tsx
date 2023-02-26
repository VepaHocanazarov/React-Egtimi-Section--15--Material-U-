import React from 'react';
import './App.css';
import LessonTypography from './Components/LessonTypography';
import { LessonButton } from './Components/LessonButton';
import { LessonButtonGroup } from './Components/LessonButtonGroup';

function App() {
  return (
    <div className="App">
      {/* <LessonTypography/> */}
      {/* <LessonButton /> */}
      <LessonButtonGroup/>
    </div>
  );
}

export default App;
