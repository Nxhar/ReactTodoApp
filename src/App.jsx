import { useState } from 'react'
import {TodoComponent} from './components/Todo/TodoComponent'
import './css/Todo.css'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

import Counter from './components/Counter/Counter'

import {Routes, Route} from 'react-router-dom'



const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />

        <Route path='/counter' element={ <Counter /> } />

        <Route path='/todo' element={ <TodoComponent /> } />
      </Routes>
      
    </>
  )
}

export default App

