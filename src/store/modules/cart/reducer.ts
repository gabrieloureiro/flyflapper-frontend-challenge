import { Reducer } from 'redux'
import { CartStateInterface } from './types'

const INITIAL_STATE: CartStateInterface = {
  items: []
}

const cart: Reducer<CartStateInterface> = (
  state = INITIAL_STATE,
  action: any
): any => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const cart = action.payload

      return cart
    }
    default: {
      return state
    }
  }
}

export default cart
