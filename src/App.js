import React from 'react'
import "./App.css"
import Header from './Component/Header'
import NavMenu from './Component/Navbar'
import Card from './Component/Cards'

const App = () => {
  return (
    <div>
      <NavMenu />
      <Header />
      <div className='cardsec'>
        <Card />
        <Card />
      <Card />
      
    </div>
    </div>
  )
}

export default App
