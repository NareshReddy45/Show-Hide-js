import React, {useState} from 'react'
import './index.css'

const ShowHide = () => {
  const [firstname] = useState('Joe')
  const [showFirstname, setShowFirstname] = useState(false)

  const [lastname] = useState('Jonas')
  const [showLastname, setShowLastname] = useState(false)

  const toggleFirstname = () => {
    setShowFirstname(!showFirstname)
  }

  const toggleLastname = () => {
    setShowLastname(!showLastname)
  }

  return (
    <div className="container">
      <h1>Show/Hide</h1>
      <div className="flex-container1">
        <div>
          <button onClick={toggleFirstname} className="button1">
            Show/Hide Firstname
          </button>
          <div className="box1">{showFirstname && <p>{firstname}</p>}</div>
        </div>
        <div>
          <button onClick={toggleLastname} className="button2">
            Show/Hide Lastname
          </button>
          <div className="box2">{showLastname && <p>{lastname}</p>}</div>
        </div>
      </div>
    </div>
  )
}

export default ShowHide
