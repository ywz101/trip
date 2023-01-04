import MyRequest from '../request/index'

export function getCityAll() {
  return MyRequest.get({
    url: '/city/all'
  })
}