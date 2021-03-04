import { ProductInterface } from './types'

export const addProductToCartRequest = (product: ProductInterface): any => {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: { product }
  }
}

export const addProductToCartSuccess = (product: ProductInterface): any => {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: { product }
  }
}

export const addProductToCartFailure = (productId: string): any => {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: { productId }
  }
}

export const removeProductFromCart = (product: ProductInterface): any => {
  return {
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: { product }
  }
}

export const clearCart = (): any => {
  return {
    type: 'CLEAR_CART',
    payload: []
  }
}
