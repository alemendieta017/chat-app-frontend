import axios from 'axios'

async function login(username, password) {
  try {
    const response = await axios.post('http://localhost:3000/auth/login', {
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
    const response = await axios.post('http://localhost:3000/user', {
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
