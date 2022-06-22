import React, { createContext, useState } from 'react'
import io from 'socket.io-client'
import { API_URL } from '../config'

const socket = io(API_URL, { withCredentials: false })

const DataProvider = createContext()

const DataContext = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    username: null,
    id: null,
  })

  return (
    <DataProvider.Provider value={{ user, setUser, socket }}>
      {children}
    </DataProvider.Provider>
  )
}

export { DataContext, DataProvider }
