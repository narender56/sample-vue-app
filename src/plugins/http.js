import axios from 'axios'
import store from '@/store'
import config from '../../config'
// import { $eventBus } from '../plugins/config'

const HTTP = axios.create({
  baseURL: config.API_URL || '/',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request Interceptor
HTTP.interceptors.request.use(request => {
  const token = store.state?.user?.token
  if (token) {
    request.headers.common['authorization'] = token
  }
  return request
}, Promise.reject)

const onError = (error) => {
  if (error.message === 'Network Error') {
    // console.log('network error)
  }
}

const GET = async (url) => {
  try {
    const response = await HTTP.get(url)
    return response.data
  } catch (err) {
    onError(err)
    throw err
  }
}

const POST = async (url, data, headerParams = {}) => {
  /* Overrides/adds header properties needed beyond the defaults. */
  for (const key in headerParams) {
    HTTP.defaults.headers[key] = headerParams[key]
  }

  try {
    const response = await HTTP.post(url, data)
    return response.data
  } catch (err) {
    onError(err)
    throw err
  }
}

const PATCH = async (url, data) => {
  try {
    const response = await HTTP.patch(url, data)
    return response.data
  } catch (err) {
    onError(err)
    throw err
  }
}

const PUT = async (url, data) => {
  try {
    const response = await HTTP.put(url, data)
    return response.data
  } catch (err) {
    onError(err)
    throw err
  }
}

const DELETE = async (url) => {
  try {
    const response = await HTTP.delete(url)
    return response.data
  } catch (err) {
    onError(err)
    throw err
  }
}

export default {
  HTTP,
  GET,
  POST,
  PUT,
  PATCH,
  DELETE
}
