import React, { useEffect, useState, useContext } from 'react'
import { DataProvider } from '../context/DataContext'
import { getMessages } from '../services/fetch-api'
import '../styles/Message.css'

const Messages = () => {
  const [messages, setMessages] = useState([])
  const { socket, user, currentChat } = useContext(DataProvider)

  useEffect(async () => {
    setMessages(await getMessages())

    socket.on('update', (data) => {
      console.log('updated messages on client')
      console.log(data)
      console.log(currentChat)
      setMessages((messages) => [...messages, data])
    })
  }, [])

  let messageList = messages.map((message) => {
    return (
      <p className="message" key={message._id}>
        <span>{message.user}: </span>
        {message.message}
      </p>
    )
  })
  return <div className="message-area">{messageList}</div>
}

export default Messages
