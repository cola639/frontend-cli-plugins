import request from 'utils/request'

export function apiLogin(data: any) {
  return request({
    url: '/api/account/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
