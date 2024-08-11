import React from 'react'

const CelsiusParaFahrenheit = (props) => {
    const fahrenheit = (props.celsius *9 /5)+ 32;
  return (
    <div className='convercao'>
        <h1> o valor de celsius {props.celsius} para fahrenheit è {fahrenheit.toFixed(2)} </h1>
        </div>
  )
}

export default CelsiusParaFahrenheit