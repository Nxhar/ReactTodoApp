import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='Home'>
        <h1>Welcome to React Playground!</h1>

        <h2> Here is a list of our Projects: </h2>
        <Link className='link' to='/counter' >Counter</Link>
        <Link className='link' to='/todo' >Todo App</Link>
    </div>
  )
}

export default Home