/// <reference path="./index.d.ts" />
import { PodiumAPI } from './podium-api'
import API from './index'

PodiumAPI.prototype.auth = {
  /**
   * Logs in user
   * @param username
   * @param password
   * @param programRegistrationId - optional
   */
  async login(
    username: string,
    password: string,
    programRegistrationId?: number
  ) {
    return await API.post('/login', {
      user_account: username,
      password,
      program_slug: process.env.PROGRAM_SLUG,
      program_registration_id: programRegistrationId
    })
  },

  /**
   * Logs out user
   */
  async logout() {
    return await API.post('/logout')
  }
}
