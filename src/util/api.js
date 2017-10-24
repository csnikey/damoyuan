import axios from 'axios'
import qs from 'qs'
const PROXY_PATH = 'http://172.16.247.72:3004/'

const queryParser = function (url, query) {
  if (!query) return PROXY_PATH + url
  return `${PROXY_PATH}${url}?${qs.stringify(query)}`
}

const checkStatus = function (res) {
  if (res.status === 200) {
    return res
  } else {
    return res.statusText
  }
}

export default {
  get (url, params) {
    return axios.get(queryParser(url, params)).then(res => checkStatus(res)).then(res => res.data)
  },
  post (url, params) {
    return axios.post(`${PROXY_PATH}${url}`, params).then(res => checkStatus(res)).then(res => res.data)
  }

}
