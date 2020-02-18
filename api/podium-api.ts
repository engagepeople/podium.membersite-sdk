import Axios, { AxiosRequestConfig } from 'axios'

const Token = require('@/token').default

export class PodiumAPI {
  private static instance: PodiumAPI
  private axios = Axios.create({
    baseURL: process.env.API_BASEURL
  })

  private constructor() {}

  private get token() {
    return Token.token
  }

  static getInstance() {
    if (!PodiumAPI.instance) {
      PodiumAPI.instance = new PodiumAPI()
    }

    return PodiumAPI.instance
  }

  get interceptors() {
    return this.axios.interceptors
  }

  get(endpoint: string, config?: AxiosRequestConfig) {
    return this.axios.get(endpoint, {
      ...config,
      headers: { Authentication: this.token }
    })
  }

  post(endpoint: string, data?: any, config?: AxiosRequestConfig) {
    return this.axios.post(endpoint, data, {
      ...config,
      headers: {
        Authentication: this.token
      }
    })
  }

  put(endpoint: string, data?: any, config?: AxiosRequestConfig) {
    return this.axios.put(endpoint, data, {
      ...config,
      headers: { Authentication: this.token }
    })
  }

  delete(endpoint: string, config?: AxiosRequestConfig) {
    return this.axios.delete(endpoint, {
      ...config,
      headers: { Authentication: this.token }
    })
  }
}
