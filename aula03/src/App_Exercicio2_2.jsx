import React from 'react'

import './App.css'
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit'
import QuilometroParaMilhas from './components/QuilometroParaMilhas'
import MilhasParaQuilometro from './components/MilhasParaQuilometro'



const App = () => {
  return (
    <div className='container'>
      <h1>Converção</h1>
     <FahrenheitParaCelsius fahrenheit={25}/>
     <CelsiusParaFahrenheit celsius = {31}/>
     <QuilometroParaMilhas quilometros = {2}/>
     <MilhasParaQuilometro milhas ={5}/>
    </div>
  )
}

export default App