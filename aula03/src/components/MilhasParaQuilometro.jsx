import React from 'react'

const MilhasParaQuilometro = (props) => {
    const quilometros  = props.milhas * 1.60934;
    return (
      <div className='convercao'>
          <h1> O valor da  Milha è: {props.milhas}  e seu valor em KM: {quilometros} </h1>
      </div>
    )
}

export default MilhasParaQuilometro