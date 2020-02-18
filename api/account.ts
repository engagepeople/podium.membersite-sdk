/// <reference path="./index.d.ts" />
import { PodiumAPI } from './podium-api'
import API from './index'

PodiumAPI.prototype.account = {
  /**
   * [GET] Returns the logged in user's details
   */
  async details() {
    return await API.get('/member/account')
  },

  /**
   * [GET] Returns the logged in user's profile
   */
  async profile() {
    return await API.get('/member/profile')
  },

  /**
   * [GET] Returns logged in user's address list
   */
  async addresses() {
    return await API.get('/address')
  },

  /**
   * [GET] Returns an address specified by `id`
   * @param id address id
   */
  async address(id: number) {
    return await API.get(`/address/${id}`)
  },

  /**
   * [POST] Adds a new address for the logged in user
   * @param address
   */
  async newAddress(address: any) {
    return await API.post('/address', address)
  },

  /**
   * [PUT] Updates an address specified by `id`
   */
  async updateAddress(id: number, address: any) {
    return await API.put(`/address/${id}`, address)
  },

  /*
   * [DELETE] Deletes an address specified by `id`
   */
  async deleteAddress(id: number) {
    return await API.delete(`/address/${id}`)
  },

  /**
   * [GET] Returns transaction list of logged in user
   * @param id account id
   * @param params e.g. paginator params
   */
  async transactions(id: number, params: any) {
    return await API.get(`/member/account/${id}/transaction`, params)
  },

  /**
   * [GET] Returns the travel token to be used with external services
   * @param id user id
   */
  async travelToken(id: number) {
    return await API.get(`/member/account/${id}/jwt`)
  },

  /**
   * [GET] Returns the order list of logged in user
   * @param params
   */
  async orders(params?: object) {
    return await API.get('/member/order', { params })
  },

  /**
   * [PUT] Cancel an order by `orderId`
   * @param orderId
   */
  async cancelOrder(orderId: number) {
    return await API.put(`/member/orderCancel/${orderId}`)
  },

  /**
   * [GET] Returns account itineraries
   * @param params
   */
  async itineraries(params?: object) {
    const res = {
      data: [
        {
          reference: 12041167470,
          date: 'Aug 20, 2019',
          total_points: 100000,
          total_cash: 108.4,
          items: [
            {
              type: 'flight',
              status: 'Success',
              from_date: '2019-04-28T05:00:00+00:00',
              to_date: '2019-05-05T05:00:00+00:00',
              flight_from: 'New York City, NY',
              flight_to: 'Las Vegas, NV',
              booking_id: 'RPWGWZ',
              passengers: 'Jane Smith, John Doe'
            },
            {
              type: 'hotel',
              status: 'Success',
              from_date: '2019-04-28T05:00:00+00:00',
              to_date: '2019-05-05T05:00:00+00:00',
              location: 'Las Vegas, NV',
              booking_id: 'BAWGWZ',
              guests: 'Jane Smith, John Doe'
            },
            {
              type: 'car',
              status: 'Success',
              from_date: '2019-04-28T05:00:00+00:00',
              to_date: '2019-05-05T05:00:00+00:00',
              name: 'Hotel room',
              location: 'Las Vegas, NV',
              booking_id: '135456345',
              driver: 'Robert Red'
            }
          ],
          billing_address: {
            name: 'Jane Smith',
            address: '220 Yonge Street',
            postal_code: 'M5B 2H1',
            city: 'Toronto',
            country: 'Canada',
            phone: '(647)123-4567',
            email: 'janesmith@email.com'
          }
        },
        {
          reference: 12041167470,
          date: 'Aug 20, 2019',
          total_points: 100000,
          total_cash: 108.4,
          items: [
            {
              type: 'flight',
              status: 'Success',
              from_date: '2019-04-28T05:00:00+00:00',
              to_date: '2019-05-05T05:00:00+00:00',
              flight_from: 'New York City, NY',
              flight_to: 'Las Vegas, NV',
              booking_id: 'RPWGWZ',
              passengers: 'Jane Smith, John Doe'
            },
            {
              type: 'hotel',
              status: 'Success',
              from_date: '2019-04-28T05:00:00+00:00',
              to_date: '2019-05-05T05:00:00+00:00',
              name: 'Hotel room',
              location: 'Las Vegas, NV',
              booking_id: 'BAWGWZ',
              guests: 'Jane Smith, John Doe'
            }
          ],
          billing_address: {
            name: 'Jane Smith',
            address: '220 Yonge Street',
            postal_code: 'M5B 2H1',
            city: 'Toronto',
            country: 'Canada',
            phone: '(647)123-4567',
            email: 'janesmith@email.com'
          }
        },
        {
          reference: 12041167470,
          date: 'Aug 20, 2019',
          total_points: 100000,
          total_cash: 108.4,
          items: [
            {
              type: 'flight',
              status: 'Success',
              from_date: '2019-04-28T05:00:00+00:00',
              to_date: '2019-05-05T05:00:00+00:00',
              flight_from: 'New York City, NY',
              flight_to: 'Las Vegas, NV',
              booking_id: 'RPWGWZ',
              passengers: 'Jane Smith, John Doe'
            },
            {
              type: 'hotel',
              status: 'Success',
              from_date: '2019-04-28T05:00:00+00:00',
              to_date: '2019-05-05T05:00:00+00:00',
              name: 'Hotel room',
              location: 'Las Vegas, NV',
              booking_id: 'BAWGWZ',
              guests: 'Jane Smith, John Doe'
            }
          ],
          billing_address: {
            name: 'Jane Smith',
            address: '220 Yonge Street',
            postal_code: 'M5B 2H1',
            city: 'Toronto',
            country: 'Canada',
            phone: '(647)123-4567',
            email: 'janesmith@email.com'
          }
        },
        {
          reference: 12041167470,
          date: 'Aug 20, 2019',
          total_points: 100000,
          total_cash: 108.4,
          items: [
            {
              type: 'flight',
              status: 'Success',
              from_date: '2019-04-28T05:00:00+00:00',
              to_date: '2019-05-05T05:00:00+00:00',
              flight_from: 'New York City, NY',
              flight_to: 'Las Vegas, NV',
              booking_id: 'RPWGWZ',
              passengers: 'Jane Smith, John Doe'
            },
            {
              type: 'hotel',
              status: 'Success',
              from_date: '2019-04-28T05:00:00+00:00',
              to_date: '2019-05-05T05:00:00+00:00',
              name: 'Hotel room',
              location: 'Las Vegas, NV',
              booking_id: 'BAWGWZ',
              guests: 'Jane Smith, John Doe'
            }
          ],
          billing_address: {
            name: 'Jane Smith',
            address: '220 Yonge Street',
            postal_code: 'M5B 2H1',
            city: 'Toronto',
            country: 'Canada',
            phone: '(647)123-4567',
            email: 'janesmith@email.com'
          }
        },
        {
          reference: 12041167470,
          date: 'Aug 20, 2019',
          total_points: 100000,
          total_cash: 108.4,
          items: [
            {
              type: 'flight',
              status: 'Success',
              from_date: '2019-04-28T05:00:00+00:00',
              to_date: '2019-05-05T05:00:00+00:00',
              flight_from: 'New York City, NY',
              flight_to: 'Las Vegas, NV',
              booking_id: 'RPWGWZ',
              passengers: 'Jane Smith, John Doe'
            },
            {
              type: 'hotel',
              status: 'Success',
              from_date: '2019-04-28T05:00:00+00:00',
              to_date: '2019-05-05T05:00:00+00:00',
              name: 'Hotel room',
              location: 'Las Vegas, NV',
              booking_id: 'BAWGWZ',
              guests: 'Jane Smith, John Doe'
            }
          ],
          billing_address: {
            name: 'Jane Smith',
            address: '220 Yonge Street',
            postal_code: 'M5B 2H1',
            city: 'Toronto',
            country: 'Canada',
            phone: '(647)123-4567',
            email: 'janesmith@email.com'
          }
        }
      ],
      last_page: 3
    }
    await new Promise((r) => setTimeout(r, 1000))

    return res
  },

  async activities(status: string = 'All') {
    // TODO: need to update api
    const res = {
      data: [
        {
          date: 'Jun 5, 2019',
          description: 'NEST.COM',
          amount: 90.4,
          status: 'eligible'
        },
        {
          date: 'May 28, 2019',
          description: 'SHELL #24315',
          amount: 76.78,
          status: 'Ineligible'
        },
        {
          date: 'May 5, 2019',
          description: 'APPLE STORE #R234',
          amount: 181.78,
          status: 'redeemed'
        },
        {
          date: 'May 3, 2019',
          description: 'COSTCO Markham',
          amount: 256.5,
          status: 'eligible'
        },
        {
          date: 'May 1, 2019',
          description: 'Disney+ Subscription',
          amount: 1321.12,
          status: 'eligible'
        },
        {
          date: 'Apr 28, 2019',
          description: 'GAP Markville',
          amount: 56.78,
          status: 'partly redeemed'
        }
      ]
    }

    await new Promise((r) => setTimeout(r, 1000))
    let result

    if (status === 'all') {
      result = res.data
    } else {
      result = res.data.filter((item) => {
        return item.status === status
      })
    }
    return result
  }
}
