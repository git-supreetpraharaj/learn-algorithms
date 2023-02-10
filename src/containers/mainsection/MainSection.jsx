import React from 'react'
import { Col, Row, Stack, Tab } from 'react-bootstrap'
import { ItemList, Searchbar } from '../../components/index.jsx'
import Content from '../content/Content'

const MainSection = () => {

    const [query, setQuery] = React.useState("")
    const [algorithm, setAlgorithm] = React.useState("Linear Search")
    const [algorithmCode, setAlgorithmCode] = React.useState("lin-search")
    const [section, setSection] = React.useState("Searching")

    const handleChange = (newQuery) => {
        setQuery(newQuery)
    }

    const changeAlgorithm = (newSection, newAlgorithm, newAlgorithmCode) => {
        setSection(newSection)
        setAlgorithm(newAlgorithm)
        setAlgorithmCode(newAlgorithmCode)
    }

    return (
        <Tab.Container
            defaultActiveKey="lin-search"
        >
            <Row style={{background:"blue"}} className='h-100'>
                <Col md={3}>
                    <Stack gap={3} className='h-100 p-3' style={{background:"yellow"}}>
                        <Searchbar value={query} onChange={handleChange}/>
                        <ItemList 
                            query={query} 
                            activeAlgorithm={algorithm} 
                            activeAlgorithmCode={algorithmCode} 
                            onClick={changeAlgorithm}/>
                    </Stack>
                </Col>
                <Col md={9}>
                    <Content 
                        section={section}
                        algorithm={algorithm} 
                        algorithmCode={algorithmCode}
                    />
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default MainSection
