import React, { useRef, useContext, useState } from 'react'
import { login, register } from '../services/login'
import '../styles/LoginForm.css'
import { DataProvider } from '../context/DataContext'

const LoginForm = () => {
  const { setUser } = useContext(DataProvider)
  const [loginErrorMsg, setLoginErrorMsg] = useState(false)
  const userTextBox = useRef(null)
  const passwordTextBox = useRef(null)
  const userTextBoxRegister = useRef(null)
  const passwordTextBoxRegister = useRef(null)

  async function handleLogginClick() {
    try {
      // const user = await login(
      //   userTextBox.current.value,
      //   passwordTextBox.current.value
      // )
      setUser({
        logged: true,
        username: userTextBox.current.value,
        // id: user.id,
      })
    } catch (err) {
      setLoginErrorMsg(true)
    }
  }

  // async function handleRegisterClick() {
  //   try {
  //     const user = await register(
  //       userTextBoxRegister.current.value,
  //       passwordTextBoxRegister.current.value
  //     )
  //     setUser({
  //       logged: true,
  //       username: user.username,
  //       id: user._id,
  //     })
  //   } catch (error) {
  //     setLoginErrorMsg(true)
  //   }
  // }
  return (
    <div className="login-container">
      {loginErrorMsg && <p className="errorMsg">Datos invalidos</p>}
      <div className="login-form form">
        <p>Debes iniciar sesion para chatear!</p>
        <input ref={userTextBox} type="text" placeholder="username" />
        {/* <input ref={passwordTextBox} type="password" placeholder="password" /> */}
        <button onClick={handleLogginClick}>Log In</button>
      </div>
      {/* <div className="register-form form">
        <p>Aun no estás registrado? Registrate</p>
        <input ref={userTextBoxRegister} type="text" placeholder="username" />
        <input
          ref={passwordTextBoxRegister}
          type="password"
          placeholder="password"
        />
        <button onClick={handleRegisterClick}>Register</button>
      </div> */}
    </div>
  )
}

export default LoginForm
