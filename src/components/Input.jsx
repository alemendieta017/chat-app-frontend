import React, { useContext, useRef, useCallback, useEffect } from 'react'
import { DataProvider } from '../context/DataContext'
import { addMessage } from '../services/fetch-api'
import '../styles/Input.css'

const Input = () => {
  const messageText = useRef(null)
  const { socket, user } = useContext(DataProvider)

  function handleSendMessage() {
    addMessage(user.username, messageText.current.value)
    socket.emit('newMessage')
    messageText.current.value = null
  }

  return (
    <div className="input-area">
      <input ref={messageText} className="input-text" type="text" />
      <button onClick={handleSendMessage} className="button">
        Send
      </button>
    </div>
  )
}

export default Input

/*  chat: chat,
user: user,
message: message, */
