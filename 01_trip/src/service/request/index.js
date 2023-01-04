import axios from 'axios'
import { baseURL, timeout } from './config'

class MyRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config)
                   .then(res => resolve(res.data))
                   .catch(err => reject(err))
    })
  }

  get(config) {
    return this.request({
      ...config,
      method: 'GET'
    })
  }

  post(config) {
    return this.request({
      ...config,
      method: 'POST'
    })
  }
}

export default new MyRequest(baseURL, timeout)