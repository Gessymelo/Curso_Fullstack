import React from 'react'

const QuilometroParaMilhas = (props) => {
    const milhas = props.quilometros * 0.0621371;
  return (
    <div className='convercao'>
        <h1> O valor da  KM è: {props.quilometros}  e seu valor em Milhas: {milhas}  </h1>
    </div>
  )
};

export default QuilometroParaMilhas