import React, { useEffect, useState, useContext, useRef } from 'react'
import { DataProvider } from '../context/DataContext.jsx'
import { getChatList } from '../services/fetch-api.js'
import '../styles/Groups.css'

const Groups = () => {
  const [chatList, setChatList] = useState([])
  const { user, setCurrentChat } = useContext(DataProvider)

  useEffect(async () => {
    const list = await getChatList()
    setChatList(list.data.body)
  }, [])

  return (
    <div className="groups-container">
      {chatList.map((chat) => {
        return (
          <div
            onClick={() => {
              setCurrentChat(chat._id)
            }}
            className="group"
            key={chat._id}
          >
            <h2>Chat General</h2>
            <p>Cant. Integrantes {chat.users.length}</p>
          </div>
        )
      })}
      {user.logged && (
        <p className="msg-bienvenida">Bienvenido {user.username}</p>
      )}
    </div>
  )
}

export default Groups
