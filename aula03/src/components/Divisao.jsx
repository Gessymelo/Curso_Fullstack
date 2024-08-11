import React from 'react'

const Divisao = (props) => {
    const resultado = props.div1 / props.div2;
  return (
    <div className='operacao'>
        <h1> O resultado da divisao {props.div1} / {props.div2} = {resultado}</h1>
    </div>
  )
};

export default Divisao