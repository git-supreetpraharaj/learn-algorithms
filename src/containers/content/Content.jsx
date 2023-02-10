import React from 'react'
import "./content.css"
import { LinearSearch, MDDisplay } from '../../components'

const Content = ({ section, algorithm, algorithmCode }) => {
  return (
    <div className="d-flex flex-column h-100" style={{background:"cyan"}}>
      <div className='pt-3'>
        <h3><strong>{algorithm}</strong> ({section})</h3>
      </div>
      <div className='p-2'>
        Playground
      </div>
      <div className='playground'>
        <LinearSearch/>
      </div>
      <div className="knowledge">
        <MDDisplay 
          algorithmCode={algorithmCode}
        />
      </div>
    </div>
  )
}

export default Content
