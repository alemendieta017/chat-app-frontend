const axios = require('axios')
const { API_URL } = require('../config.js')

async function getMessages(chatId) {
  try {
    const response = await axios.get(`${API_URL}message`)
    return response.data.body
  } catch (error) {
    console.error(error)
  }
}

async function getChatList(userId) {
  try {
    const response = await axios.get(`${API_URL}chat`)
    return response
  } catch (error) {}
}

async function addMessage(userId, message) {
  let data = {
    chat: '62b27b0c936d3a103fefca12',
    user: userId,
    message,
  }
  try {
    const response = await axios.post(API_URL + 'message', data)
    return response
  } catch (err) {
    console.log(err)
  }
}

export { getMessages, getChatList, addMessage }
