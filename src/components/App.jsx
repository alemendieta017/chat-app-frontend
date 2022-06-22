import React, { useEffect, useState, useContext } from 'react'
import Layout from './Layout'
import { DataContext } from '../context/DataContext'

const App = () => {
  return (
    <DataContext>
      <Layout />
    </DataContext>
  )
}

export default App
