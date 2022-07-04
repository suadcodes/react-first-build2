import React from 'react'
import modules from './module'
const Cardss = () => {
  return (
    <div className="card-grid">
    {modules.map(card => {
      return <Card card={newmm} key={modules.id} />
    })}
  </div>
  )
}
  

export default Cardss