import React from 'react'
import contentLinks from '../../data/algorithm-links.json'
import axios from 'axios'
import storage from '../../firebase_setup/firebase'
import { ref, getDownloadURL } from "firebase/storage"
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const MDDisplay = ({ algorithmCode }) => {

  const [content, setContent] = React.useState()

  

  React.useEffect(() => {
    getDownloadURL(ref(storage, `${algorithmCode}.md`))
    .then((url) => {
      console.log('url->',url)
      axios({
        url:url,
        method: 'GET',
        responseType: 'text'
      })
      .then((response) => {
        console.log('res->',response)
        setContent(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    })
    .catch((error) => {
      console.log(error)
    });
  }, [algorithmCode])

  return (
    <ReactMarkdown 
      
    >
      {content}
    </ReactMarkdown>
  )
}

export default MDDisplay
