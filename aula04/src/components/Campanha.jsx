import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {
    function defineMensagem(mes) {
        switch (mes) {
            case 'setembro':
                return "Prevenção ao suicídio";                
            case 'outubro':
                return "Conscientização sobre o câncer de mama";
            default:
                return "Prevenção e combate ao câncer de próstata.";
        }
        
    }

    const defineCorFundo = (mes) => {
        switch (mes) {
            case  'setembro':
                return styles.setembro;
            case 'outubro':   
                return styles.outubro;
            default: 
                return styles.novembro;
        }

       
    }

  return (
    <div className= {defineCorFundo(props.mes)}>
        <p>{defineMensagem(props.mes)}</p>
        
    </div>
  )
}

export default Campanha