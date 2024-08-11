import React from 'react'

const FahrenheitParaCelsius = (props) => {
    const celsius = (props.fahrenheit - 32) * 5 / 9;
  return (
    <div className='convercao'>
        <h1> o valor de fahrenheit {props.fahrenheit} para celsius è {celsius} </h1>
    </div>
  )
};

export default FahrenheitParaCelsius