import React from 'react'
import { Nav } from 'react-bootstrap'

const SectionSelector = () => {
  return (
    <Nav 
      className="justify-content-end" 
      style={{ width: "100%" }}
    >
      <Nav.Link eventKey="algorithms">Algorithms</Nav.Link>
      <Nav.Link eventKey="data-structure">Data Structures</Nav.Link>
    </Nav>
  )
}

export default SectionSelector
