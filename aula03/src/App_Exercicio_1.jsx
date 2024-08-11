import React from 'react'
import Adicao from './components/Adicao'
import Divisao from './components/Divisao'
import './App.css'
import Multiplicacao from './components/Multiplicacao'
import Subitracao from './components/Subitracao'

const App = () => {
  return (
    <div className='container'>
      <Adicao num1={2} num2={3}/>
      <Divisao div1={2} div2={3}/>
      <Multiplicacao num1={3} num2={2} />
      <Subitracao num1={3} num2={3}/>
    </div>
  )
}

export default App