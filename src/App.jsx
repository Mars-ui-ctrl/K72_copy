import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import WelcomeAnim from './components/anims/WelcomeAnim'
import { useState } from 'react'

const App = () => {
  return (
    <div className='bg-black'>
      <WelcomeAnim />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agence' element={<Agence />} />
          <Route path='/projets' element={<Projects />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
