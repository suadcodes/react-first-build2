import React from 'react'
import modules from './module'
import Card from './Card.js'
const Cards = () => {
  return (
    <>
    {modules.map((modules) => (
    <Card key={modules.ModuleID} Card={Card}
    />
    ))}
    </>
  )
}
  

export default Cards