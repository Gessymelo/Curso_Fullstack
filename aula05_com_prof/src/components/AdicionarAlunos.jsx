import React from 'react'
import axios from 'axios'

const AdicionarAlunos = () => {

    const urlBase = "http://localhost:3000"

    const addAluno = async () => {
        const response = await axios.post(`${urlBase}/alunos`,{
            nome: "Fulaninho",
            email: "fulaninho@gmaol.com"
        })

        console.log("Aluno adicionado com sucesso!")
        alert("Aluno cadrastado com sucesso!")
    }

    

  return (
    <div>
        <button onClick={addAluno}>Adicionar Fulaninho</button>
        
        </div>
  )
}

export default AdicionarAlunos