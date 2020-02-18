/// <reference path="./index.d.ts" />
import { PodiumAPI } from './podium-api'
import API from './index'

PodiumAPI.prototype.shop = {
  /**
   * [GET] Returns a list of products according to parameters
   * @param params - facets, search, paginator etc.
   */
  async products(params: any) {
    return await API.get('/member/product', { params })
  },

  /**
   * [GET] Returns the data for a single product, specified by `slug`
   * @param slug - product slug
   * @param params - query string parameters
   */
  async product(slug: string, params: any) {
    return await API.get(`/member/product/${slug}`, { params })
  },

  /**
   * [GET] Returns the products that are in the logged in user's wishlist
   */
  async wishlist() {
    return await API.get('/member/wishlist')
  },

  /**
   * [POST] Add product item to wishlist by product `id`
   * @param id - product id
   */
  async addToWishlist(id: number) {
    return await API.post('/member/wishlist', { product_variant_id: id })
  },

  /**
   * [DELETE] Remove product item from logged in user's wishlist
   * @param id - product id
   */
  async removeFromWishlist(id: number) {
    return await API.delete(`/member/wishlist/${id}`)
  },

  /**
   * [GET] Returns the cart details of the logged in user
   * @param currencyId - user's currency id
   */ async cart() {
    return await API.get('/shoppingCart')
  },

  /**
   * [POST] Adds a product item to logged in user's shopping cart
   * @param id - product id
   * @param quantity - product quantity
   * @param currencyId - user's currency id
   */
  async addToCart(
    id: number,
    quantity: number,
    currencyId: number,
    address?: object
  ) {
    let payload: object = {
      product_id: id,
      currency_id: currencyId,
      quantity
    }

    if (address && Object.entries(address).length) {
      payload = { ...payload, address }
    }

    return await API.post('/shoppingCart', payload)
  },

  /**
   * [PUT] Update the quantity of an item in cart
   * @param cartId
   * @param cartItemId
   * @param quantity
   * @param address - optional parameter, required for giftcards
   */
  async updateCart(
    cartId: number,
    cartItemId: number,
    quantity: number,
    address?: object
  ) {
    let payload: object = { quantity }

    if (address && Object.entries(address).length) {
      payload = { ...payload, address }
    }

    return await API.put(`/shoppingCart/${cartId}/item/${cartItemId}`, payload)
  },

  /**
   * [DELETE] Removes a product specified by `cartItemId`
   * from a cart specified by `cart
   * @param cartId - cart id
   * @param cartItemId - cart item id
   */
  async removeFromCart(cartId: number, cartItemId: number) {
    return await API.delete(`/shoppingCart/${cartId}/item/${cartItemId}`)
  },

  /**
   * [POST] Check out and place order
   * @param cartId
   * @param addressId
   * @param accountId
   * @param kountSessionId
   */
  async checkOut(
    cartId: number,
    accountId: number,
    kountSessionId: string,
    addressId?: number
  ) {
    const params = {
      shopping_cart_id: cartId,
      account_id: accountId,
      kount_session_id: kountSessionId
    }
    const payload = addressId ? { ...params, address_id: addressId } : params

    return await API.post('/shoppingCart/checkout', payload)
  }
}
