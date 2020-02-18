/// <reference path="./index.d.ts" />
import { PodiumAPI } from './podium-api'
import API from './index'

PodiumAPI.prototype.registration = {
  /**
   * [GET] Returns the types of registrations (made in Podium Admin)
   */
  async types() {
    return await API.get(
      `member/program/${process.env.PROGRAM_SLUG}/program-registration`
    )
  },

  /**
   * [GET] Returns the registraion configration of a certain type
   * provided by the id
   * @param programId - program id
   */
  async config(programId: number) {
    return await API.get(
      `member/program-registration/${programId}/user-registration`
    )
  },

  /**
   * [POST] the registration information
   * @param programId - program id
   * @param payload - registration form inputs
   */
  async submit(programId: number, data: any) {
    return await API.post(
      `member/program-registration/${programId}/user-registration`,
      data
    )
  },

  /**
   * [GET] Verifies a users email after registration
   * @param token - email verification token
   */
  async verifyEmail(token: string) {
    return await API.get(`member/email/verify?token=${token}`)
  },

  /**
   * [GET] Returns the terms
   */
  async terms() {
    return await API.get('/terms')
  }
}
