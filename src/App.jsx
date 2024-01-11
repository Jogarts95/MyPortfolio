import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'


function App() {

  return (
    <div>
      <Sidenav/>
      <Main/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
