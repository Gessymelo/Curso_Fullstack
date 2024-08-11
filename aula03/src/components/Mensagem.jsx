import React from 'react'

const Mensagem = ({tipo}) => {

    const renderizandoMengem = () =>{
        
        if(tipo === "sucesso"){
            return <h1>Operaçao realizada com sucesso!</h1>
        } else if (tipo === "erro"){
            return <h2>Ocorreu um erro na Operacao</h2>
        }else if (tipo === "aviso") {
            return <h3>Atencao! verifique os dados! </h3>
        }else{
            return null
        }
    };
  return (
   
        <div className='mensagem'>
            {renderizandoMengem ()}
                     
        </div>
   
    
  )
};

export default Mensagem