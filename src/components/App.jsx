import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Intro from './Intro';
import Main from './MainLayout'; 
import '../styles/layout.css'






function App() {
  const [started, setStarted] = useState(false);

  function onStart(){
    setStarted(true);
  }
  return (
    <>
    {started === false ? <Intro onStart={onStart}/> : <Main />}
    </>
    
  )
}

export default App
