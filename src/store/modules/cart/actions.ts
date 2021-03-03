import { ProductInterface } from './types'

export const addProductToCart = (product: ProductInterface): any => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: { product }
  }
}
