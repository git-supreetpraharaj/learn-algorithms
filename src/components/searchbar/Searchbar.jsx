import React from 'react'
import { Form } from 'react-bootstrap'

const data = [
    {
        key: "linear-search",
        value: "Linear Search"
    },
]

const Searchbar = (props) => {
    
    const handleChange = (e) => {
        e.preventDefault()
        props.onChange(e.target.value)
    }

    return (
        <Form.Control
            placeholder='Enter algorithm name here'
            aria-label='Algorithm search'
            aria-describedby='algorithm-search'
            value={props.value}
            onChange={handleChange}
        />
    )
}

export default Searchbar
