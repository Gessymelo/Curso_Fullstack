import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Inicial01 from './pages/Inicial01'
import Noticias from './pages/Noticias'
import DpoLgpd from './pages/DpoLgpd'
import NavBar from './components/NavBar'
import VisualizarNoticia from './pages/VisualizarNoticia'


const App = () => {
  return (
    <BrowserRouter>
    <h1>Unisp - centro universitario</h1>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Inicial01/>} />
        <Route path="/noticias" element={<Noticias/>} />
        <Route path="/dpo-lgpd" element={<DpoLgpd/>}   />
        <Route path="/visualizar-noticia/:id" element={<VisualizarNoticia/>}   />

    </Routes>
    </BrowserRouter>
  )
}

export default App