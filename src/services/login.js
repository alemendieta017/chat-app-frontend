import axios from 'axios'
import { API_URL } from '../config'

async function login(username, password) {
  try {
    const response = await axios.post(API_URL + 'auth/login', {
      username,
      password,
    })
    return response.data.body
  } catch (err) {
    console.log('error')
  }
}
async function register(username, password) {
  try {
    const response = await axios.post(API_URL + '/user', {
      username,
      password,
    })
    console.log(response.data.body)
    return response.data.body
  } catch (err) {
    console.log('error')
  }
}

export { login, register }
