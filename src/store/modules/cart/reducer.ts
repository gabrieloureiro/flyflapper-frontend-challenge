import { Reducer } from 'redux'

import { CartStateInterface } from './types'

import { produce } from 'immer'

const INITIAL_STATE: CartStateInterface = {
  items: []
}

const cart: Reducer<CartStateInterface> = (
  state = INITIAL_STATE,
  action: any
): any => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id
        )

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].seat++
        } else {
          draft.items.push({
            product,
            seat: 1
          })
        }
        break
      }
      default: {
        return draft
      }
    }
  })
}

export default cart
