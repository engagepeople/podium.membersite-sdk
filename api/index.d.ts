import { AxiosResponse } from 'axios'
import { PodiumAPI } from './podium-api'

declare module './podium-api' {
  interface PodiumAPI {
    /**************************************************************************
     * AUTH                                                                   *
     **************************************************************************/
    auth: {
      /**
       * Logs in user
       * @param username
       * @param password
       * @param programRegistrationId - optional
       */
      login: (
        username: string,
        password: string,
        programRegistrationId?: number
      ) => Promise<AxiosResponse<any>>

      /**
       * Logs out user
       */
      logout: () => Promise<AxiosResponse<any>>
    }

    /**************************************************************************
     * REGISTRATION                                                           *
     **************************************************************************/
    registration: {
      /**
       * [GET] Returns the types of registrations (made in Podium Admin)
       */
      types: () => Promise<AxiosResponse<any>>

      /**
       * [GET] Returns the registraion configration of a certain type
       * provided by the id
       * @param programId - program id
       */
      config: (programId: number) => Promise<AxiosResponse<any>>

      /**
       * [POST] the registration information
       * @param id - program id
       * @param payload - registration form inputs
       */
      submit: (id: number, data: any) => Promise<AxiosResponse<any>>

      /**
       * [GET] Verifies a users email after registration
       * @param token - email verification token
       */
      verifyEmail: (token: string) => Promise<AxiosResponse<any>>

      /**
       * [GET] Returns the terms
       */
      terms: () => Promise<AxiosResponse<any>>
    }

    /**************************************************************************
     * ACCOUNT                                                                *
     **************************************************************************/
    account: {
      /**
       * [GET] Returns the logged in user's details
       */
      details: () => Promise<AxiosResponse<any>>

      /**
       * [GET] Returns the logged in user's profile
       */
      profile: () => Promise<AxiosResponse<any>>

      /**
       * [GET] Returns logged in user's address list
       */
      addresses: () => Promise<AxiosResponse<any>>

      /**
       * [GET] Returns an address specified by `id`
       * @param id - address id
       */
      address: (id: number) => Promise<AxiosResponse<any>>

      /**
       * [POST] Adds a new address for the logged in user
       * @param address
       */
      newAddress: (address: any) => Promise<AxiosResponse<any>>

      /**
       * [PUT] Updates an address specified by `id`
       */
      updateAddress: (id: number, address: any) => Promise<AxiosResponse<any>>

      /**
       * [DELETE] Deletes an address specified by `id`
       * @param id - address id
       */
      deleteAddress: (id: number) => Promise<AxiosResponse<any>>

      /**
       * [GET] Returns transaction list of logged in user
       * @param id - account id
       * @param params - e.g. paginator params
       */
      transactions: (id: number, params: any) => Promise<AxiosResponse<any>>

      /**
       * [GET] Returns the travel token to be used with external services
       * @param id - user ID
       */
      travelToken: (id: number) => Promise<AxiosResponse<any>>

      /**
       * [GET] Returns the order list of logged in user
       * @param params
       */
      orders: (params?: object) => Promise<AxiosResponse<any>>

      /**
       * [PUT] Cancel an order by `orderId`
       * @param orderId
       */
      cancelOrder: (orderId: number) => Promise<AxiosResponse<any>>

      itineraries: (params?: object) => Promise<any>

      activities: (status?: string) => Promise<any>
    }

    /**************************************************************************
     * SHOP                                                                   *
     **************************************************************************/
    shop: {
      /**
       * [GET] Return a list of products according to parameters
       * @param params - facets, search, paginator etc.
       */
      products: (params: any) => Promise<AxiosResponse<any>>

      /**
       * [GET] Return a single product's information
       * @param slug - product slug
       * @param params - query string parameters
       */
      product: (slug: string, params: any) => Promise<AxiosResponse<any>>

      /**
       * [GET] Returns the products that are in the logged in user's wishlist
       */
      wishlist: () => Promise<AxiosResponse<any>>

      /**
       * [POST] Add product item to wishlist by product `id`
       * @param id - product id
       */
      addToWishlist: (id: number) => Promise<AxiosResponse<any>>

      /**
       * [DELETE] Remove product item from logged in user's wishlist
       * @param id - wishlist id
       */
      removeFromWishlist: (id: number) => Promise<AxiosResponse<any>>

      /**
       * [GET] Returns the cart details of the logged in user
       * @param currencyId - user's currency id
       */
      cart: (currencyId?: number) => Promise<any>

      /**
       * [POST] Adds a product item to logged in user's shopping cart
       * @param id - product id
       * @param quantity - product quantity
       * @param currencyId - user's currency id
       */
      addToCart: (
        id: number,
        quantity: number,
        currencyId: number,
        address?: object
      ) => Promise<AxiosResponse<any>>

      /**
       * [PUT] Update the quantity of an item in cart
       * @param cartId
       * @param cartItemId
       * @param quantity
       * @param address - optional parameter, required for giftcards
       */
      updateCart: (
        cartId: number,
        cartItemId: number,
        quantity: number,
        address?: object
      ) => Promise<AxiosResponse<any>>

      /**
       * [DELETE] Removes a product specified by `cartItemId`
       * from a cart specified by `cart
       * @param cartId - cart id
       * @param cartItemId - cart item id
       */
      removeFromCart: (
        cartId: number,
        cartItemId: number
      ) => Promise<AxiosResponse<any>>

      /**
       * [POST] Check out and place order
       * @param cartId
       * @param addressId
       * @param accountId
       * @param kountSessionId
       */
      checkOut: (
        cartId: number,
        accountId: number,
        kountSessionId: string,
        addressId?: number
      ) => Promise<AxiosResponse<any>>
    }
  }
}
