import React from 'react'
import './itemlist.css'
import AlgorithmsList from '../../data/algorithm-list.json'
import { ListGroup } from 'react-bootstrap'

const ItemList = ({ query, activeAlgorithm, activeAlgorithmCode, onClick }) => {

    const handleOnClick = (e, item, algorithm) => {
        onClick(item.name, algorithm.name, algorithm.key)
    }

    return (
        <div className='list-group-container'>
            {                                
                AlgorithmsList.filter(item => {
                    if (query === '') {
                        return item
                    } else if (item.name.toLowerCase().includes(query.toLowerCase()) || item.algorithms
                    .filter(algorithm => algorithm.name.toLowerCase().includes(query.toLowerCase())).length !== 0) {
                        return item
                    }
                }).map((item)=> { 
                    return (
                        <ListGroup key={item.key} className="item-group-list" style={{background:"pink"}} >
                            <div key={item.key} className="list-title d-flex justify-content-center">
                                <h6 key={item.key}>{item.name}</h6>
                            </div>  
                            {
                                item.algorithms
                                    .filter(algorithm => algorithm.name.toLowerCase().includes(query.toLowerCase()))
                                    .map((algorithm)=>(
                                        <ListGroup.Item 
                                            id={algorithm.key}
                                            key={algorithm.key} 
                                            action 
                                            eventKey={algorithm.key} 
                                            className="d-flex justify-content-between"
                                            active={algorithm.key===activeAlgorithmCode}
                                            onClick={e=>handleOnClick(e, item.name, algorithm)}
                                        >
                                            {algorithm.name}
                                        </ListGroup.Item>
                                    ))
                            }
                        </ListGroup>
                    )
                })
            }
        </div>
    )
}

export default ItemList
