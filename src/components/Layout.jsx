import React, { useState, useEffect, useContext } from 'react'
import Groups from './Groups'
import Messages from './Messages'
import Input from './Input'
import LoginForm from './LoginForm'
import { DataProvider } from '../context/DataContext'
import '../styles/Layout.css'

const Layout = () => {
  const { user } = useContext(DataProvider)

  return (
    <div className="wrapper">
      {!user.logged && <LoginForm />}
      <Groups />
      <Messages />
      <Input />
    </div>
  )
}

export default Layout
