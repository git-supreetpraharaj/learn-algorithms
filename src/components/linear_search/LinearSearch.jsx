import React from 'react'
import { Alert, Button, Col, Container, Form, InputGroup, Row, Toast, ToastContainer } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './linearsearch.css'

const LinearSearch = () => {
    const elementRefs = React.useRef([])
    const keyRef = React.useRef()
    const [keyX, setKeyX] = React.useState() 
    const [keyY, setKeyY] = React.useState() 
    const [keyHeight, setKeyHeight] = React.useState()
    const [arr, setArr] = React.useState([3, 1, 9, 6, 8])
    const [arrLen, setArrLen] = React.useState(5)
    const [key, setKey] = React.useState(6) 
    const [curIdx, setCurIdx] = React.useState(-1)
    const [animateLoc, setAnimateLoc] = React.useState([0, 0])
    const [show, setShow] = React.useState(false)
    const [lengthError, setLengthError] = React.useState(false)
    const [keyError, setKeyError] = React.useState(false)

    const getPosition = () => {
        const x = keyRef.current.offsetLeft
        setKeyX(x);
    
        const y = keyRef.current.offsetTop
        setKeyY(y);

        const height = keyRef.current.offsetHeight
        setKeyHeight(height)
    }

    React.useEffect(() => {
        getPosition()
    }, [])

    React.useEffect(() => {
        window.addEventListener("resize", getPosition)
    }, [])

    const moveNext = () => {
        setCurIdx(curIdx + 1)
        const curEle = elementRefs.current[curIdx + 1].getBoundingClientRect()
        const newKeyLocX = curEle.x - keyX
        const newKeyLocY =  curEle.y - (keyY + keyHeight) - 10
        setAnimateLoc([newKeyLocX, newKeyLocY])
        setShow(true)
    }

    const movePrev = () => {
        setCurIdx(curIdx - 1)
        const curEle = elementRefs.current[curIdx - 1].getBoundingClientRect()
        const newKeyLocX = curEle.x - keyX
        const newKeyLocY =  curEle.y - (keyY + keyHeight) - 10
        setAnimateLoc([newKeyLocX, newKeyLocY])
        setShow(true)
    }

    const handleLengthChange = (e) => {

        e.preventDefault()
        const newLen = Number(e.target.value)

        if (newLen < 1 || newLen > 5) {
            setLengthError(true)
            return
        }

        setLengthError(false)
        var curArr = [...arr]
        if (newLen === arrLen) {
            return
        } else if (newLen > arrLen) {
            for (let i = 0; i < newLen - arrLen; i++)
                curArr.push(0)
        } else {
            for (let i = 0; i < arrLen - newLen; i++)
                curArr.pop()
        }

        setAnimateLoc([0, 0])
        setCurIdx(-1)
        elementRefs.current.pop()
        setArrLen(newLen)
        setArr(curArr)
    }

    const handleValuechange = (e, index) => {
        e.preventDefault()
        const newValue = Number(e.target.value)
        if (newValue < -9 || newValue > 99) {
            return
        }
        const newArr = [...arr]
        newArr[index] = newValue
        setAnimateLoc([0, 0])
        setCurIdx(-1)
        setArr(newArr)
    }

    const handleKeyChange = (e) => {
        e.preventDefault()
        const newKey = Number(e.target.value)
        if (newKey < -9 || newKey > 99) {
            setKeyError(true)
            return
        }
        setAnimateLoc([0, 0])
        setCurIdx(-1)
        setKeyError(false)
        setKey(newKey)
    }

    return (
        <Container className="animation-container" style={{ background: "cyan" }}>
            <Row className="h-100">
                <Col md={8} style={{ background: "pink" }}>
                    <div className="mb-2 d-flex h-100" style={{background:"grey"}}>
                        <motion.div 
                            className="key"
                            animate={{
                                x:animateLoc[0],
                                y:animateLoc[1],
                                backgroundColor:curIdx<arrLen - 1?arr[curIdx]===key?"green":"yellow":arr[curIdx]===key?"green":"red"
                            }} 
                            ref={keyRef}
                        >
                            {key}
                        </motion.div>
                        {
                            arr.map((element, index) => (
                                <motion.div 
                                    className="node" 
                                    key={index}
                                    ref={(el)=>{
                                        elementRefs.current[index] = el
                                    }}
                                    animate={{
                                        backgroundColor: index===curIdx?key===arr[curIdx]?'green':'blue':'red'
                                    }}
                                >
                                    {element}
                                </motion.div>
                            ))
                        }                   
                    </div>
                                 
                        <Alert 
                            variant={
                                curIdx<arr.length-1?
                                arr[curIdx]===key?
                                'success':
                                'info':
                                arr[curIdx]===key?
                                'success':
                                'danger'
                            }  className='instructions'
                        >
                            <strong>
                                    {
                                    curIdx<arr.length-1?
                                    arr[curIdx]===key?
                                    'Key Found!':
                                    'Key Not Matching...':
                                    arr[curIdx]===key?
                                    'Key Found!':
                                    'Element Not Present!'
                                }
                            </strong>
                            <hr className='m-2'/>
                            {
                                curIdx<arr.length-1?arr[curIdx]===key?
                                `Woohoo, Key ${key} found at Index: ${curIdx}!`:
                                `Key ${key} is not matching with element at index ${curIdx}.`:
                                arr[curIdx]===key?
                                `Woohoo, Key ${key} found at Index: ${curIdx}!`:
                                `Oops! Key ${key} is found in the Array!`
                            }
                        </Alert>
                    <ToastContainer position="bottom-center" className="p-3">
                        <Toast 
                            onClose={() => setShow(false)} 
                            bg={
                                    curIdx<arr.length-1?
                                    arr[curIdx]===key?
                                    'success':
                                    'info':
                                    arr[curIdx]===key?
                                    'success':
                                    'danger'
                            } 
                            show={show} 
                            delay={5000} 
                            autohide
                        >
                            <Toast.Header>
                                <strong className="me-auto">
                                    {
                                        curIdx<arr.length-1?
                                        arr[curIdx]===key?
                                        'Key Found!':
                                        'Key Not Matching...':
                                        arr[curIdx]===key?
                                        'Key Found!':
                                        'Element Not Present!'
                                    }
                                </strong>
                            </Toast.Header>
                            <Toast.Body>
                                {
                                    curIdx<arr.length-1?arr[curIdx]===key?
                                    `Woohoo, Key ${key} found at Index: ${curIdx}!`:
                                    `Key ${key} is not matching with element at index ${curIdx}.`:
                                    arr[curIdx]===key?
                                    `Woohoo, Key ${key} found at Index: ${curIdx}!`:
                                    `Oops! Key ${key} is found in the Array!`
                                }
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                    
                    <div className="d-flex justify-content-center">
                        <Button
                            className="mx-3"
                            onClick={movePrev}
                            disabled={curIdx <= 0}
                        >
                            {'<'} Prev Step
                        </Button>
                        <Button
                            className="mx-3"
                            onClick={moveNext}
                            disabled={(curIdx >= arr.length - 1) || (key === arr[curIdx])}
                        >
                           Next Step {'>'}
                        </Button>
                    </div>
                </Col>
                <Col md={4} style={{ background: "pink" }}>
                    <Form style={{background:"green"}} className="py-3">   
                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{width:"40%"}}>
                                Key
                            </InputGroup.Text>
                            <Form.Control
                                type="number"
                                className="text-center"
                                value={key}
                                onChange={handleKeyChange}
                                isInvalid={!!keyError?true:false}
                            />
                            <Form.Control.Feedback type="invalid" className='text-center'>
                                Length should be 1 to 5
                            </Form.Control.Feedback>
                        </InputGroup> 
                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{width:"40%"}}>
                                Array Value
                            </InputGroup.Text>
                            <Form.Control
                                type="number"
                                className="text-center"
                                max="5"
                                min="1"
                                value={arrLen}
                                onChange={handleLengthChange}
                                isInvalid={!!lengthError?true:false}
                            />
                            <Form.Control.Feedback type="invalid" className='text-center'>
                                Key should be -9 to 99
                            </Form.Control.Feedback>
                        </InputGroup>
                        <Form.Label>
                            Enter Element value[-9 to 99] :
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>Value</InputGroup.Text>
                            {
                                arr.map((element, index) => (
                                    <Form.Control 
                                        key={index}
                                        className="array-value" 
                                        aria-label="Values of array" 
                                        type="number"
                                        min="-9"
                                        max="99"
                                        value={element}
                                        onChange={(e)=>{handleValuechange(e, index)}}
                                    />        
                                ))
                            }
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Index</InputGroup.Text>
                            {
                                arr.map((element, index) => (
                                    <Form.Control 
                                        key={index}
                                        className="array-value" 
                                        aria-label="Index of array" 
                                        type="number"
                                        value={index}
                                        disabled
                                    />        
                                ))
                            }
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LinearSearch
