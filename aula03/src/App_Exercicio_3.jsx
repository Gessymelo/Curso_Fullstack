import React from 'react'

import './App.css'
import ListaDeLivros from './components/ListaDeLivros'


const App = () => {
  {/* aqui eu quero um array de livros pnde cada livro  è um objeto literal com titulo autor e ano*/}
  const livros = [{titulo: "Clean code", autor: " bob", ano: "1999" },
    {titulo: "senhor dos aneis", autor: " J.R.R Tolkien", ano: "1954" },
    {titulo: "Harry Potter", autor: " J.K Rowling", ano: "2007" }
  ]
  
  return (
    <div className='container'>
      {/* Importa a lista de livros pasando como prop livros*/}
      <h1>Lista de Livros</h1>
      <ListaDeLivros livros={livros}/>

     
    </div>
  )
}

export default App