import { Reducer } from 'redux'

import { CartStateInterface } from './types'

import { produce } from 'immer'

const INITIAL_STATE: CartStateInterface = {
  items: [],
  failedStockCheck: []
}

const cart: Reducer<CartStateInterface> = (
  state = INITIAL_STATE,
  action: any
): any => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART_SUCCESS': {
        const { product } = action.payload

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id
        )

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++
        } else {
          draft.items.push({
            product,
            quantity: 1
          })
        }

        break
      }
      case 'ADD_PRODUCT_TO_CART_FAILURE': {
        const { productId } = action.payload

        draft.failedStockCheck.push(productId)

        break
      }
      case 'REMOVE_PRODUCT_FROM_CART': {
        const { product } = action.payload

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id
        )

        if (productInCartIndex >= 0) {
          if (draft.items[productInCartIndex].quantity >= 2) {
            draft.items[productInCartIndex].quantity--
          } else {
            draft.items.pop()
          }
        } else {
          break
        }

        break
      }
      case 'CLEAR_CART': {
        return INITIAL_STATE
      }
      default: {
        return draft
      }
    }
  })
}

export default cart
