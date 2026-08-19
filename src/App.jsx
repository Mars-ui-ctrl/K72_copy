import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import WelcomeAnim from './components/anims/WelcomeAnim'
import { useState } from 'react'
import Carl from './assets/Carl_480x640.webp';
import Olivier from './assets/Olivier_480x640.webp';
import ChantalG from './assets/ChantalG_480x640.webp';
import Michele from './assets/Michele_480X640.webp';
import Mel from './assets/MEL_480X640.webp';
import Camille from './assets/CAMILLE_480X640_2.webp';
import Meggie from './assets/MEGGIE_480X640_2.webp';
import Joel from './assets/joel_480X640_3.webp';

[Carl, Olivier, ChantalG, Michele, Mel, Camille, Meggie, Joel].forEach((src) => {
  const img = new Image();
  img.src = src;
});

const App = () => {
  return (
    <div className=''>
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
