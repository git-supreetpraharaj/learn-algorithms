import './App.css';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Header, MainSection } from './containers';
const App = () => {
  return (
    <Container className="vh-100" style={{background:"red"}} fluid>
      <Row>
        <Col>
          <Header/>
        </Col>
      </Row>
      <Row className="main-section-row">
        <Col>
          <MainSection/>
        </Col>
      </Row>
      <Row>
        <Col>
          Footer
        </Col>
      </Row>
    </Container>
  )
}

export default App
