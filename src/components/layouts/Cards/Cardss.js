import React from 'react'
import modules from './module';
import Card from './Card.js'
const Cardss = () => {
  return (
    <div className="Cardss">
    {modules.map((item) => (
    <li key={modules.ModuleID}>{Card}</li>

    ))}
    </div>
  )
}
  

export default Cardss