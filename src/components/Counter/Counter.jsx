import React, { useState } from 'react'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Counter() {
    const [counter, setCounter] = useState(0)

    const handlePlus = () => {
        setCounter(counter+1)
    }

    const handleMinus = () => {
        setCounter(counter-1)
    }

  return (
    <div className='Counter'>
        <h1>Counter App</h1>
        <div>
        <button className="minus" onClick={handleMinus}><FontAwesomeIcon icon={faMinus} /></button>
        <div className="count">Count is : {counter}</div>
        <button className="plus" onClick={handlePlus}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    </div>
  )
}

export default Counter