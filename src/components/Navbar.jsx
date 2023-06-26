import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/counter'>Counter App</Link>
        <Link className='link' to='/todo'>Todo App</Link>
    </div>
  )
}

export default Navbar