import React, { createContext, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:3000', { withCredentials: true })

const DataProvider = createContext()

const DataContext = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    username: null,
    id: null,
  })

  const [currentChat, setCurrentChat] = useState(null)

  return (
    <DataProvider.Provider
      value={{ user, setUser, socket, currentChat, setCurrentChat }}
    >
      {children}
    </DataProvider.Provider>
  )
}

export { DataContext, DataProvider }
