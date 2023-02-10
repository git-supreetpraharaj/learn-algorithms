import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { SectionSelector, SectionTitle } from '../../components'

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
            <SectionTitle />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <SectionSelector/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
