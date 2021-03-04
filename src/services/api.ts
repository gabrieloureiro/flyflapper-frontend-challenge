import axios from 'axios'

const api = axios.create({
  baseURL: 'https://flapper-frontend-challenge.herokuapp.com/',
  responseType: 'json',
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default api
