import axios from 'axios'

export default axios.create({
  baseURL: 'https://breach-qr-fullstack.herokuapp.com'
})