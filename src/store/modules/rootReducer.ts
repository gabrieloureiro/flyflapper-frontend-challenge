import { combineReducers } from 'redux'

import { Theme } from '@/styles/styled'
import { CartStateInterface } from './cart/types'

import theme from './theme/reducer'

import cart from './cart/reducer'

export interface GlobalStateInterface {
  theme: Theme
  cart: CartStateInterface
}

export default combineReducers({
  theme,
  cart
})
