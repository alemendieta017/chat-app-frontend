const axios = require('axios')

async function getMessages(chatId) {
  try {
    const response = await axios.get('http://localhost:3000/message/')
    return response.data.body
  } catch (error) {
    console.error(error)
  }
}

async function getChatList(userId) {
  try {
    const response = await axios.get('http://localhost:3000/chat/', { userId })
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
    const response = await axios.post('http://localhost:3000/message', data)
    return response
  } catch (err) {
    console.log(err)
  }
}

export { getMessages, getChatList, addMessage }
