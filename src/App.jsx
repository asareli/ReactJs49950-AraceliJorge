import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
      <>
      <div className='body-container'>
      <NavBar/>
      <ItemListContainer greeting={"Greetings, dear readers!"}/>
      </div>
      </>
  )
}

export default App