import axios from 'axios'
import qs from 'qs'
const neturl = 'http://10.0.1.147.8001/'

const queryParser = function (url, query) {
  if (!query) return neturl + url
  return `${neturl}${url}?${qs.stringify(query)}`
}

export default {
  get (url, params) {
    return axios.get(queryParser(url, params))
  },
  post (url, params) {
    return axios.post(`${neturl}${url}`, params)
  }

}
