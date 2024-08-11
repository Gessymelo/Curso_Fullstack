import React from 'react'

import style from './EstacaoAno.module.css'
const EstacaoAno = (props) => {

    const defineMsg = (mes) =>{
        if(mes === "verao") {
            return "Tempo de praia e sol!"
        } else if (mes === "outono") {
            return "Folhas caindo, outono chegando!"
        }  else if (mes === "inverno"){
            return "Época de frio e aconchego!"
        }
        else{
            return "Flores e cores, é primavera!" 
        }
    }

    const defineCorDeFundo = (mes) =>{
        if(mes === "verao") {
            return style.verao
        } else if (mes === "outono") {
            return style.outono
        }  else if (mes === "inverno"){
            return style.inverno
        }
        else{
            return style.primavera
        }
    }


  return (
    <div className= {defineCorDeFundo(props.mes)}>
        <p>{defineMsg(props.mes)}</p>
        </div>
  )
}

export default EstacaoAno