import React from 'react'

const App = () => {

  const condicional = true;
  const style = condicional
    ?{
      color:'#0000ff',
      backgroundColor:'#ffc0cb',
      width: '300px',
      padding:'15px'
    }
  : {    
      color:'#000000',
      backgroundColor:'#ffffff',
      width: '250px',
      padding:'5px'    
    };

  return (
    <div style={style}>
      texto com estilo inline dinamico
    </div>
  )
}

export default App